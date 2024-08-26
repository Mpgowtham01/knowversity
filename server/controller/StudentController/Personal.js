import PersonalFormDb from "../../model/StudentModel/Personal.js";

export async function createPersonal(req, res, next) {
  try {
    console.log("req.body", req.body);
    const data = req.body;
    const details = {
      firstName: data.firstName,
      lastName: data.lastName,
      dob: data.dob,
      registerId: data.registerId,
      gender: data.gender,
      //   nationality: data.country,
      email: data.email,
      address: data.address,
      country: data.country,
      state: data.state,
      district: data.district,
      city: data.city,
      meritalStatus: data.meritalStatus,
      school: data.school,
      class: data.class,
      image: data.image,
      //   country: data.country,
      //   state: data.state,
      //   district: data.district,
    };
    const createPersonal = await PersonalFormDb.create(details);
    {
      res.status(201).json({
        message: " created ourprofile successfully",
        data: createPersonal,
      });
    }
  } catch (err) {
    console.log(err);
    next();
  }
}

export async function getAllPersonal(req, res, next) {
  try {
    const getAllPersonal = await PersonalFormDb.find();
    res.status(200).json({
      message: "get successfully",
      data: getAllPersonal,
    });
  } catch (err) {
    next();
  }
}
export async function getonePersonal(req, res, next) {
  try {
    console.log("req.params", req.params, req.body);
    const data = req.params.id;
    const personalgetoneid = await PersonalFormDb.findById(data);
    res.status(200).json({
      message: "get Successfully",
      data: personalgetoneid,
    });
    console.log(personalgetoneid, "personal");
  } catch (e) {
    next();
  }
}

export async function updatePersonal(req, res, next) {
  try {
    const data = req.body;
    const id = req.params.id;
    const details = {
      firstName: data.firstName,
      lastName: data.lastName,
      dob: data.dob,
      registerNumber: data.registerNumber,
      gender: data.gender,
      nationality: data.nationality,
      address: data.address,
      country: data.country,
      state: data.state,
      district: data.district,
      meritalStatus: data.meritalStatus,
      school: data.school,
      class: data.class,
      country: data.country,
      state: data.state,
      district: data.district,
    };

    const updatePersonal = await PersonalFormDb.findByIdAndUpdate(id, details, {
      new: true,
    });
    res.status(200).json({
      message: "created successfully",
      data: updatePersonal,
    });
  } catch (err) {
    next();
  }
}

export async function deletePersonal(req, res, next) {
  try {
    const data = req.params;
    const PersonalId = data.id;
    const deletePersonal = await PersonalFormDb.findByIdAndDelete(PersonalId);
    res.status(200).json({
      message: " profile deleted successfully",
      data: deletePersonal,
    });
  } catch (error) {
    next();
  }
}

export async function uploadStudentImage(req, res, next) {
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
