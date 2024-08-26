import personalInfoDb from "../../model/ProfessionalModal/PersonalInformation.js";

export async function personalInfo(req, res, next) {
  try {
    const data = req.body;
    const details = {
 
        firstName: data.firstName,
        lastName: data.lastName,
        phoneNumber: data.phoneNumber,
        dateofBirth: data.dateofBirth,
        gender: data.gender,
        maritalStatus: data.maritalStatus,
        email: data.email,
        address: data.address,
        country:data.country,
        state: data.state,
        district:data.district,
        resume: data.resume
     
    };
    const createpersonalInfo = await personalInfoDb.create(details);
    if (createpersonalInfo) {
      res.status(201).json({
        message: "personalInfo Created Successfully",
        data: createpersonalInfo,
      });
    }
  } catch (err) {
    console.log(err);
    next();
  }
}
export async function getpersonalInfo(req, res, next) {
  try {
    const getpersonalInfo = await personalInfoDb.find();
    res.status(200).json({
      message: "get successfully",
      data: getpersonalInfo,
    });
  } catch (err) {
    next();
  }
}

export async function updatepersonalInfo(req, res, next) {
  try {
    const data = req.body;
    // const id = req.params.id;
    const details = {
   
        firstName: data.firstName,
        lastName: data.lastName,
        phoneNumber: data.phoneNumber,
        dateofBirth: data.dateofBirth,
        gender: data.gender,
        maritalStatus: data.maritalStatus,
        email: data.email,
        address: data.address,
        country:data.country,
        state: data.state,
        district:data.district,
        resume: data.resume
    };
    const updatepersonalInfo = await personalInfoDb.findByIdAndUpdate(id, details, {
      new: true,
    });
    res.status(200).json({
      message: "Updated successfully",
      data: updatepersonalInfo,
    });
  } catch (err) {
    next();
  }
}

export async function deletepersonalInfo(req, res, next) {
  try {
    const data = req.params;
    const personalInfoId = data.id;
    const personalInfoDelete = await personalInfoDb.findByIdAndDelete(personalInfoId);
    res.status(200).json({
      message: "Deleted Successfully",
      data: personalInfoDelete,
    });
  } catch (error) {
    next();
  }
}

