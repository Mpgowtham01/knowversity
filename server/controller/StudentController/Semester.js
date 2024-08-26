import SemesterDb from "../../model/StudentModel/Qualification.js";

export async function createSemester(req, res, next) {
  try {
    const data = req.body;
    console.log("req.bodyyyyyyyyyy", req.body);
    const details = {
      course: data.course,
      semester: data.semester.map((value) => value.semester),
      //   xboard: "rt",
      arrear: data.arrear,
    };

    console.log("details", details);
    const createSemester = await SemesterDb.create(details);
    {
      res.status(201).json({
        message: " created ourprofile successfully",
        data: createSemester,
      });
    }
  } catch (err) {
    console.log(err);
    next();
  }
}

export async function getAllSemester(req, res, next) {
  try {
    const getAllSemester = await SemesterDb.find();
    res.status(200).json({
      message: "get successfully",
      data: getAllSemester,
    });
  } catch (err) {
    next();
  }
}

export async function updateSemester(req, res, next) {
  try {
    const data = req.body;
    const id = req.params.id;
    const details = {
      course: data.course,
      semester: data.semester,
      arrear: data.arrear,
    };

    const updateSemester = await SemesterDb.findByIdAndUpdate(id, details, {
      new: true,
    });
    res.status(200).json({
      message: "created successfully",
      data: updateSemester,
    });
  } catch (err) {
    next();
  }
}

export async function deleteSemester(req, res, next) {
  try {
    const data = req.params;
    const SemesterId = data.id;
    const deleteSemester = await SemesterDb.findByIdAndDelete(SemesterId);
    res.status(200).json({
      message: "Qualification deleted successfully",
      data: deleteSemester,
    });
  } catch (error) {
    next();
  }
}
