import ContractApprovedDB from "../../model/EmployerModel/ContractApprovedModel.js";
import ContractjobrequestDB from "../../model/EmployerModel/ContractJobModal.js";

export async function createRequestContracts(req, res, next) {
  try {
    const data = req.body;
    const details = {
      CompanyID: data.CompanyID,
      companyName: data.companyName,
      PositionName: data.PositionName,
      technology: data.technology,
      Experience: data.Experience,
      budget: data.budget,
      JD: data.JD,
      location: data.location,
    };
    const exist = await ContractjobrequestDB.findOne({
      PositionName: data.PositionName,
    });
    if (exist) {
      res.status(402).json({ message: "record already exist", data: exist });
    } else {
      const createOurProfile = await ContractjobrequestDB.create(details);
      res.status(201).json({
        message: " created ourprofile successfully",
        data: createOurProfile,
      });
    }
  } catch (err) {
    console.log(err);
    next();
  }
}
export async function getOneContractjobRequest(req, res, next) {
  try {
    const data = req.params;
    console.log("data", data.id);
    const requestId = data.id;
    const requestgetoneid = await ContractjobrequestDB.find({
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

export async function getonecontractrequest(req, res, next) {
  try {
    const data = req.params;
    const requestId = data.id;
    const requestgetid = await ContractjobrequestDB.find(requestId);
    res.status(200).json({
      message: "get Succcessfully",
      data: requestgetid,
    });
  } catch (e) {
    next();
  }
}

export async function getOneContractPost(req, res, next) {
  try {
    const data = req.params;
    console.log("data", data);
    const requestId = data.id;
    const requestgetoneid = await ContractApprovedDB.find({
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

export async function createpostApproved(req, res, next) {
  try {
    const data = req.body;
    const details = {
      CompanyID: data.CompanyID,
      name: data.name,
      Useremail: data.Useremail,
      UserID: data.UserID,
      companyName: data.companyName,
      PositionName: data.PositionName,
      technology: data.technology,
      Experience: data.Experience,
      budget: data.budget,
      JD: data.JD,
      location: data.location,
    };
    const createOurProfile = await ContractApprovedDB.create(details);
    res.status(201).json({
      message: " created ourprofile successfully",
      data: createOurProfile,
    });
  } catch (err) {
    console.log(err);
    next();
  }
}
