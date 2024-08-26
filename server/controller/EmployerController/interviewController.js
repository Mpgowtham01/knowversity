import interviewFormDb from "../../model/EmployerModel/interviewModal.js";

export async function interviewCreate(req, res,next){
    try{
        const data =req.body;
        const interviewDetail = {
            scheduleInterview : data.scheduleInterview,
        };
        const interviewCreate = await interviewFormDb.create(interviewDetail);
        res.status(201).json({
            message:"created Successfully",
            data: interviewCreate,
        });
    }
    catch(err){
        console.log(err);
        next();
    }
}

 export async function  getAllinterview(req, res, next){
    try{
        const getAllinterview = await interviewFormDb.find();
        res.status(200).json({
            message:"Get Successfully",
            data: getAllinterview,
        });
    }
    catch(error){
        console.log(error);
        next();
    }
 }

//  export async function interviewUpdate(req,res,next){
//     try{
//         const data = req.body;
//         const id = req.params.id;
//         const interviewDetail = {
//             scheduleInterview: data.scheduleInterview,
//         }
//         const interviewUpdate = await interviewFormDb.findByIdAndUpdate(id,interviewDetail);
//         res.status(200).json({
//             message:"update Successfully",
//             data:interviewUpdate,
//         });
//     }
    
//         catch(err){
//             console.log(err);
//             next();
//         }
//     }
 export async function interviewDelete(req, res, next){
    try{
        const interviewId = req.params.id;
        const interviewDelete = await interviewFormDb.findByIdAndDelete(interviewId);
        res.status(200).json({
            message:"Deleted successfully",
            data:interviewDelete,
        })
 }catch(err){
    console.log(err);
    next();
 }
}