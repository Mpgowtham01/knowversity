import holdListDb from "../../model/EmployerModel/HoldModel.js";

export async function createHold(req, res, next) {
  try {
    const data = req.body;
    const details = {
      userId: data.userId,
      Name: data.Name,
      Role: data.Role,
      Remark: data.Remark,
    };
    const createHold = await holdListDb.create(details);
    {
      res.status(201).json({
        message: "created Job successfully",
        data: createHold,
      });
    }
  } catch (err) {
    console.log(err);
    next();
  }
}

export async function getOneHold(req, res, next) {
  try {
    const id = req.params.id;
    const getHold = await holdListDb.find({ userId: id });
    res.status(200).json({
      message: "Get successfully",
      data: getHold,
    });
  } catch (err) {
    next();
  }
}

export async function updateHold(req, res, next) {
  try {
    const data = req.body;
    const id = req.params.id;
    const details = {
      Name: data.Name,
      Role: data.Role,
      Remark: data.Remark,
    };
    const updateHold = await holdListDb.findByIdAndUpdate(id, details);
    res.status(200).json({
      message: "updated successfully",
      data: updateHold,
    });
  } catch (err) {
    next();
  }
}

export async function deleteHold(req, res, next) {
  try {
    const HoldId = req.params.id;
    const HoldDelete = await holdListDb.findByIdAndDelete(HoldId);
    res.status(200).json({
      message: "deleted successfully",
      data: HoldDelete,
    });
  } catch (error) {
    next();
  }
}
