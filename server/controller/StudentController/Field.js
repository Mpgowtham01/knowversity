import FieldDb from "../../model/StudentModel/Field.js";

export async function createField(req, res, next) {
  try {
    const data = req.body;
    const details = {
      fieldName: data.fieldName,
      subdomainId: data.subdomainId,
    };
    const createField = await FieldDb.create(details);
    res.status(201).json({
      message: "Field Created Successfully",
      data: createField,
    });
  } catch (err) {
    console.log(err);
    next();
  }
}
export async function getFieldList(req, res, next) {
  try {
    const getFieldlist = await FieldDb.find();
    res.status(200).json({
      message: "get successfully",
      data: getFieldlist,
    });
  } catch (err) {
    next();
  }
}

export async function getFieldById(req, res, next) {
  try {
    const subdomainId = req.params.subdomainId;
    const getFieldlist = await FieldDb.find({ subdomainId });
    res.status(200).json({
      message: "get successfully",
      data: getFieldlist,
    });
  } catch (err) {
    next();
  }
}

export async function updateField(req, res, next) {
  try {
    const data = req.body;
    const id = req.params.id;
    const details = {
      fieldName: data.fieldName,
      subdomainId: data.subdomainId,
    };
    const updateField = await FieldDb.findByIdAndUpdate(id, details, {
      new: true,
    });
    res.status(200).json({
      message: "create successfully",
      data: updateField,
    });
  } catch (err) {
    next();
  }
}

export async function deleteField(req, res, next) {
  try {
    const data = req.params;
    const fieldId = data.id;
    const deleteField = await FieldDb.findByIdAndDelete(fieldId);
    res.status(200).json({
      message: "Deleted Successfully",
      data: deleteField,
    });
  } catch (error) {
    next();
  }
}
