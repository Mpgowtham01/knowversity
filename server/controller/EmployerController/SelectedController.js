import selectedListDb from "../../model/EmployerModel/SelectedModel.js";

export async function createSelected(req, res, next) {
  try {
    const data = req.body;
    const details = {
      userId: data.userId,
      Name: data.Name,
      Role: data.Role,
      Remark: data.Remark,
    };
    const createSelected = await selectedListDb.create(details);
    {
      res.status(201).json({
        message: "created Job successfully",
        data: createSelected,
      });
    }
  } catch (err) {
    console.log(err);
    next();
  }
}

export async function getOneSelected(req, res, next) {
  try {
    const id = req.params.id;
    const getSelected = await selectedListDb.find({ userId: id });
    res.status(200).json({
      message: "Get successfully",
      data: getSelected,
    });
  } catch (err) {
    next();
  }
}

export async function updateSelected(req, res, next) {
  try {
    const data = req.body;
    const id = req.params.id;
    const details = {
      Name: data.Name,
      Role: data.Role,
      Remark: data.Remark,
    };
    const updateSelected = await selectedListDb.findByIdAndUpdate(id, details);
    res.status(200).json({
      message: "updated successfully",
      data: updateSelected,
    });
  } catch (err) {
    next();
  }
}

export async function deleteSelected(req, res, next) {
  try {
    const selectedId = req.params.id;
    const selectedDelete = await selectedListDb.findByIdAndDelete(selectedId);
    res.status(200).json({
      message: "deleted successfully",
      data: selectedDelete,
    });
  } catch (error) {
    next();
  }
}
