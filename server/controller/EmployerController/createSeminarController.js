import createSeminar from "../../model/EmployerModel/createSeminarModal.js";
import seminarDb from "../../model/seminarModal.js";

// export async function create(req, res, next) {
//   const newSeminar = new createSeminar(req.body);
//   try {
//     const seminar = await newSeminar.save();
//     console.log(seminar, "saved");
//     res.status(200).json(seminar);
//   } catch (err) {
//     next(err);
//   }
// }
 export async function createSeminarForm(req,res,next){
  try{
    const data = req.body;
    const SeminarDetail = {
    seminarTitle: data.seminarTitle,
    time: data.time,
    technology: data.technology,
    audience: data.audience,
    contactPerson: data.contactPerson,
    contactNumber: data.contactNumber,
    mode: data.mode,
    registrationLink: data.registrationLink,
    brochure: data.brochure,
    fromdate: data.fromdate,
    todate: data.todate,
    about: data.about,
    fees: data.fees,
    };
    const seminarCreate= await seminarDb.create(SeminarDetail);
    res.status(201).json({
      messgae:"Created successfully",
      data:seminarCreate,
    });
  }catch(err){
    console.log(err);
    next();
  }
 }

 export async function getCreateSeminar(req, res, next) {
  try {
    const getCreateSeminar = await seminarDb.find();
    res.status(200).json({
      message: "Get Successfully",
      data: getCreateSeminar,
    });
  } catch (error) {
    console.log(error);
    next();
  }
}

export async function updateCreateSeminar(req,res,next){
  try{
    const data = req.body;
    const SeminarDetail = {
      seminarTitle: data.seminarTitle,
      time: data.time,
      technology: data.technology,
      audience: data.audience,
      contactPerson: data.contactPerson,
      contactNumber: data.contactNumber,
      mode: data.mode,
      registrationLink: data.registrationLink,
      brochure: data.brochure,
      fromdate: data.fromdate,
      todate: data.todate,
      about: data.about,
      fees: data.fees,
    };
    const seminarUpdate= await seminarDb.findByIdAndUpdate(SeminarDetail);
    res.status(201).json({
      messgae:"Updated successfully",
      data:seminarUpdate,
    });
  }catch(err){
    console.log(err);
    next();
  }
 }
 export async function deleteCreateSeminar(req, res, next) {
  try {
    const seminarId = req.params.id;
    const seminarDelete = await seminarDb.findByIdAndDelete(seminarId);
    res.status(200).json({
      message: "Deleted successfully",
      data: seminarDelete,
    });
  } catch (err) {
    console.log(err);
    next();
  }
}
// export const getAllSchools = async (req, res, next) => {
//   try {
//     const schools = await schoolModel.find(req.params.id);
//     res.status(200).json(schools);
//   } catch (err) {
//     next(err);
//   }
// };

// retrieve and return all users/ retrive and return a single insititute
// export const getSchool = async (req, res, next) => {
//   try {
//     const getSchool = await schoolModel.findById(req.params.city);
//     res.status(200).json(getSchool);
//   } catch (err) {
//     next(err);
//   }
// };

// Update a new idetified insititute by insititute id
// export async function update(req, res, next) {
//   try {
//     const updatedSchool = await schoolModel.findByIdAndUpdate(
//       req.params.id,
//       { $set: req.body },
//       { new: true }
//     );
//     console.log(updatedSchool, "update");
//     res.status(200).json(updatedSchool);
//   } catch (err) {
//     next(err);
//   }
// }

// Delete a insititute with specified insititute id in the request
// export async function schoolDelete(req, res, next) {
//   try {
//     await schoolModel.findByIdAndDelete(req.params.id);
//     console.log(schoolDelete, "delete successfull");
//     res.status(200).json(schoolDelete);
//   } catch (err) {
//     next(err);
//   }
// }
