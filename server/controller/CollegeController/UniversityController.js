import UniversityListDb from "../../model/CollegeModal/UniversityModal.js";

export async function UniversityListCreate(req, res, next) {
  try {
    const data = req.body;
    const details = {
      UniversityName: data.UniversityName,
    };
    console.log("data.name", data);

    const UniversityListCreate = await UniversityListDb.create(details);
    res.status(201).json({
      message: "UniversityList Created Successfully",
      data: UniversityListCreate,
    });
  } catch (err) {
    console.log(err);
    next();
  }
}
export async function getUniversityList(req, res, next) {
  try {
    const getUniversityList = await UniversityListDb.find();
    res.status(200).json({
      message: "get successfully",
      data: getUniversityList,
    });
  } catch (err) {
    next();
  }
}

export async function UniversityListUpdate(req, res, next) {
  try {
    const data = req.body;
    const id = req.params.id;
    const details = {
        UniversityName: data.UniversityName,
    };
    const UniversityListUpdate = await UniversityListDb.findByIdAndUpdate(id, details, {
      new: true,
    });
    res.status(200).json({
      message: "create successfully",
      data: UniversityListUpdate,
    });
  } catch (err) {
    next();
  }
}

export async function deleteUniversityList(req, res, next) {
  try {
    const data = req.params;
    const UniversityListId = data.id;
    const deleteUniversityList = await UniversityListDb.findByIdAndDelete(UniversityListId);
    res.status(200).json({
      message: "Deleted Successfully",
      data: deleteUniversityList,
    });
  } catch (error) {
    next();
  }
}
