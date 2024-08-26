// controllers/curriculumController.js
import Curriculum from "../../model/AdminModel/Curriculummodel.js"
import path from 'path';

// Get all curriculum
export async function getCurriculum(req, res) {
  try {
    const curriculumList = await Curriculum.find();
    res.json(curriculumList);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

// Create a new curriculum
export async function createCurriculum(req, res) {
  const { title, duration, trainer, startDate, endDate, classDays, classTime, mode, price, image, rating, description, whatYoullLearn, subjectTopics, subject } = req.body;
 
  try {
    const imagePath = req.file ? `/CurriculumCourseImages/${req.file.filename}` : ''; 
    const newCurriculum = new Curriculum({
      title,
      duration,
      trainer,
      startDate,
      endDate,
      classDays,
      classTime,
      mode,
      price,
      image: imagePath,
      rating,
      description,
      whatYoullLearn,
      subjectTopics,
      subject,
    });
    const savedCurriculum = await newCurriculum.save();
    res.status(201).json(savedCurriculum);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

// Get curriculum by ID
export async function getCurriculumById(req, res) {
  const { id } = req.params;
  try {
    const curriculum = await Curriculum.findById(id);
    if (!curriculum) {
      return res.status(404).json({ message: 'Curriculum not found' });
    }
    res.json(curriculum);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

// Update curriculum by ID
export async function updateCurriculum(req, res) {
  const { id } = req.params;
  const { title, duration, trainer, startDate, endDate, classDays, classTime, mode, price, image, rating, description, whatYoullLearn, subjectTopics, subject } = req.body;

  try {
    const updatedCurriculum = await Curriculum.findByIdAndUpdate(id, {
      title,
      duration,
      trainer,
      startDate,
      endDate,
      classDays,
      classTime,
      mode,
      price,
      image,
      rating,
      description,
      whatYoullLearn,
      subjectTopics,
      subject,
    }, { new: true });

    if (!updatedCurriculum) {
      return res.status(404).json({ message: 'Curriculum not found' });
    }

    res.json(updatedCurriculum);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

// Delete curriculum by ID
export async function deleteCurriculum(req, res) {
  const { id } = req.params;
  try {
    const deletedCurriculum = await Curriculum.findByIdAndDelete(id);
    if (!deletedCurriculum) {
      return res.status(404).json({ message: 'Curriculum not found' });
    }
    res.json({ message: 'Curriculum deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
