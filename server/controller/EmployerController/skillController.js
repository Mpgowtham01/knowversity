import skillDb from "../../model/EmployerModel/skillModel.js";

export async function skillCreate(req, res, next) {
  try {
    const data = req.body;
    const skillDetail = {
      skill: data.skill,
    };
    const skillCreate = await skillDb.create(skillDetail);
    res.status(201).json({
      message: "created Successfully",
      data: skillCreate,
    });
  } catch (err) {
    console.log(err);
    next();
  }
}

export async function getAllSkill(req, res, next) {
  try {
    const getAllskill = await skillDb.find();
    res.status(200).json({
      message: "Get Successfully",
      data: getAllskill,
    });
  } catch (error) {
    console.log(error);
    next();
  }
}

export async function skillUpdate(req, res, next) {
  try {
    const data = req.body;
    const id = req.params.id;
    const skillDetail = {
      skill: data.skill,
    };
    const skillUpdate = await skillDb.findByIdAndUpdate(id, skillDetail);
    res.status(200).json({
      message: "update Successfully",
      data: skillUpdate,
    });
  } catch (err) {
    console.log(err);
    next();
  }
}
export async function skillDelete(req, res, next) {
  try {
    const skillId = req.params.id;
    const skillDelete = await skillDb.findByIdAndDelete(skillId);
    res.status(200).json({
      message: "Deleted successfully",
      data: skillDelete,
    });
  } catch (err) {
    console.log(err);
    next();
  }
}
