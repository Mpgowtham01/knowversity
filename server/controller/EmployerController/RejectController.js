import rejectListDb from "../../model/EmployerModel/RejectModel.js";

export async function createReject(req, res, next) {
  try {
    const data = req.body;
    const details = {
      userId: data.userId,
      Name: data.Name,
      Role: data.Role,
      Reason: data.Reason,
    };
    const createReject = await rejectListDb.create(details);
    {
      res.status(201).json({
        message: "created Job successfully",
        data: createReject,
      });
    }
  } catch (err) {
    console.log(err);
    next();
  }
}

export async function getOneReject(req, res, next) {
  try {
    const id = req.params.id;
    const getReject = await rejectListDb.find({ userId: id });
    res.status(200).json({
      message: "Get successfully",
      data: getReject,
    });
  } catch (err) {
    next();
  }
}

export async function updateReject(req, res, next) {
  try {
    const data = req.body;
    const id = req.params.id;
    const details = {
      Name: data.Name,
      Role: data.Role,
      Reason: data.Reason,
    };
    const updateReject = await rejectListDb.findByIdAndUpdate(id, details);
    res.status(200).json({
      message: "updated successfully",
      data: updateReject,
    });
  } catch (err) {
    next();
  }
}

export async function deleteReject(req, res, next) {
  try {
    const RejectId = req.params.id;
    const RejectDelete = await rejectListDb.findByIdAndDelete(RejectId);
    res.status(200).json({
      message: "deleted successfully",
      data: RejectDelete,
    });
  } catch (error) {
    next();
  }
}
