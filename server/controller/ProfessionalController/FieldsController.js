import FieldsDb from "../../model/ProfessionalModal/Fields.js";

export async function Fields(req, res, next) {
  try {
    const data = req.body;
    const details = {
        FieldsName: data.FieldsName,
        SubdomainId: data.SubdomainId,
    };
    const createFields = await FieldsDb.create(details);
    if (createFields) {
      res.status(201).json({
        message: "Fields Created Successfully",
        data: createFields,
      });
    }
  } catch (err) {
    console.log(err);
    next();
  }
}

export async function getFieldsList(req, res, next) {
  try {
    const getFieldslist = await FieldsDb.find();
    res.status(200).json({
      message: "get successfully",
      data: getFieldslist,
    });
  } catch (err) {
    next();
  }
}
export async function getFieldsListId(req, res, next) {
  try {
    const domainId=req.params.id;
    console.log('domainId :>> ', domainId);
    const getFieldslist = await FieldsDb.find({domainId});
    console.log('getFieldslist :>> ', getFieldslist);
    res.status(200).json({
      message: "get successfully",
      data: getFieldslist,
    });
  } catch (err) {
    next();
  }
}

export async function updateFields(req, res, next) {
  try {
    const data = req.body;
    const id = req.params.id;
    const details = {
        FieldsName: data.FieldsName,
        SubdomainId: data.SubdomainId,
    };
    const updateFields = await FieldsDb.findByIdAndUpdate(id, details, {
      new: true,
    });
    res.status(200).json({
      message: "Updated successfully",
      data: updateFields,
    });
  } catch (err) {
    next();
  }
}

export async function deleteFields(req, res, next) {
  try {
    const data = req.params;
    const FieldsId = data.id;
    const FieldsDelete = await FieldsDb.findByIdAndDelete(FieldsId);
    res.status(200).json({
      message: "Deleted Successfully",
      data: FieldsDelete,
    });
  } catch (error) {
    next();
  }
}

