import traingCourse from "../../model/EmployerModel/Course.js";

export async function createCourse(req, res, next) {
  try {
    const data = req.body;
 
    const coursedetails = {
      userId: data.userId,
      companyName: data.companyName,
      course: data.course,
      // frameWork: data.frameWork,
      startDate: data.startDate,
      endDate: data.endDate,
      // CourseDuration: data.CourseDuration,
      Fees: data.Fees,
      modeOfStudy: data.modeOfStudy,
      mode: data.mode,
      Description: data.Description,
      language: data.language,
      // Technology: data.Technology,
      Trainer: data.Trainer,
      ContactNo: data.ContactNo,
    };
    console.log("coursedetails :>> ", coursedetails);
    const createCourse = await traingCourse.insertMany(data);
    res.status(201).json({
      message: "Course Created Successfully",
      data: createCourse,
    });
  } catch (err) {
    console.log(err);
    next();
  }
}

export async function getById(req, res, next) {
  const data = req.params;
  const value = data.id;
  console.log("value", value);
  try {
    const getAllProfile = await traingCourse.find({ userId: value });
    res.status(200).json({
      message: "get successfully",
      data: getAllProfile,
    });
  } catch (err) {
    next();
  }
}
export async function getAllCourses(req, res) {
  traingCourse
    .find()
    .then((exam) => {
      res.send(exam);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Error Occurred while retriving Course information",
      });
    });
}
export async function deleteCourse(req, res, next) {
  try {
    const data = req.params;
    const CourseId = data.id;
    const deleteCourse = await traingCourse.findByIdAndDelete(CourseId);
    res.status(200).json({
      message: "Deleted Successfully",
      data: deleteCourse,
    });
  } catch (error) {
    next();
  }
}