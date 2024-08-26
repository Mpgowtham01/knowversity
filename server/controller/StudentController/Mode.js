import ModeDb from "../../model/StudentModel/Mode.js"

export async function createMode(req, res, next) {
  try {
    const data = req.body;
    const details = {
      Mode: data.Mode,
    };
      const createMode = await ModeDb.create(details);
      res.status(201).json({
        message: "Mode Created Successfully",
        data: createMode,
      });
  } catch (err) {
    console.log(err);
    next();
  }
}
export async function getModeList(req, res, next) {
  try {
    const getModelist = await ModeDb.find();
    res.status(200).json({
      message: "get successfully",
      data: getModelist,
    });
  } catch (err) {
    next();
  }
}

export async function updateMode(req, res, next) {
  try {
    const data = req.body;
    const id = req.params.id;
    const details = {
      Mode: data.Mode,
    };
    const updateMode = await ModeDb.findByIdAndUpdate(id, details, {
      new: true,
    });
    res.status(200).json({
      message: "create successfully",
      data: updateMode,
    });
  } catch (err) {
    next();
  }
}

export async function deleteMode(req, res, next) {
  try {
    const data = req.params;
    const ModeId = data.id;
    const deleteMode = await ModeDb.findByIdAndDelete(ModeId);
    res.status(200).json({
      message: "Deleted Successfully",
      data: deleteMode,
    });
  } catch (error) {
    next();
  }
}
