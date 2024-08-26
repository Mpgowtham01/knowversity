import seminarDb from "../model/seminarModal.js";

export async function seminarCreate(req, res, next) {
  try {
    const data = req.body;
    console.log("data", data);
    const seminarDetail = {
      userId: data.userId,
      seminarTitle: data.seminarTitle,
      technology: data.technology,
      time: data.time,
      fromdate: data.fromdate,
      todate: data.todate,
      audience: data.audience,
      contactPerson: data.contactPerson,
      contactNumber: data.contactNumber,
      SeminarMode: data.SeminarMode,
      registrationLink: data.registrationLink,
      brochure: data.brochure,
      about: data.about,
      fees: data.fees,
    };
    const seminarCreate = await seminarDb.create(seminarDetail);
    res.status(201).json({
      message: "created Successfully",
      data: seminarCreate,
    });
  } catch (err) {
    console.log(err);
    next();
  }
}

export async function getAllseminar(req, res, next) {
  try {
    const getAllseminar = await seminarDb.find();
    res.status(200).json({
      message: "Get Successfully",
      data: getAllseminar,
    });
  } catch (error) {
    console.log(error);
    next();
  }
}

export async function getoneseminar(req, res, next) {
  try {
    const data = req.params;
    console.log("data");
    const requestId = data.id;
    const requestgetoneid = await seminarDb.find({
      userId: requestId,
    });
    res.status(200).json({
      message: "get Successfully",
      data: requestgetoneid,
    });
  } catch (e) {
    next();
  }
}

export async function seminarUpdate(req, res, next) {
  try {
    const data = req.body;
    const id = req.params.id;
    const seminarDetail = {
      Technology: data.Technology,
      Date: data.Number,
      Date: data.Number,
      Target: data.Target,
      ContactPerson: data.ContactPerson,
      ContactNumber: data.ContactNumber,
      SeminarMode: data.SeminarMode,
      Link: data.Link,
      // Register: data.Register,
      Brochure: data.Brochure,
      About: data.About,
      Fees: data.Fees,
    };
    const seminarUpdate = await seminarDb.findByIdAndUpdate(id, seminarDetail);
    res.status(200).json({
      message: "update Successfully",
      data: seminarUpdate,
    });
  } catch (err) {
    console.log(err);
    next();
  }
}
export async function seminarDelete(req, res, next) {
  try {
    const seminarId = req.params.id;
    const seminarDelete = await seminarDb.findByIdAndDelete(seminarId);
    res.status(200).json({
      message: "Deleted successfully",
      data: seminarDelete,
    });
  } catch (err) {
    console.log(err);
    next();
  }
}

export async function uploadImageSeminar(req, res, next) {
  try {
    console.log("req.file", req.file);
    const path = req.file.path;
    res.status(201).json({
      message: "added Successfully",
      path: path,
    });
  } catch (error) {
    next();
  }
}
