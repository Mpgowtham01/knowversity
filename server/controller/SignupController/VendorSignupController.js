import Userdb from "../../model/userModel.js";
import bcrypt from "bcryptjs";
import { RegistrationId } from "./RegistrationId.js";
import crypto from "crypto";
import Tokens from "./VerifyEmailToken.js";
import sendVerificationEmail from "./SendVerificationEmail.js";
import VendorSignUpDb from "../../model/signupModel/VendorModel.js";
import VendorDb from "../../model/signupModel/VendorModel.js";

export async function userSignup(req, res, next) {
  try {
    const data = req.body;
    const role = data.role;
    const email = data.email;
    console.log("role", email);
    const registrationName = req.body.companyName.substring(0, 3);
    console.log("registrationName", registrationName);
    const salt = await bcrypt.genSaltSync(10);
    const password = await data.password;
    const existUser = await Userdb.findOne({ email: data.email });
    const details = {
      role: data.role,
      companyName: data.companyName,
      type: data.type,
      email: data.email,
      website: data.website,
      phone: data.phone,
      password: bcrypt.hashSync(password, salt),
      country: data.country,
      state: data.state,
      district: data.district,
      city: data.city,
      address: data.address,
      pincode: data.pincode,
      RegistrationId: `${registrationName + RegistrationId()}`,
    };
    if (existUser) {
      res.status(409).json({
        message: "user already exist",
        data: existUser,
      });
    } else {
      const createUser = await VendorSignUpDb.create(details);
      await Userdb.create({
        name: data.companyName,
        email: data.email,
        password: bcrypt.hashSync(password, salt),
        role: data.role,
        userId: createUser._id,
        forgetPasswordCode: 0,
        RegistrationId: `${registrationName + RegistrationId()}`,
        author: {
          ref: "VendorSignUpDb",
        },
      });

      const token = await new Tokens({
        userId: createUser._id,
        token: crypto.randomBytes(32).toString("hex"),
      }).save();
      const url = `${process.env.REACT_APP_DEV_BASE_URL}users/${createUser._id}/verify/${token.token}`;
      await sendVerificationEmail(createUser.email, "Verify Email", url);
      res.status(201).json({
        message: "User Created Successfully",
        data: createUser,
      });
    }
  } catch (err) {
    console.log(err);
    next();
  }
}
//update
// export async function updateSingup(req, res, next) {
//   try {
//     const data = req.body;
//     const id = req.params.id;
//     const existingDocument = await VendorSignUpDb.findById(id);

//     if (!existingDocument) {
//       return res.status(404).json({ message: "Document not found" });
//     }

//     const updatedData = {
//       ...existingDocument.toObject(),
//       ...data,
//     };

//     const updateOffer = await VendorSignUpDb.findByIdAndUpdate(id, updatedData, {
//       useFindAndModify: false,
//       new: true,
//     });

//     res.status(200).json({
//       message: "Updated successfully",
//       data: updateOffer,
//     });
//   } catch (err) {
//     next(err);
//   }
// }

export async function updateSingup(req, res, next) {
  try {
    const data = req.body;
    const id = req.params.id;
    console.log('data', data)
    console.log('id', id)
    const registrationName = req.body.firstName.substring(0, 3);
console.log("object")
    const details = {
      // role: data.role,
      // companyName: data.companyName,
      // type: data.type,
      // email: data.email,
      // website: data.website,
      // phone: data.phone,
      // country: data.country,
      // state: data.state,
      // district: data.district,
      city: data.city,
      address: data.address,
      businessName:data.businessName,
      // pincode: data.pincode,
      // RegistrationId: `${registrationName + RegistrationId()}`,
    };
    console.log("fdasdfasdfa",details);
    const updateList = await VendorSignUpDb.findByIdAndUpdate(
      id,
      details,
    );
    console.log("a");

    res.status(200).json({
      message: "create successfully",
      data: updateList,
    });
  } catch (err) {
    next();
  }
}
// get
export async function getVendor(req, res, next) {
  try {
    const getProfessionals = await VendorSignUpDb.find();
    res.status(200).json({
      message: "get successfully",
      data: getProfessionals,
    });
  } catch (err) {
    next();
  }
}

export async function getList(req, res, next) {
  try {
    const gevendorlist = await VendorSignUpDb.find();
    res.status(200).json({
      message: "get successfully",
      data: gevendorlist,
    });
  } catch (err) {
    next();
  }
}

export async function getoneUser(req, res) {
  try {
    const data = req.params;
    const employeeId = data.id;
    const employeegetoneid = await VendorSignUpDb.findById(employeeId);
    res.status(200).json({
      message: "get Successfully",
      data: employeegetoneid,
    });
  } catch (e) {
    throw e;
  }
}

export async function deleteVendor(req, res, next) {
  try {
    const data = req.params;
    const Id = data.id;
    const employeeDelete = await VendorSignUpDb.findByIdAndDelete(Id);
    res.status(200).json({
      message: "Deleted Successfully",
      data: employeeDelete,
    });
  } catch (error) {
    next();
  }
}

export async function uploadImage(req, res, next) {
  try {
    console.log("req.file", req.file);
    const path = req.file.path;
    res.status(201).json({
      message: "added Successfully",
      path: path,
    });
  } catch (error) {
    next();
  }
}
