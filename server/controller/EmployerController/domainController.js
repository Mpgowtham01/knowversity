import domainProfileFormDb from "../../model/EmployerModel/domainModal.js";

export async function domainCreate(req, res,next){
    try{
        const data =req.body;
        const domainDetail = {
            domain : data.domain,
        };
        const domainCreate = await domainProfileFormDb.create(domainDetail);
        res.status(201).json({
            message:"created Successfully",
            data: domainCreate,
        });
    }
    catch(err){
        console.log(err);
        next();
    }
}

 export async function getAllDomain(req, res, next){
    try{
        const getAllDomain = await domainProfileFormDb.find();
        res.status(200).json({
            message:"Get Successfully",
            data: getAllDomain,
        });
    }
    catch(error){
        console.log(error);
        next();
    }
 }

 export async function domainUpdate(req,res,next){
    try{
        const data = req.body;
        const id = req.params.id;
        const domainDetail = {
            domain: data.domain,
        }
        const domainUpdate = await domainProfileFormDb.findByIdAndUpdate(id,domainDetail);
        res.status(200).json({
            message:"update Successfully",
            data:domainUpdate,
        });
    }
        catch(err){
            console.log(err);
            next();
        }
    }
 export async function domainDelete(req, res, next){
    try{
        const domainId = req.params.id;
        const domainDelete = await domainProfileFormDb.findByIdAndDelete(domainId);
        res.status(200).json({
            message:"Deleted successfully",
            data:domainDelete,
        })
 }catch(err){
    console.log(err);
    next();
 }
}