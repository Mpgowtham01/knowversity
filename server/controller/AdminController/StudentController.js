import StudentDb from "../../model/AdminModel/Student.js";
import CompanymodelDb from "../../model/AdminModel/Companymodel.js";
import ProfessionalmodelDb from "../../model/AdminModel/Professionalmodel.js";
import VendormodelDb from "../../model/AdminModel/Vendormodel.js";

export async function createStudent(req, res, next) {
    try {
      const data = req.body;
      const details = {
        PackageName: data.PackageName,
        ProjectRequest: data.ProjectRequest,
        Freelancing: data.ProjectRequest,
        UploadVideo: data.UploadVideo,
        ActualPrice: data.ActualPrice,
        OfferPrice: data.OfferPrice,
      };
      const createStudent = await StudentDb.create(details);
      if (createStudent) {
        res.status(201).json({
          message: "packages Created Successfully",
          data: createStudent,
        });
      }
    } catch (err) {
      console.log(err);
      next();
    }
  }
  export async function getStudent(req, res, next) {
    try {
      const getStudent = await StudentDb.find();
      res.status(200).json({
        message: "get successfully",
        data: getStudent,
      });
    } catch (err) {
      next();
    }
  }
  
  //companymodel
  
  export async function createCompanymodel(req, res, next) {
    try {
      const data = req.body;
      const details = {
        PackageName: data.PackageName,
        JobPost: data.JobPost,
        ProfileSearch: data.ProfileSearch,
        ContractStaffing: data.ContractStaffing,
        Training: data.Training,
        Freelancing: data.Freelancing,
        ActualPrice: data.ActualPrice,
        OfferPrice: data.OfferPrice,
      };
      const createCompanymodel = await CompanymodelDb.create(details);
      if (createCompanymodel) {
        res.status(201).json({
          message: "packages Created Successfully",
          data: createCompanymodel,
        });
      }
    } catch (err) {
      console.log(err);
      next();
    }
  }
  export async function getCompanymodel(req, res, next) {
    try {
      const getCompanymodel = await CompanymodelDb.find();
      res.status(200).json({
        message: "get successfully",
        data: getCompanymodel,
      });
    } catch (err) {
      next();
    }
  }

  //professionalcontroller

  export async function createProfessionalmodel(req, res, next) {
    try {
      const data = req.body;
      const details = {
        PackageName: data.PackageName,
        JobSearch: data.JobSearch,
        ProjectRequest: data.ProjectRequest,
        Freelancing: data.ProjectRequest,
        Training: data.Training,
        ActualPrice: data.ActualPrice,
        OfferPrice: data.OfferPrice,
      };
      const createProfessionalmodel = await ProfessionalmodelDb.create(details);
      if (createProfessionalmodel) {
        res.status(201).json({
          message: "packages Created Successfully",
          data: createProfessionalmodel,
        });
      }
    } catch (err) {
      console.log(err);
      next();
    }
  }
  export async function getProfessionalmodel(req, res, next) {
    try {
      const getProfessionalmodel = await ProfessionalmodelDb.find();
      res.status(200).json({
        message: "get successfully",
        data: getProfessionalmodel,
      });
    } catch (err) {
      next();
    }
  }

  //vendorcontroller
  export async function createVendormodel(req, res, next) {
    try {
      const data = req.body;
      const details = {
        FetchClients: data.FetchClients,
        BusinessPromotion: data.BusinessPromotion,
        Freelancing: data.ProjectRequest,
        Advertisment: data.Advertisment,
        Training: data.Training,
        ActualPrice: data.ActualPrice,
        OfferPrice: data.OfferPrice,
      };
      const createVendormodel = await VendormodelDb.create(details);
      if (createVendormodel) {
        res.status(201).json({
          message: "packages Created Successfully",
          data: createVendormodel,
        }); 
      }
    } catch (err) {
      console.log(err);
      next();
    }
  }
  export async function getVendormodel(req, res, next) {
    try {
      const getVendormodel = await VendormodelDb.find();
      res.status(200).json({
        message: "get successfully",
        data: getVendormodel,
      });
    } catch (err) {
      next();
    }
  }