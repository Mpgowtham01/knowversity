import CategoryDb from "../../model/Vendor/Categorymodal.js";
import SubCategoryVendorDb from "../../model/Vendor/SubCategorymodel.js";

export async function createCategory(req, res, next) {
  try {
    const data = req.body;
    const details = {
      categoryName: data.categoryName,
    };
    console.log("data.name", data);
    const createCategory = await CategoryDb.create(details);
    res.status(201).json({
      message: "Category Created Successfully",
      data: createCategory,
    });
  } catch (err) {
    console.log(err);
    next();
  }
}
export async function getAllCategory(req, res, next) {
  try {
    const getCategorylist = await CategoryDb.find();
    res.status(200).json({
      message: "get successfully",
      data: getCategorylist,
    });
  } catch (err) {
    next();
  }
}

export async function updateCategory(req, res, next) {
  try {
    const data = req.body;
    const id = req.params.id;
    const details = {
      categoryName: data.categoryName,
    };
    const updateCategory = await CategoryDb.findByIdAndUpdate(id, details, {
      new: true,
    });
    res.status(200).json({
      message: "create successfully",
      data: updateCategory,
    });
  } catch (err) {
    next();
  }
}

export async function deleteCategory(req, res, next) {
  try {
    const data = req.params;
    const CategoryId = data.id;
    const deleteCategory = await CategoryDb.findByIdAndDelete(categoryId);
    res.status(200).json({
      message: "Deleted Successfully",
      data: deleteCategory,
    });
  } catch (error) {
    next();
  }
}

///

export async function createSubCategory(req, res, next) {
  try {
    const data = req.body;
    const details = {
      SubCategoryName: data.SubCategoryName,
      categoryId: data.categoryId,
    };
    console.log("data.name", data);
    const createCategory = await SubCategoryVendorDb.create(details);
    res.status(201).json({
      message: "Category Created Successfully",
      data: createCategory,
    });
  } catch (err) {
    console.log(err);
    next();
  }
}

export async function getCategroyById(req, res, next) {
  try {
    const categoryId = req.params.categoryId;
    const geCategroylist = await SubCategoryVendorDb.find({ categoryId });
    res.status(200).json({
      message: "get successfully",
      data: geCategroylist,
    });
  } catch (err) {
    next();
  }
}
