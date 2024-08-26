import DomainDb from "../../model/StudentModel/Domain.js"

export async function createDomain(req, res, next) {
  try {
    const data = req.body;
    const details = {
      domainName: data.domainName,
    };
      const createDomain = await DomainDb.create(details);
      res.status(201).json({
        message: "Domain Created Successfully",
        data: createDomain,
      });
  } catch (err) {
    console.log(err);
    next();
  }
}
export async function getDomainList(req, res, next) {
  try {
    const getDomainlist = await DomainDb.find();
    res.status(200).json({
      message: "get successfully",
      data: getDomainlist,
    });
  } catch (err) {
    next();
  }
}

export async function updateDomain(req, res, next) {
  try {
    const data = req.body;
    const id = req.params.id;
    const details = {
      domainName: data.domainName,
    };
    const updateDomain = await DomainDb.findByIdAndUpdate(id, details, {
      new: true,
    });
    res.status(200).json({
      message: "create successfully",
      data: updateDomain,
    });
  } catch (err) {
    next();
  }
}

export async function deleteDomain(req, res, next) {
  try {
    const data = req.params;
    const domainId = data.id;
    const deleteDomain = await DomainDb.findByIdAndDelete(domainId);
    res.status(200).json({
      message: "Deleted Successfully",
      data: deleteDomain,
    });
  } catch (error) {
    next();
  }
}
