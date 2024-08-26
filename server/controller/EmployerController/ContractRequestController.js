import ContractrequestDB from "../../model/EmployerModel/ContractRequestModel.js";

export async function createContractRequest(req, res, next) {
  try {
    const data = req.body;
    const details = {
      UserID: data.UserID,
      CompanyID: data.CompanyID,
      name: data.name,
      CompanyEmail: data.CompanyEmail,
      UserEmail: data.UserEmail,
      FirstName: data.FirstName,
      LastName: data.LastName,
      location: data.location,
      phone: data.phone,
    };
    const createOurProfile = await ContractrequestDB.create(details);
    res.status(201).json({
      message: " created ourprofile successfully",
      data: createOurProfile,
    });
  } catch (err) {
    console.log(err);
    next();
  }
}

export async function getOneContractRequest(req, res, next) {
  try {
    const data = req.params;
    console.log("data", data);
    const requestId = data.id;
    const requestgetoneid = await ContractrequestDB.find({
      CompanyID: requestId,
    });
    console.log("dfgsdfgsdg", requestgetoneid);
    res.status(200).json({
      message: "get Successfully",
      data: requestgetoneid,
    });
  } catch (e) {
    next();
  }
}
