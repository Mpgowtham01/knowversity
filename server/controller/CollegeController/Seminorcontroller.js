import SeminorDb from "../../model/CollegeModal/Seminarmodal.js";

export async function SeminorCreate(req, res, next) {
  try {
    const data = req.body;
    const SeminorDetail = {
      SeminorTitle: data.SeminorTitle,
      technology: data.technology,
      time: data.time,
      fromdate: data.fromdate,
      todate: data.todate,
      audience: data.audience,
      contactPerson: data.contactPerson,
      contactNumber: data.contactNumber,
      SeminorMode: data.SeminorMode,
      registrationLink: data.registrationLink,
      // brochure: data.brochure,
      about: data.about,
      fees: data.fees,
    };
    const SeminorCreate = await SeminorDb.create(SeminorDetail);
    res.status(201).json({
      message: "created Successfully",
      data: SeminorCreate,
    });
  } catch (err) {
    console.log(err);
    next();
  }
}

export async function getAllSeminor(req, res, next) {
  try {
    const getAllSeminor = await SeminorDb.find();
    res.status(200).json({
      message: "Get Successfully",
      data: getAllSeminor,
    });
  } catch (error) {
    console.log(error);
    next();
  }
}

export async function SeminorUpdate(req, res, next) {
  try {
    const data = req.body;
    const id = req.params.id;
    const SeminorDetail = {
      SeminorTitle: data.SeminorTitle,
      technology: data.technology,
      time: data.time,
      fromdate: data.fromdate,
      todate: data.todate,
      audience: data.audience,
      contactPerson: data.contactPerson,
      contactNumber: data.contactNumber,
      SeminorMode: data.SeminorMode,
      registrationLink: data.registrationLink,
      // brochure: data.brochure,
      about: data.about,
      fees: data.fees,
    };
    const SeminorUpdate = await SeminorDb.findByIdAndUpdate(id, SeminorDetail);
    res.status(200).json({
      message: "update Successfully",
      data: SeminorUpdate,
    });
  } catch (err) {
    console.log(err);
    next();
  }
}
export async function SeminorDelete(req, res, next) {
  try {
    const SeminorId = req.params.id;
    const SeminorDelete = await SeminorDb.findByIdAndDelete(SeminorId);
    res.status(200).json({
      message: "Deleted successfully",
      data: SeminorDelete,
    });
  } catch (err) {
    console.log(err);
    next();
  }
}


