import createJobFormDb from "../../model/EmployerModel/createJobModal.js";
import JobRequestDB from "../../model/ProfessionalModal/JobRequest.js";

export async function ProjectRequest(req, res, next) {
  try {
    const data = req.body;
    const details = {
      role: data.role,
      email: data.email,
      userEmail: data.userEmail,
      jobId: data.jobId,
      UserID: data.UserID,
      jobTitle: data.jobTitle,
      locations: data.locations,
      technology: data.technology,
      experience: data.experience,
      qualification: data.qualification,
      salaryRange: data.salaryRange,
      jobDescription: data.jobDescription,
      jobRole: data.jobRole,
      skill: data.skill,
    };
    const ProjectRequest = await JobRequestDB.create(details);
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
    const getRequest = await JobRequestDB.findById();
    res.status(200).json({
      message: "get successfully",
      data: getRequest,
    });
  } catch (err) {
    next();
  }
}

export async function getone(req, res, next) {
  try {
    const data = req.params;
    console.log("data", data.id);
    const requestId = data.id;
    const requestgetoneid = await JobRequestDB.find({
      jobId: requestId,
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
export async function getoneuser(req, res, next) {
  try {
    const data = req.params;
    console.log("data", data);
    const postsid = data.id;
    const postID = await JobRequestDB.find({ UserID: postsid });
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
//     const requestgetoneid = await JobRequestDB.find({
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
    const deleteRequest = await JobRequestDB.findByIdAndDelete(internshipId);
    res.status(200).json({
      message: "Deleted Successfully",
      data: deleteRequest,
    });
  } catch (error) {
    next();
  }
}
