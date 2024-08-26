import EmployerJobRequestDB from "../../model/EmployerModel/EmployerJobRequest.js";

export async function JobRequest(req, res, next) {
  try {
    const data = req.body;
    console.log("data", data);
    const details = {
      role: data.role,
      email: data.email,
      userEmail: data.userEmail,
      jobId: data.jobId,
      UserID: data.UserID,
      jobTitle: data.jobTitle,
      location: data.location,
      experience: data.experience,
      companyMailId: data.companyMailId,
      jobType: data.jobType,
    };
    const JobRequest = await EmployerJobRequestDB.create(details);
    res.status(201).json({
      message: "Created Successfully",
      data: JobRequest,
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
    const getRequest = await EmployerJobRequestDB.find();
    res.status(200).json({
      message: "get successfully",
      data: getRequest,
    });
  } catch (err) {
    next();
  }
}

export async function getoneuser(req, res, next) {
  try {
    const data = req.params;
    console.log("datass", data.id);
    const postsid = data.id;
    const postID = await EmployerJobRequestDB.find({ UserID: postsid });
    res.status(200).json({
      message: "get Succcessfully",
      data: postID,
    });
  } catch (e) {
    next();
  }
}

export async function Approvedgetoneuser(req, res, next) {
  try {
    const data = req.params;
    console.log("datass", data.id);
    const postsid = data.id;
    const postID = await EmployerJobRequestDB.find({ jobId: postsid });
    res.status(200).json({
      message: "get Succcessfully",
      data: postID,
    });
  } catch (e) {
    next();
  }
}
// export async function getoneUser(req, res, next) {
//   try {
//     const data = req.params;
//     console.log("data", data);
//     const requestId = data.id;
//     const requestgetoneid = await EmployerJobRequestDB.find({
//       projectID: requestId,
//     });
//     console.log(requestgetoneid);
//     res.status(200).json({
//       message: "get Successfully",
//       data: requestgetoneid,
//     });
//   } catch (e) {
//     next();
//   }
// }
export async function deleteRequest(req, res, next) {
  try {
    const data = req.params;
    const internshipId = data.id;
    const deleteRequest = await EmployerJobRequestDB.findByIdAndDelete(
      internshipId
    );
    res.status(200).json({
      message: "Deleted Successfully",
      data: deleteRequest,
    });
  } catch (error) {
    next();
  }
}
