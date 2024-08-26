import SubdomainDb from "../../model/AdminModel/Subdomainmodel.js";

export async function createSubdomain(req, res, next) {
  try {
    const data = req.body;
    const details = {
      SubdomainName: data.SubdomainName,
      domainId: data.domainId,
    };
    const createSubdomain = await SubdomainDb.create(details);
    res.status(201).json({
      message: "Subdomain Created Successfully",
      data: createSubdomain,
    });
  } catch (err) {
    console.log(err);
    next();
  }
}

export async function getSubdomainlist(req, res, next) {
  try {
    const getSubdomainlist = await SubdomainDb.find();
    res.status(200).json({
      message: "get successfully",
      data: getSubdomainlist,
    });
  } catch (err) {
    next();
  }
}

export async function getSubDomainById(req, res, next) {
  try {
    const DomainId = req.params.domainId;
    const getSubdomainlist = await SubdomainDb.find({ DomainId });
    res.status(200).json({
      message: "get successfully",
      data: getSubdomainlist,
    });
  } catch (err) {
    next();
  }
}

export async function updateSubdomain(req, res, next) {
  try {
    const data = req.body;
    const id = req.params.id;
    const details = {
      SubdomainName: data.SubdomainName,
    };
    const updateSubdomain = await SubdomainDb.findByIdAndUpdate(id, details, {
      new: true,
    });
    res.status(200).json({
      message: "create successfully",
      data: updateSubdomain,
    });
  } catch (err) {
    next();
  }
}

export async function deleteSubdomain(req, res, next) {
  try {
    const data = req.params;
    const SubdomainId = data.id;
    const deleteSubdomain = await SubdomainDb.findByIdAndDelete(SubdomainId);
    res.status(200).json({
      message: "Deleted Successfully",
      data: deleteSubdomain,
    });
  } catch (error) {
    next();
  }
}
