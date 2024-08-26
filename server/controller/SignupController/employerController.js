import { generateToken } from "../../middleware/auth.js";
import employerSignUpDb from "../../model/signupModel/employerModel.js";
import Userdb from "../../model/userModel.js";
import bcrypt from "bcrypt";
import 

er from "nodemailer";
import { RegistrationId } from "./RegistrationId.js";
import crypto from "crypto";
import Tokens from "./VerifyEmailToken.js";
import sendVerificationEmail from "./SendVerificationEmail.js";

export async function userSignup(req, res, next) {
  try {
    const data = req.body;
    const role = data.role;
    const email = data.email;
    console.log("role", role);
    const registrationName = req.body.companyName.substring(0, 3);
    const salt = await bcrypt.genSaltSync(10);
    const password = await data.password;
    const existUser = await Userdb.findOne({ email: data.email });
    const details = {
      role: data.role,
      companyName: data.companyName,
      employerName: data.employerName,
      email: data.email,
      establishedYear: data.establishedYear,
      industryType: data.industryType,
      phone: data.phone,
      password: bcrypt.hashSync(password, salt),
      country: data.country,
      state: data.state,
      district: data.district,
      city: data.city,
      address: data.address,
      pincode: data.pincode,
      status: data.status,
      RegistrationId: `${registrationName + RegistrationId()}`,
    };

    if (existUser) {
      res.status(409).json({
        message: "user already exist",
        data: existUser,
      });
    } else {
      const createUser = await employerSignUpDb.create(details);
      await Userdb.create({
        name: data.employerName,
        email: data.email,
        companyName: data.companyName,
        password: bcrypt.hashSync(password, salt),
        role: data.role,
        userId: createUser._id,
        forgetPasswordCode: 0,
        RegistrationId: `${registrationName + RegistrationId()}`,
        author: {
          ref: "employerSignUpDb",
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
export async function gettt(req, res) {
  Userdb.find()
    .then((dd) => {
      res.status(200).send(dd);
    })
    .catch((err) => {
      console.log(err, "errr");
    });
}

export async function getList(req, res, next) {
  try {
    const getemployerlist = await employerSignUpDb.find();
    // generateToken({ data: getemployeelist })
    // .then((data) => {
    res.status(200).json({
      message: "get successfully",
      data: getemployerlist,
      // });
    });
  } catch (err) {
    next();
  }
}

export async function getListByStatus(req, res, next) {
  // employerSignUpDb.find()
  employerSignUpDb
    .aggregate([{ $match: { status: "Approved" } }])
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.send(error);
    });
}
export async function getoneUser(req, res, next) {
  try {
    const data = req.params;
    const employerId = data.id;
    console.log("idid", employerId);
    const employergetoneid = await employerSignUpDb.findOne({
      _id: employerId,
    });
    console.log("datata", employergetoneid);
    res.status(200).json({
      message: "get Successfully",
      data: employergetoneid,
    });
  } catch (e) {
    next();
    // throw e;
    // res.send(error);
  }
  //   if (req.params.userId) {
  //     const id = req.params.userId
  //     console.log(req.params.userId, "getttt");
  //     Userdb.findById(id
  //     ).then(data => {
  //         if (!data) {
  //             res.status(400).send("User not found")
  //         } else {
  //             res.send(data)
  //         }
  //     })
  //         .catch(err => {
  //             res.status(500).send(err)
  //         })
  // }
}
export async function getoneRegId(req, res) {
  try {
    const data = req.params;
    const employerReg = data.RegistrationId;
    console.log("Reg", employerReg);
    const employergetoneReg = await employerSignUpDb.findOne(employerReg);
    res.status(200).json({
      message: "get Successfully",
      data: employergetoneReg,
    });
  } catch (e) {
    throw e;
  }
}

export async function getListById(req, res, next) {
  if (req.params.id) {
    const id = req.params.id;
    employerSignUpDb
      .findById(id)
      .then((data) => {
        if (!data) {
          res.status(400).send("User not found");
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  }
}

export async function updateEmployee(req, res, next) {
  if (!req.body) {
    res.status(400).send("User Address not found");
  }
  const id = req.params.id;
  employerSignUpDb
    .findByIdAndUpdate(id, req.body, { new: true })
    .then((data) => {
      if (!data) {
        res.status(400).send(`Can not found user Address with ${id}`);
      } else {
        res.send(data);
      }
    })
    .catch((error) => {
      res.status(500).send(error);
    });
}

export async function deleteEmployee(req, res, next) {
  try {
    const data = req.params;
    const employeeId = data.id;
    const employeeDelete = await employerSignUpDb.findByIdAndDelete(employeeId);
    res.status(200).json({
      message: "Deleted Successfully",
      data: employeeDelete,
    });
  } catch (error) {
    next();
  }
}

export async function employerLogin(req, res, next) {
  try {
    const data = req.body;
    const existUser = await Userdb.findOne({
      email: data.email,
      role: data.role,
    });
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
        status: "failed",
      });
    }
  } catch (err) {
    console.log(err);
    next();
  }
}
