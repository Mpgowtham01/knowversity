import ContactorStaffingDB from "../../../model/AdminModel/Resource/ContactorStaffingModel.js";

export async function PostContactor(req, res, next) {
  try {
    const data = req.body;
    console.log("data.CurrentCompanyNameline6", req.body);

    const details = {
      AadharNumber: data.AadharNumber,
      CompanyAddress: data.CompanyAddress,
      nameOftheOffice: data.nameOftheOffice,
      CompanyLocation: data.CompanyLocation,
      CompanyName: data.CompanyName,
      dataOfJoing: data.dataOfJoing,
      Designation: data.Designation,
      EmployeeIdNumber: data.EmployeeIdNumber,
      FromDate: data.FromDate,
      Marital: data.Marital,
      Todate: data.Todate,
      address: data.address,
      alternativeNumber: data.alternativeNumber,
      cityValue: data.cityValue,
      country: data.country,
      dateofBirth: data.dateofBirth,
      districtValue: data.districtValue,
      emailId: data.emailId,
      firstName: data.firstName,
      gender: data.gender,
      lastName: data.lastName,
      panNumber: data.panNumber,
      passportExpiryDate: data.passportExpiryDate,
      passportIssueDate: data.passportIssueDate,
      passportNumber: data.passportNumber,
      phoneNumber: data.phoneNumber,
      pincode: data.pincode,
      stateValue: data.stateValue,
    };

    const createContactorStaffing = ContactorStaffingDB.create(details);
    res.status(201).json({
      message: "Resource Contactor Staffing Created Successfully",
      data: createContactorStaffing,
    });
  } catch (err) {
    console.log(err);
    next();
  }
}

export async function updateContactorStaffing(req, res, next) {
  try {
    const data = req.body;
    const id = req.params.id;
    const existingDocument = await ContactorStaffingDB.findById(id);

    if (!existingDocument) {
      return res.status(404).json({ message: "Document not found" });
    }

    const updatedData = {
      ...existingDocument.toObject(),
      ...data,
    };

    const updateOffer = await ContactorStaffingDB.findByIdAndUpdate(id, updatedData, {
      useFindAndModify: false,
      new: true,
    });

    res.status(200).json({
      message: "Updated ContactorStaffing successfully",
      data: updateOffer,
    });
  } catch (err) {
    next(err);
  }
}


export async function ContactorStaffingGet(req, res, next) {
  try {
    const getDomainlist = await ContactorStaffingDB.find();
    res.status(200).json({
      message: "get successfully",
      data: getDomainlist,
    });
  } catch (err) {
    next();
  }
}

export async function deleteContractStaff(req, res, next) {
  try {
    const id = req.params.id;
    console.log("id", id);
    const deleteContract = await ContactorStaffingDB.findByIdAndDelete(id);
    res.status(200).json({
      message: "delete Successfully",
      data: deleteContract,
    });
  } catch (err) {
    console.log("err", err);
  }
}
