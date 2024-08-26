import projectpostDB from "../../model/EmployerModel/ProjectpostModel.js";

export async function createproject(req, res, next) {
  try {
    const data = req.body;
    const details = {
      role: data.role,
      email: data.email,
      projectTitle: data.projectTitle,
      projectID: data.projectID,
      duration: data.duration,
      qualification: data.qualification,
      languages: data.languages,
      skills: data.skills,
      mode: data.mode,
      description: data.description,
    };
    const exist = await projectpostDB.findOne({
      projectTitle: data.projectTitle,
    });
    if (exist) {
      res.status(402).json({ message: "record already exist", data: exist });
    } else {
      const createOurProfile = await projectpostDB.create(details);
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
//put
export async function updateProject(req, res, next) {
  try {
    const data = req.body;
    const id = req.params.id;
    const existingDocument = await projectpostDB.findById(id);

    if (!existingDocument) {
      return res.status(404).json({ message: "Document not found" });
    }

    const updatedData = {
      ...existingDocument.toObject(),
      ...data,
    };

    const updateOffer = await projectpostDB.findByIdAndUpdate(id, updatedData, {
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



export async function getAllProfile(req, res, next) {
  try {
    const getAllProfile = await projectpostDB.find();
    res.status(200).json({
      message: "get successfully",
      data: getAllProfile,
    });
  } catch (err) {
    next();
  }
}

//
export async function getoneSpecific(req, res, next) {
  try {
    const data = req.params;
    console.log("data", data);
    const requestId = data.id;
    const requestgetoneid = await projectpostDB.findById(requestId);
    res.status(200).json({
      message: "get Successfully",
      data: requestgetoneid,
    });
  } catch (e) {
    next();
  }
}

export async function getone(req, res, next) {
  try {
    const data = req.params;
    console.log("data", data);
    const requestId = data.id;
    const requestgetoneid = await projectpostDB.find({
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

export async function getoneUser(req, res, next) {
  try {
    const data = req.params;
    const projectId = data.id;
    const projectgetoneid = await projectpostDB.findById(projectId);
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
    const profileDelete = await projectpostDB.findByIdAndRemove(profileId);
    res.status(200).json({
      message: "Deleted successfully",
      data: profileDelete,
    });
  } catch (error) {
    next();
  }
}
