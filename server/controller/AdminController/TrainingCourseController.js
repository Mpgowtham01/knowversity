// controllers/courseController.js
import Course from "../../model/AdminModel/TrainingCourse.js"
import TrainerSignupDb from "../../model/signupModel/TrainerModel.js";
import Userdb from "../../model/userModel.js";
import CourseNotification from "../../model/NotificationModel/courseNotificationModel.js"; // Import the course notification model
import path from 'path';
import mongoose from "mongoose";

// Get all courses
export async function getCourses(req, res)  {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export async function matchTrainersBySkills(req, res) {
  const { id } = req.params; // course ID
  const { skillsRequired } = req.body; // Skills required for the course

  try {
    if (!Array.isArray(skillsRequired)) {
      return res.status(400).json({ message: 'Invalid skills array' });
    }

    // Find trainers whose skills match the course's required skills
    const trainers = await TrainerSignupDb.find({
      'professionalDetails.skills': { $in: skillsRequired }
    });

    if (!trainers.length) {
      return res.status(404).json({ message: 'No trainers found with matching skills' });
    }

    // Notify trainers about the course
    await Promise.all(trainers.map(async (trainer) => {
      const notification = new CourseNotification({
        message: `A new course requires your skills: ${id}`,
        recipient: trainer._id,
        course: id,
      });
      await notification.save();
    }));

    res.json({ trainers });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export async function respondToAssignment(req, res) {
  const { courseId, trainerId } = req.params;
  const { response } = req.body; // 'accept' or 'reject'

  try {
    if (response !== 'accept' && response !== 'reject') {
      return res.status(400).json({ message: 'Invalid response' });
    }

    if (response === 'accept') {
      await Course.findByIdAndUpdate(courseId, {
        $addToSet: { assignedTrainers: trainerId }
      });

      // Notify the course creator or relevant parties about the acceptance
      const notification = new CourseNotification({
        message: `Trainer (ID: ${trainerId}) has accepted the assignment for your course (ID: ${courseId}).`,
        recipient: 'courseCreator', // Change to the course creator's ID or relevant recipient
        course: courseId,
      });
      await notification.save();

    } else {
      await CourseNotification.deleteOne({
        course: courseId,
        recipient: trainerId
      });

      // Notify the course creator or relevant parties about the rejection
      const notification = new CourseNotification({
        message: `Trainer (ID: ${trainerId}) has rejected the assignment for your course (ID: ${courseId}).`,
        recipient: 'courseCreator', // Change to the course creator's ID or relevant recipient
        course: courseId,
      });
      await notification.save();
    }

    res.json({ message: `Trainer ${response}ed the assignment` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}


export async function getCourseNotificationsForTrainer(req, res) {
  const { trainerId } = req.params;

  try {
    const notifications = await CourseNotification.find({ recipient: trainerId })
      .populate('course') // This will populate the course details in the response
      .sort({ createdAt: -1 });
    res.json(notifications);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

// Function to assign trainers to a course and send notifications
export async function assignTrainersToCourse(req, res) {
  const { courseId } = req.params;
  const { trainers: trainerIds } = req.body; // Array of trainer IDs

  try {
    // Log the trainer IDs being processed
    console.log("Trainer IDs received:", trainerIds);

    // Find the course
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    // Ensure the trainer IDs are treated as ObjectId types
    const objectIdTrainerIds = trainerIds.map(id => mongoose.Types.ObjectId(id));

    // Find the trainers
    const trainers = await TrainerSignupDb.find({ _id: { $in: objectIdTrainerIds } });
    
    // Log the trainers found
    console.log("Trainers found:", trainers);

    if (!trainers.length) {
      return res.status(404).json({ message: 'No trainers found' });
    }

    // Create notifications for each trainer
    await Promise.all(trainers.map(async (trainer) => {
      const notificationMessage = `
        You have been assigned to a new course: ${course.title}.
        Course Details:
        - Description: ${course.description}
        - Instructor: ${course.instructor}
        - Duration: ${course.duration}
        - Start Date: ${course.startDate.toDateString()}
        - End Date: ${course.endDate.toDateString()}
        - Class Days: ${course.classDays.join(', ')}
        - Class Time: ${course.classTime.join(', ')}
        - Mode: ${course.mode}
        - Price: ${course.price}
      `;

      const notification = new CourseNotification({
        message: notificationMessage,
        recipient: trainer._id,
        course: courseId,
      });
      await notification.save();
    }));

    res.status(200).json({ message: 'Trainers assigned and notifications sent' });
  } catch (error) {
    console.error("Error in assigning trainers:", error);
    res.status(500).json({ message: error.message });
  }
}

// Create a new course
export async function createCourse(req, res) {
  const { title, description, instructor, duration, startDate, endDate, classDays, classTime, mode, price, rating, whatYoullLearn, technologies } = req.body;

  try {
    const imagePath = req.file ? `/TrainingCourseImages/${req.file.filename}` : ''; 

    const newCourse = new Course({
      title,
      description,
      instructor,
      duration,
      startDate,
      endDate,
      classDays,
      classTime,
      mode,
      price,
      image: imagePath, 
      rating,
      whatYoullLearn,
      technologies,
    });

    const savedCourse = await newCourse.save();
    res.status(201).json(savedCourse);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

export async function getCourseById(req, res) {
  const { id } = req.params;
  try {
    const course = await Course.findById(id);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.json(course);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

// Update curriculum by ID
export async function updateCourse(req, res) {
  const { id } = req.params;
  const updateFields = {};

  const fields = ['title', 'duration', 'trainer', 'startDate', 'endDate', 'classDays', 'classTime', 'mode', 'price', 'image', 'rating', 'description', 'whatYoullLearn', 'technologies'];

  // Populate updateFields with only the fields that have been provided in the request
  fields.forEach(field => {
    if (req.body[field] !== undefined && req.body[field] !== null && req.body[field] !== '') {
      updateFields[field] = req.body[field];
    }
  });

  try {
    const updatedCourse = await Course.findByIdAndUpdate(id, updateFields, { new: true });

    if (!updatedCourse) {
      return res.status(404).json({ message: 'Course not found' });
    }

    res.json(updatedCourse);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}


// Delete curriculum by ID
export async function deleteCourse(req, res) {
  const { id } = req.params;
  try {
    const deletedCourse = await Course.findByIdAndDelete(id);
    if (!deletedCourse) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.json({ message: 'Course deleted successfully' });
  } 
  catch (err) {
    res.status(500).json({ message: err.message });
  }
}

