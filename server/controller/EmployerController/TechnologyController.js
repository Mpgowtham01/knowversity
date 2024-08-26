import createtechnologyForm from "../../model/EmployerModel/TechnologyModel.js";

export async function technologyCreate(req, res, next) {
  try {
    const data = req.body;
    const technologyDetail = {
      technology: data.technology,
    };
    const technologyCreate = await createtechnologyForm.create(
      technologyDetail
    );
    res.status(201).json({
      message: "created Successfully",
      data: technologyCreate,
    });
  } catch (err) {
    console.log(err);
    next();
  }
}

export async function getAlltechnology(req, res, next) {
  try {
    const getAlltechnology = await createtechnologyForm.find();
    res.status(200).json({
      message: "Get Successfully",
      data: getAlltechnology,
    });
  } catch (error) {
    console.log(error);
    next();
  }
}




export async function technologyUpdate(req, res, next) {
  try {
    const data = req.body;
    const id = req.params.id;
    const technologyDetail = {
      technology: data.technology,
    };
    const technologyUpdate = await createtechnologyForm.findByIdAndUpdate(
      id,
      technologyDetail
    );
    res.status(200).json({
      message: "update Successfully",
      data: technologyUpdate,
    });
  } catch (err) {
    console.log(err);
    next();
  }
}
export async function technologyDelete(req, res, next) {
  try {
    const technologyId = req.params.id;
    const technologyDelete = await createtechnologyForm.findByIdAndDelete(
      technologyId
    );
    res.status(200).json({
      message: "Deleted successfully",
      data: technologyDelete,
    });
  } catch (err) {
    console.log(err);
    next();
  }
}
