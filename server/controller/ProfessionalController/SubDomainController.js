import SubDomainDb from "../../model/ProfessionalModal/SubDomain.js";

export async function SubDomain(req, res, next) {
  try {
    const data = req.body;
    const details = {
        SubdomainName: data.SubdomainName,
        domainId: data.domainId,
    };
    const createSubDomain = await SubDomainDb.create(details);
    if (createSubDomain) {
      res.status(201).json({
        message: "SubDomain Created Successfully",
        data: createSubDomain,
      });
    }
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
export async function getSubDomainListId(req, res, next) {
  try {
    const domainId=req.params.id;
    console.log('domainId :>> ', domainId);
    const getSubDomainlist = await SubDomainDb.find({domainId});
    console.log('getSubDomainlist :>> ', getSubDomainlist);
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
        SubdomainName: data.SubdomainName,
        domainId: data.domainId,
    };
    const updateSubDomain = await SubDomainDb.findByIdAndUpdate(id, details, {
      new: true,
    });
    res.status(200).json({
      message: "Updated successfully",
      data: updateSubDomain,
    });
  } catch (err) {
    next();
  }
}

export async function deleteSubDomain(req, res, next) {
  try {
    const data = req.params;
    const SubDomainId = data.id;
    const SubDomainDelete = await SubDomainDb.findByIdAndDelete(SubDomainId);
    res.status(200).json({
      message: "Deleted Successfully",
      data: SubDomainDelete,
    });
  } catch (error) {
    next();
  }
}

