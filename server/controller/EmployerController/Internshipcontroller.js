import InternshipDb from "../../model/EmployerModel/Internshipmodel.js";

export async function createInternship(req, res, next) {
  try {
    const data = req.body;
    const details = {
      role: data.role,
      email: data.email,
      userEmail: data.userEmail,
      jobId: data.jobId,
      jobTitle: data.jobTitle,
      location: data.location,
      technology: data.technology,
      experience: data.experience,
      qualification: data.qualification,
      salaryRange: data.salaryRange,
      languagePreference: data.languagePreference,
      responsibilities: data.responsibilities,
      jobDescription: data.jobDescription,
      companyWebsite: data.companyWebsite,
      companyMailId: data.companyMailId,
      jobRole: data.jobRole,
      jobType: data.jobType,
      jobMode: data.jobMode,
      skill: data.skill,
      noticePeriod: data.noticePeriod,
    };
    const createInternship = await InternshipDb.create(details);
    {
      res.status(201).json({
        message: "created Job successfully",
        data: createInternship,
      });
    }
  } catch (err) {
    console.log(err);
    next();
  }
}

export async function getInternship(req, res, next) {
  try {
    const getInternship = await InternshipDb.find();
    res.status(200).json({
      message: "Get successfully",
      data: getInternship,
    });
  } catch (err) {
    next();
  }
}

export async function getone(req, res, next) {
  try {
    const data = req.params;
    console.log("data.id");
    const requestId = data.id;
    const requestgetoneid = await InternshipDb.find({
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

export async function updateInternship(req, res, next) {
  try {
    const data = req.body;
    const id = req.params.id;
    const details = {
      jobTitle: data.jobTitle,
      locations: data.locations,
      experience: data.experience,
      userEmail: data.userEmail,
      qualification: data.qualification,
      salaryRange: data.salaryRange,
      languagePreference: data.languagePreference,
      interviewType: data.interviewType,
      responsibilities: data.responsibilities,
      jobDescription: data.jobDescription,
      companyWebsite: data.companyWebsite,
      companyMailId: data.companyMailId,
      technology: data.technology,
      jobRole: data.jobRole,
      jobType: data.jobType,
      jobMode: data.jobMode,
      skill: data.skill,
      noticePeriod: data.noticePeriod,
      companyLogo: data.companyLogo,
    };
    const updateInternship = await InternshipDb.findByIdAndUpdate(id, details);
    res.status(200).json({
      message: "updated successfully",
      data: updateInternship,
    });
  } catch (err) {
    next();
  }
}

export async function deleteInternship(req, res, next) {
  try {
    const InternshipId = req.params.id;
    const InternshipDelete = await InternshipDb.findByIdAndDelete(InternshipId);
    res.status(200).json({
      message: "deleted successfully",
      data: InternshipDelete,
    });
  } catch (error) {
    next();
  }
}
