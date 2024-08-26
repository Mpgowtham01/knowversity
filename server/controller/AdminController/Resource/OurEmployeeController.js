import OurEmployeesDB from "../../../model/AdminModel/Resource/OurEmployeesModel.js";

export async function OurEmployeepost(req, res, next) {
  try {
    const data = req.body;
    const details = {
      DEGREEyop: data.DEGREEyop,
      EmployeeId: data.EmployeeId,
      ExpCompanyName: data.ExpCompanyName,
      ExpFromDate: data.ExpFromDate,
      ExptoDate: data.ExptoDate,
      aadharNumber: data.aadharNumber,
      address: data.address,
      alternativeNumber: data.alternativeNumber,
      cityValue: data.cityValue,
      country: data.country,
      dateofBirth: data.dateofBirth,
      degreeboard: data.degreeboard,
      degreeper: data.degreeper,
      degrees: data.degrees,
      designation: data.designation,
      district: data.district,
      doj: data.doj,
      email: data.email,
      employerPasswordNumber: data.employerPasswordNumber,
      employerUserName: data.employerUserName,
      firstname: data.firstname,
      gboard: data.gboard,
      gender: data.gender,
      gmajor: data.gmajor,
      gper: data.gper,
      gyop: data.gyop,
      lastname: data.lastname,
      maritalstatus: data.maritalstatus,
      masmajor: data.masmajor,
      mmajor: data.mmajor,
      panNumber: data.panNumber,
      passportExpiryDate: data.passportExpiryDate,
      passportIssueDate: data.passportIssueDate,
      passportNumber: data.passportNumber,
      pgboard: data.pgboard,
      pgper: data.pgper,
      pgyop: data.pgyop,
      phoneNumber: data.phoneNumber,
      pincode: data.pincode,
      // resume: data.resume,
      stateValue: data.stateValue,
      // uploadPhoto: data.uploadPhoto,
      xboard: data.xboard,
      xiiboard: data.xiiboard,
      xiimajor: data.xiimajor,
      xiiper: data.xiiper,
      xiiyop: data.xiiyop,
      xmajor: data.xmajor,
      xper: data.xper,
      xyop: data.xyop,
    };
    const createAreaofinterest = await OurEmployeesDB.create(details);
    console.log('createAreaofinterest', createAreaofinterest)

    res.status(201).json({
      message: " Created Successfully",
      data: createAreaofinterest,
    });
  } catch (err) {
    console.log(err);
    next();
  }
}
export async function OurEmployeeGet(req, res, next) {
  try {
    const getDomainlist = await OurEmployeesDB.find();
    res.status(200).json({
      message: "get successfully",
      data: getDomainlist,
    });
  } catch (err) {
    next();
  }
}

export async function getoneUserOuEmployee(req, res) {
  try {
    const data = req.params;
    const employeeId = data.id;
    const employeegetoneid = await OurEmployeesDB.findById(employeeId);
    res.status(200).json({
      message: "get one id Successfully",
      data: employeegetoneid,
    });
  } catch (e) {
    throw e;
  }
}
export async function updateOuEmployee(req, res, next) {
  try {
    const data = req.body;
    const id = req.params.id;
    const existingDocument = await OurEmployeesDB.findById(id);

    if (!existingDocument) {
      return res.status(404).json({ message: "Document not found" });
    }

    const updatedData = {
      ...existingDocument.toObject(),
      ...data,
    };

    const updateOffer = await OurEmployeesDB.findByIdAndUpdate(id, updatedData, {
      useFindAndModify: false,
      new: true,
    });

    res.status(200).json({
      message: "Updated OurEmployees successfully",
      data: updateOffer,
    });
  } catch (err) {
    next(err);
  }
}
export async function ourEmployeeDelete(req, res, next) {
  try {
    const id = req.params.id;
    console.log("id", id);
    const deleteEmplyee = await OurEmployeesDB.findByIdAndDelete(id);
    res.status(200).json({
      message: "Delete Successfully",
      data: deleteEmplyee,
    });
  } catch (err) {
    next();
  }
}
