import AddCategoryDb from "../../model/Vendor/AddCategoryModel.js";

export async function createAddCategory(req, res, next) {
  try {
    const data = req.body;
    console.log("data.name", data);

    const details = {
      companyName: data.companyName,
      Description: data.Description,
      email: data.email,
      Websitelink: data.Websitelink,
      Regularprice: data.Regularprice,
      Discountprice: data.Discountprice,
      country: data.country,
      State: data.State,
      district: data.district,
      City: data.City,
      category: data.category,
    };
    const createCategory = await AddCategoryDb.create(details);
    res.status(201).json({
      message: "Category Created Successfully",
      data: createCategory,
    });
  } catch (err) {
    console.log(err);
    next();
  }
}

export async function getAddAllCategory(req, res, next) {
  try {
    const getAllCategorys = await AddCategoryDb.find();
    res.status(201).json({
      message: "Get Successfully",
      data: getAllCategorys,
    });
  } catch (err) {
    console.log(err);
  }
}

export async function getoneAllCategorysgetid(req, res) {
  try {
    const data = req.params;
    const getAllCategorysId = data.id;
    const getAllCategorysgetoneid = await AddCategoryDb.findById(getAllCategorysId);
    res.status(200).json({
      message: "get Successfully",
      data: getAllCategorysgetoneid,
    });
  } catch (e) {
    throw e;
  }
}

export async function updateAddcategory(req, res, next) {
  try {
    const data = req.body;
    const id = req.params.id;
    const existingDocument = await AddCategoryDb.findById(id);

    if (!existingDocument) {
      return res.status(404).json({ message: "Document not found" });
    }

    const updatedData = {
      ...existingDocument.toObject(),
      ...data,
    };

    const updateOffer = await AddCategoryDb.findByIdAndUpdate(id, updatedData, {
      useFindAndModify: false,
      new: true,
    });

    res.status(200).json({
      message: "Updated successfully",
      data: updateOffer,
    });
  } catch (err) {
    next(err);
  }
}
// export async function updateAddcategory(req, res, next) {
//   try {
//     const data = req.body;
//     console.log("data48 :>> ", data);
//     const id = req.params.id;
//     const details = {
//       companyName: data.companyName,
//       Description: data.Description,
//       Email: data.Email,
//       Websitelink: data.Websitelink,
//       Regularprice: data.Regularprice,
//       Discountprice: data.Discountprice,
//       Country: data.Country,
//       State: data.State,
//       District: data.District,
//       City: data.City,
//       // mobile: data.mobile,
//       Category: data.Category,
//     };
//     const updateAddcategory = await AddCategoryDb.findByIdAndUpdate(
//       id,
//       details,
//       {
//         new: true,
//       }
//     );
//     res.status(200).json({
//       message: "create successfully",
//       data: updateAddcategory,
//     });
//   } catch (err) {
//     next();
//   }
// }

export async function deleteAddcategory(req, res, next) {
  try {
    const deleteAddcategory = await AddCategoryDb.findByIdAndDelete(
      req.params.id
    );
    res.status(200).json({
      message: "Deleted Successfully",
      data: deleteAddcategory,
    });
  } catch (error) {
    next();
  }
}
