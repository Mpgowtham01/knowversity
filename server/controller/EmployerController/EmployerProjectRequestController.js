import projectrequestDB from "../../model/EmployerModel/ProjectRequestModal.js";

export async function createprojectRequest(req, res, next) {
  try {
    console.log("req.body :>> ", req.body);
    const data = req.body;
    const details = {
      role: data.role,
      email: data.email,
      projectTitle: data.projectTitle,
      duration: data.duration,
      qualification: data.qualification,
      locations: data.locations,
      skill: data.skill,
      UserID: data.UserID,
      employerID: data.employerID,
      userEmail: data.userEmail,
      technology: data.technology,
    };
    const exist = await projectrequestDB.findOne({
      projectTitle: data.projectTitle,
    });
    if (exist) {
      res.status(402).json({ message: "record already exist", data: exist });
    } else {
      const createOurProfile = await projectrequestDB.create(details);
      res.status(201).json({
        message: " created ourprofile successfully",
        data: createOurProfile,
      });
    }
  } catch (err) {
    console.log(err);
    next();
  }
}

export async function getAllProfile(req, res, next) {
  try {
    const getAllProfile = await projectrequestDB.find();
    res.status(200).json({
      message: "get successfully",
      data: getAllProfile,
    });
  } catch (err) {
    next();
  }
}
export async function getone(req, res, next) {
  try {
    const data = req.params;
    console.log("data", data);
    const requestId = data.id;
    const requestgetoneid = await projectrequestDB.find({
      projectID: requestId,
    });
    console.log("dfgsdfgsdg", requestgetoneid);
    res.status(200).json({
      message: "get Successfully",
      data: requestgetoneid,
    });
  } catch (e) {
    next();
  }
}

export async function getonerequests(req, res, next) {
  try {
    const data = req.params;
    const projectId = data.id;
    const projectgetoneid = await projectrequestDB.find({
      UserID: projectId,
    });
    res.status(200).json({
      message: "get Successfully",
      data: projectgetoneid,
    });
  } catch (e) {
    next();
  }
}

export async function getoneapproved(req, res, next) {
  try {
    const data = req.params;
    const projectId = data.id;
    const projectgetoneid = await projectrequestDB.find({
      employerID: projectId,
    });
    res.status(200).json({
      message: "get Successfully",
      data: projectgetoneid,
    });
  } catch (e) {
    next();
  }
}

export async function deleteOurProfile(req, res, next) {
  try {
    // const data = req.params;
    const profileId = req.params.id;
    const profileDelete = await projectrequestDB.findByIdAndRemove(profileId);
    res.status(200).json({
      message: "Deleted successfully",
      data: profileDelete,
    });
  } catch (error) {
    next();
  }
}
