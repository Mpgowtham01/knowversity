import subDomainProfileFormDb from "../../model/EmployerModel/subDomainModal.js";

export async function subDomainCreate(req, res,next){
    try{
        const data =req.body;
        const subDomainDetail = {
            subDomain : data.subDomain,
            domainId:data.domainId,
        };
        const SubDomainCreate = await subDomainProfileFormDb.create(subDomainDetail);
        res.status(201).json({
            message:"created Successfully",
            data: subDomainCreate,
        });
    }
    catch(err){
        console.log(err);
        next();
    }
}

 export async function getAllSubDomain(req, res, next){
    try{
        const getAllSubDomain = await subDomainProfileFormDb.find();
        res.status(200).json({
            message:"Get Successfully",
            data: getAllSubDomain,
        });
    }
    catch(error){
        console.log(error);
        next();
    }
 }

 export async function getSubDomainById(req, res, next) {
  try {
    const domainId = req.params.domainId;
    const getAllSubDomain = await subDomainProfileFormDb.find({ domainId });
    res.status(200).json({
      message: "get successfully",
      data: getAllSubDomain,
    });
  } catch (err) {
    next();
  }
}
 
export async function subDomainUpdate(req, res, next){
  try{
      const subDomainId = req.params.id;
      const subDomainUpdate = await subDomainProfileFormDb.findByIdAndUpdate(subDomainId);
      res.status(200).json({
          message:"Updated successfully",
          data:subDomainUpdate,
      })
}catch(err){
  console.log(err);
  next();
}
}
 export async function subDomainDelete(req, res, next){
    try{
        const subDomainId = req.params.id;
        const subDomainDelete = await subDomainProfileFormDb.findByIdAndDelete(subDomainId);
        res.status(200).json({
            message:"Deleted successfully",
            data:subDomainDelete,
        })
 }catch(err){
    console.log(err);
    next();
 }
}

