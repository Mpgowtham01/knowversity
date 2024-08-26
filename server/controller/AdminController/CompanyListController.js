import CompanyListDb from "../../model/AdminModel/CompanyListModel.js";

export async function createCompanyList(req, res, next) {
  console.log("req :>> ", req);
  console.log("req :>> ", req.body);

  try {
    const data = req.body;
    const details = {
      Title: data.Title,
      Description: data.Description,
      Image: data.resume,
    };

    const createCompanyList = await CompanyListDb.create(details);
    res.status(201).json({
      message: "CompanyList Created Successfully",
      data: createCompanyList,
    });
  } catch (err) {
    console.log(err);
    next();
  }
}
export async function getCompanyList(req, res, next) {
  try {
    const getCompanyList = await CompanyListDb.find();
    res.status(200).json({
      message: "get successfully",
      data: getCompanyList,
    });
  } catch (err) {
    next();
  }
}

export async function getCompanyListById(req, res, next) {
  try {
    const SubdomainId = req.params.subdomainId;
    console.log("object :>> ", SubdomainId);
    const getCompanyList = await CompanyListDb.find({
      subdomainId: SubdomainId,
    });
    res.status(200).json({
      message: "get successfully",
      data: getCompanyList,
    });
  } catch (err) {
    next();
  }
}

export async function updateCompanyList(req, res, next) {
  try {
    const data = req.body;
    const id = req.params.id;
    const details = {
      Title: data.Title,
      Description: data.Description,
      Image: data.Image,
    };
    const updateCompanyList = await CompanyListDb.findByIdAndUpdate(
      id,
      details,
      {
        new: true,
      }
    );
    res.status(200).json({
      message: "create successfully",
      data: updateCompanyList,
    });
  } catch (err) {
    next();
  }
}

export async function deleteCompanyList(req, res, next) {
  try {
    const data = req.params;
    const CompanyListId = data.id;
    const deleteCompanyList = await CompanyListDb.findByIdAndDelete(
      CompanyListId
    );
    res.status(200).json({
      message: "Deleted Successfully",
      data: deleteCompanyList,
    });
  } catch (error) {
    next();
  }
}



export async function uploadImage(req, res, next) {
  try {
    console.log("req.file", req.file);
    const path = req.file.path;
    res.status(201).json({
      message: "added Successfully",
      path: path,
    });
  } catch (error) {
    next();
  }
}
