import projectpostDB from "../../model/EmployerModel/ProjectpostModel.js";
import ProjetRequestDB from "../../model/StudentModel/RequestModel.js";

export async function ProjectRequest(req, res, next) {
  try {
    const data = req.body;
    const details = {
      role: data.role,
      email: data.email,
      UserID: data.UserID,
      userEmail: data.userEmail,
      projectID: data.projectID,
      projectTitle: data.projectTitle,
      duration: data.duration,
      languages: data.languages,
      description: data.description,
      qualification: data.qualification,
      skills: data.skills,
    };
    const ProjectRequest = await ProjetRequestDB.create(details);
    res.status(201).json({
      message: "Created Successfully",
      data: ProjectRequest,
    });
  } catch (err) {
    console.log(err);
    next();
  }
}
export async function getRequest(req, res, next) {
  try {
    const data = req.body;
    console.log("data", data);
    const getRequest = await ProjetRequestDB.findById();
    res.status(200).json({
      message: "get successfully",
      data: getRequest,
    });
  } catch (err) {
    next();
  }
}

export async function getoneUser(req, res, next) {
  try {
    const data = req.params;
    console.log("data", data);
    const requestId = data.id;
    const requestgetoneid = await ProjetRequestDB.find({
      UserID: requestId,
    });
    console.log(requestgetoneid);
    res.status(200).json({
      message: "get Successfully",
      data: requestgetoneid,
    });
  } catch (e) {
    next();
  }
}
export async function getoneUsers(req, res, next) {
  try {
    const data = req.params;
    console.log("data", data);
    const requestId = data.id;
    const requestgetoneid = await ProjetRequestDB.find({
      projectID: requestId,
    });
    console.log(requestgetoneid);
    res.status(200).json({
      message: "get Successfully",
      data: requestgetoneid,
    });
  } catch (e) {
    next();
  }
}
export async function deleteRequest(req, res, next) {
  try {
    const data = req.params;
    const internshipId = data.id;
    const deleteRequest = await ProjetRequestDB.findByIdAndDelete(internshipId);
    res.status(200).json({
      message: "Deleted Successfully",
      data: deleteRequest,
    });
  } catch (error) {
    next();
  }
}
