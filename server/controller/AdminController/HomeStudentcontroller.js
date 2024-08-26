import HomeStudentDb from "../../model/AdminModel/HomeStudentmodel.js";

export async function createHomeStudent(req, res, next) {
  try {
    const data = req.body;
    const details = {
      name: data.name,
      StudentImage: data.StudentImage,
    };
    const createHomeStudent = await HomeStudentDb.create(details);
    if (createHomeStudent) {
      res.status(201).json({
        message: "aboutus Created Successfully",
        data: createHomeStudent,
      });
    }
  } catch (err) {
    console.log(err);
    next();
  }
}
export async function getHomeStudent(req, res, next) {
  try {
    const getHomeStudent = await HomeStudentDb.find();
    res.status(200).json({
      message: "get successfully",
      data: getHomeStudent,
    });
  } catch (err) {
    next();
  }
}

export async function updateHomeStudent(req, res, next) {
  try {
    const data = req.body;
    const details = {
      name: data.name,
      StudentImage: data.StudentImage,
    };
    const updateHomeStudent = await HomeStudentDb.findByIdAndUpdate(
      id,
      details,
      {
        new: true,
      }
    );
    res.status(200).json({
      message: "Updated successfully",
      data: updateHomeStudent,
    });
  } catch (err) {
    next();
  }
}

export async function deleteHomeStudent(req, res, next) {
  try {
    const data = req.params;
    const HomeStudentId = data.id;
    const HomeStudentDelete = await HomeStudentDb.findByIdAndDelete(
      HomeStudentId
    );
    res.status(200).json({
      message: "Deleted Successfully",
      data: HomeStudentDelete,
    });
  } catch (error) {
    next();
  }
}

export async function UploadHomeStudent(req, res, next) {
  try {
    const path = req.file.path;
    res.status(201).json({
      message: "added successfully",
      path: path,
    });
  } catch (error) {
    next();
  }
}
