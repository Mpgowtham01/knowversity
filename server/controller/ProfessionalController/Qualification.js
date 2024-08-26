import qualificationDB from "../../model/ProfessionalModal/Qualification.js";

export async function qualification(req, res, next) {
  try {
    const data = req.body;
    const details = {
        qualification: data.qualification,
        educationType: data.educationType,
        university: data.university,
        universityAddress: data.universityAddress,
        universityMaster: data.universityMaster,
        universityAddressMaster: data.universityAddressMaster,
        schoolX: data.schoolX,
        percentageX: data.percentageX,
        yearX: data.yearX,
        schoolXII: data.schoolXII,
        percentageXII: data.percentageXII,
        yearXII: data.yearXII,
        collegeNameB: data.collegeNameB,
        percentageB: data.percentageB,
        yearB: data.yearB,
        collegeNameM: data.collegeNameM,
        percentageM: data.percentageM,
        yearM: data.yearM,
     
    };
    const createqualification = await qualificationDB.create(details);
    if (createqualification) {
      res.status(201).json({
        message: "qualification Created Successfully",
        data: createqualification,
      });
    }
  } catch (err) {
    console.log(err);
    next();
  }
}
export async function getqualification(req, res, next) {
  try {
    const getqualification = await qualificationDB.find();
    res.status(200).json({
      message: "get successfully",
      data: getqualification,
    });
  } catch (err) {
    next();
  }
}

export async function updatequalification(req, res, next) {
  try {
    const data = req.body;
    const id = req.params.id;
    const details = {
        qualification: data.qualification,
        educationType: data.educationType,
        university: data.university,
        universityAddress: data.universityAddress,
        universityMaster: data.universityMaster,
        universityAddressMaster: data.universityAddressMaster,
        schoolX: data.schoolX,
        percentageX: data.percentageX,
        yearX: data.yearX,
        schoolXII: data.schoolXII,
        percentageXII: data.percentageXII,
        yearXII: data.yearXII,
        collegeNameB: data.collegeNameB,
        percentageB: data.percentageB,
        yearB: data.yearB,
        collegeNameM: data.collegeNameM,
        percentageM: data.percentageM,
        yearM: data.yearM,
    };
    const updatequalification = await qualificationDB.findByIdAndUpdate(id, details, {
      new: true,
    });
    res.status(200).json({
      message: "Updated successfully",
      data: updatequalification,
    });
  } catch (err) {
    next();
  }
}

export async function deletequalification(req, res, next) {
  try {
    const data = req.params;
    const qualificationId = data.id;
    const qualificationDelete = await qualificationDB.findByIdAndDelete(qualificationId);
    res.status(200).json({
      message: "Deleted Successfully",
      data: qualificationDelete,
    });
  } catch (error) {
    next();
  }
}

