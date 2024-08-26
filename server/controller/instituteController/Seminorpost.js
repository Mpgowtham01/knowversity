import instituteseminarpostDb from "../../model/instituteModel/Seminorpost.js";

export async function seminarCreate(req, res, next) {
  try {
    const data = req.body;
    const seminarDetail = {
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
    const seminarCreate = await instituteseminarpostDb.create(seminarDetail);
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
    const getAllseminar = await instituteseminarpostDb.find();
    res.status(200).json({
      message: "Get Successfully",
      data: getAllseminar,
    });
  } catch (error) {
    console.log(error);
    next();
  }
}

export async function seminarUpdate(req, res, next) {
  try {
    const data = req.body;
    const id = req.params.id;
    const seminarDetail = {
      seminarTitle: data.seminarTitle,
      technology: data.technology,
      fromDate: data.fromDate,
      toDate: data.toDate,
      audience: data.audience,
      contactPerson: data.contactPerson,
      contactNumber: data.contactNumber,
      SeminarMode: data.SeminarMode,
      registrationLink: data.registrationLink,
      brochure: data.brochure,
      about: data.about,
      fees: data.fees,
    };
    const seminarUpdate = await instituteseminarpostDb.findByIdAndUpdate(
      id,
      seminarDetail
    );
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
    const seminarDelete = await instituteseminarpostDb.findByIdAndDelete(
      seminarId
    );
    res.status(200).json({
      message: "Deleted successfully",
      data: seminarDelete,
    });
  } catch (err) {
    console.log(err);
    next();
  }
}

export async function uploadImage(req, res, next) {
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
