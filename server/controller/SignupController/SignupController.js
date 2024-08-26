import SignUpDb from "../../model/signupModel/SignupModel.js";
import Userdb from "../../model/userModel.js";
import { generateToken } from "../../middleware/auth.js";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";
import { RegistrationId } from "./RegistrationId.js";
import crypto from "crypto";
import Tokens from "./VerifyEmailToken.js";
import sendVerificationEmail from "./SendVerificationEmail.js";

export async function userSignup(req, res, next) {
  try {
    const data = req.body;
    const role = data.role;
    const email = data.email;
    const registrationName = req.body.firstName.substring(0, 3);
    const salt = await bcrypt.genSaltSync(10);
    const password = await data.password;
    const existUser = await Userdb.findOne({ email: data.email });
    const details = {
      role: data.role,
      firstName: data.firstName,
      LastName: data.LastName,
      email: data.email,
      gender: data.gender,
      maritalStatus: data.maritalStatus,
      phone: data.phone,
      dob: data.dob,
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
      console.log("line 32 err");
      res.status(409).json({
        message: "user already exist",
        data: existUser,
      });
    } else {
      console.log("line 38 ok");
      const createUser = await SignUpDb.create(details);
      await Userdb.create({
        name: data.LastName,
        email: data.email,
        password: bcrypt.hashSync(password, salt),
        role: data.role,
        userId: createUser._id,
        forgetPasswordCode: 0,
        RegistrationId: `${registrationName + RegistrationId()}`,
        author: {
          ref: "SignUpDb",
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
// get
export async function getStudent(req, res, next) {
  try {
    const getDomainlist = await SignUpDb.find();
    res.status(200).json({
      message: "get successfully..",
      data: getDomainlist,
    });
  } catch (err) {
    next();
  }
}
//
export async function getList(req, res, next) {
  try {
    const getemployeelist = await SignUpDb.find();

    res.status(200).json({
      message: "get successfully",
      data: getemployeelist,
    });
  } catch (err) {
    next();
  }
}
export async function getoneUser(req, res, next) {
  try {
    const id = req.params.id;
    console.log("studentId",id);
    const studentgetoneid = await SignUpDb.findById(id);
    res.status(200).json({
      message: "get Successfully",
      data: studentgetoneid,
    });
  } catch (e) {
    next();
  }
}

export async function updateEmployee(req, res, next) {
  try {
    const data = req.body;
    const id = req.params.id;

    const details = {
      // role: data.role,
      firstName: data.firstName,
      LastName: data.LastName,
      email: data.email,
      gender: data.gender,
      // maritalStatus: data.maritalStatus,
      phone: data.phone,
      dob: data.dob,
      // password: bcrypt.hashSync(password, salt),
      country: data.country,
      state: data.state,
      district: data.district,
      city: data.city,
      address: data.address,
    //  pincode: data.pincode,
    };
    const updateList = await SignUpDb.findByIdAndUpdate(id, details, {
      new: true,
    });
    res.status(200).json({
      message: "create successfully",
      data: updateList,
    });
  } catch (err) {
    next();
  }
}

export async function deleteEmployee(req, res, next) {  
  try {
    const data = req.params;
    const employeeId = data.id;
    const employeeDelete = await SignUpDb.findByIdAndDelete(employeeId);
    res.status(200).json({
      message: "Deleted Successfully",
      data: employeeDelete,
    });
  } catch (error) {
    next();
  }
}

export async function uploadResume(req, res, next) {
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

export async function userLogin(req, res, next) {
  try {
    const data = req.body;
    console.log("req.body", req.body);

    const existUser = await Userdb.findOne({
      email: data.email,
      role: data.role,
    });
    console.log("data.role", data);

    if (existUser) {
      bcrypt
        .compare(data.password, existUser.password)
        .then((checkPassword) => {
          if (checkPassword) {
            generateToken({ email: existUser.email }).then((token) => {
              res.status(200).json({
                message: "user login successfully",
                userName: existUser.name,
                data: existUser,
                token: token,
                status: "Successful",
              });
            });
          } else {
            res.status(400).json({
              message: "password not matched",
              status: "Failed",
            });
          }
        });
    } else {
      res.status(400).json({
        message: "user not found",
        status: "Failed",
      });
    }
  } catch (err) {
    console.log(err);
    next();
  }
}