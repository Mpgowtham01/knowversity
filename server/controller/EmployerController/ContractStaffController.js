import contractFormDb from "../../model/EmployerModel/ContractStaffModel.js";

export async function createContract(req, res, next) {
  try {
    const data = req.body;
    const details = {
      CompanyID: data.CompanyID,
      companyName: data.companyName,
      Website: data.Website,
      linkedin: data.linkedin,
      FirstName: data.FirstName,
      LastName: data.LastName,
      location: data.location,
      First: data.First,
      Last: data.Last,
      phone: data.phone,
      email: data.email,
      employee: data.employee,
      react: data.react,
      node: data.node,
      reactNative: data.reactNative,
      java: data.java,
      php: data.php,
      angular: data.angular,
      flutter: data.flutter,
    };
    const createJobForm = await contractFormDb.create(details);
    {
      res.status(201).json({
        message: "created Job successfully",
        data: createJobForm,
      });
    }
  } catch (err) {
    console.log(err);
    next();
  }
}

export async function getoneContract(req, res, next) {
  try {
    const data = req.params;
    console.log("data");
    const requestId = data.id;
    const requestgetoneid = await contractFormDb.find({
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

export async function getonecontractjobrequest(req, res, next) {
  try {
    const data = req.params;
    const requestId = data.id;
    const requestgetid = await contractFormDb.find(requestId);
    res.status(200).json({
      message: "get Succcessfully",
      data: requestgetid,
    });
  } catch (e) {
    next();
  }
}
