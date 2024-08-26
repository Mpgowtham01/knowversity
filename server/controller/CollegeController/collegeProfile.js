import ProfileDb from "../../model/CollegeModal/collegeProfile.js";

export async function profileCreate(req, res, next) {
  try {
    const data = req.body;
    const details = {
  University: data.University,
  College: data.College,
  Autonomous: data.Autonomous,
  Name: data.Name,
  Designation: data.Designation,
  Degree: data.Degree,
  Department: data.Department,
  PhoneNumber: data.PhoneNumber,
    };
    console.log("data.name", data);

    const ProfileCreate = await ProfileDb.create(details);
    res.status(201).json({
      message: "Profile Created Successfully",
      data: ProfileCreate,
    });
  } catch (err) {
    console.log(err);
    next();
  }
}
export async function getProfile(req, res, next) {
  try {
    const getProfile = await ProfileDb.find();
    res.status(200).json({
      message: "get successfully",
      data: getProfile,
    });
  } catch (err) {
    next();
  }
}

export async function profileUpdate(req, res, next) {
  try {
    const data = req.body;
    const id = req.params.id;
    const details = {
        University: data.University,
        College: data.College,
        Autonomous: data.Autonomous,
        Name: data.Name,
        Designation: data.Designation,
        Degree: data.Degree,
        Department: data.Department,
        PhoneNumber: data.PhoneNumber,
    };
    const ProfileUpdate = await ProfileDb.findByIdAndUpdate(id, details, {
      new: true,
    });
    res.status(200).json({
      message: "create successfully",
      data: ProfileUpdate,
    });
  } catch (err) {
    next();
  }
}

export async function deleteProfile(req, res, next) {
  try {
    const data = req.params;
    const ProfileId = data.id;
    const deleteProfile = await ProfileDb.findByIdAndDelete(ProfileId);
    res.status(200).json({
      message: "Deleted Successfully",
      data: deleteProfile,
    });
  } catch (error) {
    next();
  }
}
