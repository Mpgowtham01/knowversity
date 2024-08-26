import QualificationDb from "../../model/StudentModel/Qualification.js";

export async function createQualification(req, res, next){
    try{
        const data=req.body;
        const details={
            userId:data.userId,
            // firstName: data.firstName,
            // lastName: data.lastName,
            // dob: data.dob,
            // emailId: data.emailId,
            // gender: data.gender,
            // phoneNumber: data.phoneNumber,
            // address: data.address,
            // country:data.country, 
            // state: data.state,
            // district:data.district,
            // city:data.city,
            // pin: data.pin,
            // course: data.course,
            xboard: data.xboard,
            xmajor:data.xmajor,
            xper: data.xper,
            xyop: data.xyop,
            xschool: data.xschool,
            xiiboard: data.xiiboard,
            xiischool: data.xiischool,
            xiimajor: data.xiimajor,
            xiiper: data.xiiper,
            xiiyop: data.xiiyop,
            // gboard: data.gboard,
            guniversity: data.guniversity,
            gcollege: data.gcollege,
            gper: data.gper,
            gyop: data.gyop,
            gmajor: data.gmajor,
            // pgboard: data.pgboard,
            pgper: data.pgper,
            pgyop: data.pgyop,
            pgmajor: data.pgmajor,
            pguniversity: data.pguniversity,
            pgcollege: data.pgcollege,
        };
        const createQualification= await QualificationDb.create(details);
       {
            res.status(201).json({
                message:" created ourprofile successfully",
                data:createQualification,
            });
        }
    }catch(err){
        console.log(err);
        next();
    }
}

export async function getAllQualification(req, res, next){
    try{
        const getAllQualification =await QualificationDb.find();
        res.status(200).json({
            message:"get successfully",
            data: getAllQualification,
        });
    } catch(err){
        next();
    }
}

export async function getQualification(req, res, next) {
    try {
      const data = req.params;
      console.log('o bhnb hn bbhn bbject :>> ', req.params); 
      const studentId = data.id;
      const studentgetoneid = await QualificationDb.find( {userId: studentId});
      res.status(200).json({
        message: "get Successfully",
        data: studentgetoneid,
      });
    } catch (e) {
      next();
    }
  }

export async function updateQualification(req, res, next){
    try{
        const data = req.body;
        const id = req.params.id;
        const details = {
            firstName: data.firstName,
            xiimajor: data.xiimajor,
            lastName: data.lastName,
            dob: data.dob,
            emailId: data.emailId,
            gender: data.gender,
            phoneNumber: data.phoneNumber,
            address: data.address,
            country:data.country, 
            state: data.state,
            district:data.district,
            city:data.city,
            pin: data.pin,
            course: data.course,
            xboard: data.xboard,
            xper: data.xper,
            xyop: data.xyop,
            xiiboard: data.xiiboard,
            xiiper: data.xiiper,
            xiiyop: data.xiiyop,
            gboard: data.gboard,
            gper: data.gper,
            gyop: data.gyop,
            gmajor: data.gmajor,
            pgboard: data.pgboard,
            pgper: data.pgper,
            pgyop: data.pgyop,
            pgmajor: data.pgmajor,
        };

        const updateQualification = await QualificationDb.findByIdAndUpdate(id, details,{
            new:true,
        });
        res.status(200).json({
            message:"created successfully",
            data:updateQualification,
        });
    }catch (err){
        next();
    }
}

export async function deleteQualification(req, res, next){
    try{
        const data = req.params;
        const QualificationId= data.id;
        const deleteQualification = await QualificationDb.findByIdAndDelete(QualificationId);
        res.status(200).json({
            message:"Qualification deleted successfully",
            data:deleteQualification,
        });
    }catch (error){
        next();
    }
}