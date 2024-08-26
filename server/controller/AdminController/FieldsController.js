import AdminCollege from "../../model/AdminModel/CollegeModel.js";
import AdminCompanyApproved from "../../model/AdminModel/CompanylogoApprovedModel.js";
import AdminFields from "../../model/AdminModel/FieldsModel.js";
import LanguageFields from "../../model/AdminModel/LanguageAdded.js";
import LocationFields from "../../model/AdminModel/LocationAdded.js";
import QualificationFields from "../../model/AdminModel/QualificationAdded.js";
import CategoryFieldDb from "../../model/AdminModel/Categorymodel.js";

export async function createFileds(req, res, next) {
  try {
    const data = req.body;
    const existUser = await AdminFields.findOne({
      UniversityName: data.UniversityName,
    });
    const details = {
      UniversityName: data.UniversityName,
    };
    if (existUser) {
      res.status(409).json({
        message: "Filed already exist",
        data: existUser,
      });
    } else {
      const createFileds = await AdminFields.create(details);
      res.status(201).json({
        message: "Filed Created Successfully",
        data: createFileds,
      });
    }
  } catch (err) {
    console.log(err);
    next();
  }
}

export async function getfields(req, res, next) {
  try {
    const getemployeelist = await AdminFields.find().then((data) => {
      res.status(201).json({
        message: "get successfully",
        data: data,
      });
    });
  } catch (err) {
    next();
  }
}

export async function createCollege(req, res, next) {
  console.log("aaaa", req.body);

  try {
    const data = req.body;
    const details = {
      collegeName: data.collegeName,
      university_id: data.university_id,
    };
    const createState = await AdminCollege.create(details);
    res.status(201).json({
      message: "Created Successfully",
      data: createState,
    });
  } catch (err) {
    console.log(err);
    next();
  }
}

export async function getCollegeById(req, res, next) {
  console.log("req.params", req.params.university_id);

  try {
    const university_id = req.params.university_id;

    const getStatelist = await AdminCollege.find({
      university_id: university_id,
    });
    if (getStatelist) {
      res.status(200).json({
        message: "get successfully",
        data: getStatelist,
      });
    }
  } catch (err) {
    console.log(err?.message);
  }
}

export async function createApproved(req, res, next) {
  try {
    const data = req.body;
    const existUser = await AdminCompanyApproved.findOne({
      companyName: data.companyName,
    });
    const details = {
      companyName: data.companyName,
      companyLogo: data.companyLogo,
    };
    if (existUser) {
      res.status(200).json({
        message: "record already exist",
        data: existUser,
      });
    } else {
      const createFileds = await AdminCompanyApproved.create(details);
      res.status(201).json({
        message: "Filed Created Successfully",
        data: createFileds,
      });
    }
  } catch (err) {
    console.log(err);
    next();
  }
}

export async function getapprovedfields(req, res, next) {
  try {
    const details = await AdminCompanyApproved.find();
    res.status(200).json({
      message: "get Successfully",
      data: details,
    });
  } catch {
    next();
  }
}

export async function deleteApprovedList(req, res, next) {
  try {
    const data = req.params;
    const CompanyListId = data.id;
    const deleteCompanyList = await AdminCompanyApproved.findByIdAndDelete(
      CompanyListId
    );
    res.status(200).json({
      message: "Deleted Successfully",
      data: deleteCompanyList,
    });
  } catch (error) {
    next();
  }
}

export async function createlanguageFileds(req, res, next) {
  try {
    const data = req.body;
    const existUser = await LanguageFields.findOne({
      languageName: data.languageName,
    });
    const details = {
      languageName: data.languageName,
    };

    if (existUser) {
      res.status(409).json({
        message: "Filed already exist",
        data: existUser,
      });
    } else {
      const createFileds = await LanguageFields.create(details);
      res.status(201).json({
        message: "Filed Created Successfully",
        data: createFileds,
      });
    }
  } catch (err) {
    console.log(err);
    next();
  }
}
export async function getLanguagefields(req, res, next) {
  try {
    const details = await LanguageFields.find();
    res.status(200).json({
      message: "get Successfully",
      data: details,
    });
  } catch {
    next();
  }
}

//location Added

export async function createlocationFileds(req, res, next) {
  try {
    const data = req.body;
    const existUser = await LocationFields.findOne({
      locationName: data.locationName,
    });
    const details = {
      locationName: data.locationName,
    };

    if (existUser) {
      res.status(409).json({
        message: "location already exist",
        data: existUser,
      });
    } else {
      const createFileds = await LocationFields.create(details);
      res.status(201).json({
        message: "location Created Successfully",
        data: createFileds,
      });
    }
  } catch (err) {
    console.log(err);
    next();
  }
}
export async function getLocationfields(req, res, next) {
  try {
    const details = await LocationFields.find();
    res.status(200).json({
      message: "get Successfully",
      data: details,
    });
  } catch {
    next();
  }
}

//qualification Added

export async function createqualificationFileds(req, res, next) {
  try {
    const data = req.body;
    const existUser = await QualificationFields.findOne({
      qualificationName: data.qualificationName,
    });
    const details = {
      qualificationName: data.qualificationName,
    };

    if (existUser) {
      res.status(409).json({
        message: "Qualification already exist",
        data: existUser,
      });
    } else {
      const createFileds = await QualificationFields.create(details);
      res.status(201).json({
        message: "Qualification Created Successfully",
        data: createFileds,
      });
    }
  } catch (err) {
    console.log(err);
    next();
  }
}
export async function getqualificationfields(req, res, next) {
  try {
    const details = await QualificationFields.find();
    res.status(200).json({
      message: "get Successfully",
      data: details,
    });
  } catch {
    next();
  }
}
export async function createCategoryField(req, res, next) {

  try {
    const data = req.body;
    const details = {
      category: data.category,
    };

    const createCategory = await CategoryFieldDb.create(details);
    res.status(201).json({
      message: "Category Created Successfully",
      data: createCategory,
    });
  } catch (err) {
    console.log(err);
    next();
  }
  console.log(req.body);
}

export async function getcategoryfields(req, res, next){
  try{
    const details = await CategoryFieldDb.find();
    res.status(200).json({
      message: "get Successfully",
      data: details,
    });
  }
  catch{
    next();
  }
}