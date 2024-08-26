import detailsFormDb from "../../model/EmployerModel/DetailsModel.js";

export async function createDetails(req, res,next){
    try{
        const data =req.body;
        const Detail = {
           Name : data.Name,
           Technology: data.Technology,
           Gender : data.Gender,
           Position : data.Position,
           Salary : data.Salary,
           JobType: data.JobType,
        };
        const Create = await detailsFormDb.create(Detail);
        res.status(201).json({
            message:"created Successfully",
            data: Create,
        });
    }
    catch(err){
        console.log(err);
        next();
    }
}

 export async function getDetails(req, res, next){
    try{
        const getAll = await detailsFormDb.find();
        res.status(200).json({
            message:"Get Successfully",
            data: getAll,
        });
    }
    catch(error){
        console.log(error);
        next();
    }
 }


 export async function updateDetails(req,res,next){
    try{
        const data = req.body;
        const id = req.params.id;
        const Detail = {
            Name : data.Name,
            Technology: data.Technology,
            Gender : data.Gender,
            Position : data.Position,
            Salary : data.Salary,
            JobType: data.JobType,
        }
        const Update = await detailsFormDb.findByIdAndUpdate(id,Detail);
        res.status(200).json({
            message:"update Successfully",
            data:Update,
        });
    }
        catch(err){
            console.log(err);
            next();
        }
    }
 export async function deleteDetails(req, res, next){
    try{
        const Id = req.params.id;
        const Delete = await detailsFormDb.findByIdAndDelete(Id);
        res.status(200).json({
            message:"Deleted successfully",
            data:Delete,
        })
 }catch(err){
    console.log(err);
    next();
 }
}