import InternshipRequest from "../../model/StudentModel/Intership.js";

export async function createIntershipRequest(req, res, next) {
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
    const createIntershipRequest = await InternshipRequest.create(details);
    res.status(201).json({
      message: "Created Successfully",
      data: createIntershipRequest,
    });
  } catch (err) {
    console.log(err);
    next();
  }
}

export async function getIntership(req, res, next) {
  try {
    const getIntership = await InternshipRequest.find();
    res.status(200).json({
      message: "get successfully",
      data: getIntership,
    });
  } catch (err) {
    next();
  }
}
export async function getoneIntership(req, res, next) {
  try {
    const data = req.params;
    console.log("data", data.id);
    const requestId = data.id;
    const requestgetoneid = await InternshipRequest.find({
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

export async function deleteIntershipRequest(req, res, next) {
  try {
    const data = req.params;
    const internshipId = data.id;
    const deleteintership = await InternshipRequest.findByIdAndDelete(
      internshipId
    );
    res.status(200).json({
      message: "Deleted Successfully",
      data: deleteintership,
    });
  } catch (error) {
    next();
  }
}