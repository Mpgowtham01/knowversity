import GenderDb from "../../model/StudentModel/Gender.js"

export async function createGender(req, res, next) {
  try {
    const data = req.body;
    const details = {
      gender: data.gender,
    };
      const createGender = await GenderDb.create(details);
      res.status(201).json({
        message: "Gender Created Successfully",
        data: createGender,
      });
  } catch (err) {
    console.log(err);
    next();
  }
}
export async function getGenderList(req, res, next) {
  try {
    const getGenderlist = await GenderDb.find();
    res.status(200).json({
      message: "get successfully",
      data: getGenderlist,
    });
  } catch (err) {
    next();
  }
}

export async function updateGender(req, res, next) {
  try {
    const data = req.body;
    const id = req.params.id;
    const details = {
      gender: data.gender,
    };
    const updateGender = await GenderDb.findByIdAndUpdate(id, details, {
      new: true,
    });
    res.status(200).json({
      message: "create successfully",
      data: updateGender,
    });
  } catch (err) {
    next();
  }
}

export async function deleteGender(req, res, next) {
  try {
    const data = req.params;
    const GenderId = data.id;
    const deleteGender = await GenderDb.findByIdAndDelete(GenderId);
    res.status(200).json({
      message: "Deleted Successfully",
      data: deleteGender,
    });
  } catch (error) {
    next();
  }
}
