import DomainDb from "../../model/StudentModel/AreaofInterest.js"

export async function createAreaofInterest(req, res, next) {
  try {
    const data = req.body;
    const details = {
      domainName: data.domainName,
      subdomainName: data.subdomainName,
      fieldName: data.fieldName,
    };
      const createAreaofInterest = await DomainDb.create(details);
      res.status(201).json({
        message: "Domain Created Successfully",
        data: createAreaofInterest,
      });
  } catch (err) {
    console.log(err);
    next();
  }
}

export async function deleteAreaofInterest(req, res, next) {
  try {
    const data = req.params;
    const areaofinterestId = data.id;
    const deleteAreaofInterest = await DomainDb.findByIdAndDelete(areaofinterestId);
    res.status(200).json({
      message: "Deleted Successfully",
      data: deleteAreaofInterest,
    });
  } catch (error) {
    next();
  }
}
