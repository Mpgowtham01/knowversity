import noticePeriodFormDb from "../../model/EmployerModel/NoticePeriodModal.js";

export async function noticePeriodCreate(req, res,next){
    try{
        const data =req.body;
        const noticePeriodDetail = {
            noticePeriod : data.noticePeriod,
        };
        const noticePeriodCreate = await noticePeriodFormDb.create(noticePeriodDetail);
        res.status(201).json({
            message:"created Successfully",
            data: noticePeriodCreate,
        });
    }
    catch(err){
        console.log(err);
        next();
    }
}

 export async function getAllnoticePeriod(req, res, next){
    try{
        const getAllnoticePeriod = await noticePeriodFormDb.find();
        res.status(200).json({
            message:"Get Successfully",
            data: getAllnoticePeriod,
        });
    }
    catch(error){
        console.log(error);
        next();
    }
 }

 export async function noticePeriodUpdate(req,res,next){
    try{
        const data = req.body;
        const id = req.params.id;
        const noticePeriodDetail = {
            noticePeriod: data.noticePeriod,
        }
        const noticePeriodUpdate = await noticePeriodFormDb.findByIdAndUpdate(id,noticePeriodDetail);
        res.status(200).json({
            message:"update Successfully",
            data:noticePeriodUpdate,
        });
    }
        catch(err){
            console.log(err);
            next();
        }
    }
 export async function noticePeriodDelete(req, res, next){
    try{
        const noticePeriodId = req.params.id;
        const noticePeriodDelete = await noticePeriodFormDb.findByIdAndDelete(noticePeriodId);
        res.status(200).json({
            message:"Deleted successfully",
            data:noticePeriodDelete,
        })
 }catch(err){
    console.log(err);
    next();
 }
}