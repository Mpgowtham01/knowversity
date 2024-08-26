import CollegeListDb from "../../model/CollegeModal/CollegeListModel.js";

export async function CollegeListCreate(req, res, next) {
  try {
    const data = req.body;
    const details = {
      CollegeName: data.CollegeName,
      UniversityId: data.UniversityId,
    };
    console.log("data.name", data);

    const CollegeListCreate = await CollegeListDb.create(details);
    res.status(201).json({
      message: "CollegeList Created Successfully",
      data: CollegeListCreate,
    });
  } catch (err) {
    console.log(err);
    next();
  }
}
export async function getCollegeList(req, res, next) {
  try {
    const getCollegeList = await CollegeListDb.find();
    res.status(200).json({
      message: "get successfully",
      data: getCollegeList,
    });
  } catch (err) {
    next();
  }
}

export async function CollegeListUpdate(req, res, next) {
  try {
    const data = req.body;
    const id = req.params.id;
    const details = {
        CollegeName: data.CollegeName,
        UniversityId: data.UniversityId,
    };
    const CollegeListUpdate = await CollegeListDb.findByIdAndUpdate(id, details, {
      new: true,
    });
    res.status(200).json({
      message: "create successfully",
      data: CollegeListUpdate,
    });
  } catch (err) {
    next();
  }
}

export async function deleteCollegeList(req, res, next) {
  try {
    const data = req.params;
    const collegeListId = data.id;
    const deleteCollegeList = await CollegeListDb.findByIdAndDelete(collegeListId);
    res.status(200).json({
      message: "Deleted Successfully",
      data: deleteCollegeList,
    });
  } catch (error) {
    next();
  }
}
