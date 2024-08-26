import SubDomainDb from "../../model/StudentModel/SubDomain.js"

export async function createSubDomain(req, res, next) {
  try {
    const data = req.body;
    const details = {
      subdomainName: data.subdomainName,
      domainId: data.domainId,
    };
      const createSubDomain = await SubDomainDb.create(details);
      res.status(201).json({
        message: "SubDomain Created Successfully",
        data: createSubDomain,
      });
  } catch (err) {
    console.log(err);
    next();
  }
}
export async function getSubDomainList(req, res, next) {
  try {
    const getSubDomainlist = await SubDomainDb.find();
    res.status(200).json({
      message: "get successfully",
      data: getSubDomainlist,
    });
  } catch (err) {
    next();
  }
}

export async function getSubDomainById(req, res, next) {
  try {
    const domainId = req.params.domainId;
    const getSubDomainlist = await SubDomainDb.find({ domainId });
    res.status(200).json({
      message: "get successfully",
      data: getSubDomainlist,
    });
  } catch (err) {
    next();
  }
}

export async function updateSubDomain(req, res, next) {
  try {
    const data = req.body;
    const id = req.params.id;
    const details = {
      subdomainName: data.subdomainName,
    };
    const updateSubDomain = await SubDomainDb.findByIdAndUpdate(id, details, {
      new: true,
    });
    res.status(200).json({
      message: "create successfully",
      data: updateSubDomain,
    });
  } catch (err) {
    next();
  }
}

export async function deleteSubDomain(req, res, next) {
  try {
    const data = req.params;
    const subdomainId = data.id;
    const deleteSubDomain = await SubDomainDb.findByIdAndDelete(subdomainId);
    res.status(200).json({
      message: "Deleted Successfully",
      data: deleteSubDomain,
    });
  } catch (error) {
    next();
  }
}
