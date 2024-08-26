import createJobFormDb from "../../model/EmployerModel/createJobModal.js";

export async function createJobForm(req, res, next) {
  try {
    const data = req.body;
    const details = {
      role: data.role,
      email: data.email,
      jobId: data.jobId,
      jobTitle: data.jobTitle,
      location: data.location,
      technology: data.technology,
      experience: data.experience,
      qualification: data.qualification,
      salaryRange: data.salaryRange,
      languagePreference: data.languagePreference,
      companyDescription: data.companyDescription,
      jobDescription: data.jobDescription,
      companyWebsite: data.companyWebsite,
      companyMailId: data.companyMailId,
      jobRole: data.jobRole,
      jobType: data.jobType,
      jobMode: data.jobMode,
      skill: data.skill,
      noticePeriod: data.noticePeriod,
    };
    const createJobForm = await createJobFormDb.create(details);
    {
      res.status(201).json({
        message: "created Job successfully",
        data: createJobForm,
      });
    }
  } catch (err) {
    console.log(err);
    next();
  }
}

export async function getCreateJob(req, res, next) {
  try {
    const getCreateJob = await createJobFormDb.find();
    res.status(200).json({
      message: "Get successfully",
      data: getCreateJob,
    });
  } catch (err) {
    next();
  }
}

export async function getone(req, res, next) {
  try {
    const requestId = req.params.id;
    console.log("requestId", requestId);
    const requestgetoneid = await createJobFormDb.find({
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

// export async function updateCreateJob(req, res, next) {
//   try {
//     const data = req.body;
//     const id = req.params.id;
//     const details = {
//       jobTitle: data.jobTitle,
//       locations: data.locations,
//       experience: data.experience,
//       qualification: data.qualification,
//       salaryRange: data.salaryRange,
//       languagePreference: data.languagePreference,
//       interviewType: data.interviewType,
//       companyDescription: data.companyDescription,
//       jobDescription: data.jobDescription,
//       companyWebsite: data.companyWebsite,
//       companyMailId: data.companyMailId,
//       technology: data.technology,
//       jobRole: data.jobRole,
//       jobType: data.jobType,
//       jobMode: data.jobMode,
//       skill: data.skill,
//       noticePeriod: data.noticePeriod,
//       companyLogo: data.companyLogo,
//     };
//     const updateCreateJob = await createJobFormDb.findByIdAndUpdate(
//       id,
//       details
//     );
//     res.status(200).json({
//       message: "updated successfully",
//       data: updateCreateJob,
//     });
//   } catch (err) {
//     next();
//   }
// }

export async function updateCreateJob(req, res, next) {
  try {
    const data = req.body;
    const id = req.params.id;
    const existingDocument = await createJobFormDb.findById(id);

    if (!existingDocument) {
      return res.status(404).json({ message: "Document not found" });
    }

    const updatedData = {
      ...existingDocument.toObject(),
      ...data,
    };

    const updateOffer = await createJobFormDb.findByIdAndUpdate(id, updatedData, {
      useFindAndModify: false,
      new: true,
    });

    res.status(200).json({
      message: "Updated successfully",
      data: updateOffer,
    });
  } catch (err) {
    next(err);
  }
}



export async function deleteCreateJob(req, res, next) {
  try {
    const createJobId = req.params.id;
    const createJobDelete = await createJobFormDb.findByIdAndDelete(
      createJobId
    );
    res.status(200).json({
      message: "deleted successfully",
      data: createJobDelete,
    });
  } catch (error) {
    next();
  }
}
