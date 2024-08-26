import { generateToken } from "../../middleware/auth.js";
import Userdb from "../../model/userModel.js";
import bcrypt from "bcrypt";
import collegeSignupDB from "../../model/signupModel/CollegeModel.js";
import { RegistrationId } from "./RegistrationId.js";
import crypto from "crypto";
import sendVerificationEmail from "./SendVerificationEmail.js";
import Tokens from "./VerifyEmailToken.js";

export async function userSignup(req, res, next) {
  try {
    const data = req.body;
    const role = data.role;
    const email = data.email;
    console.log("role", data);
    const registrationName = req.body.collegeName.substring(0, 3);
    console.log("registrationName", registrationName);
    const salt = await bcrypt.genSaltSync(10);
    const password = await data.password;
    const existUser = await Userdb.findOne({ email: data.email });
    const details = {
      role: data.role,
      collegeName: data.collegeName,
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
      const createUser = await collegeSignupDB.create(details);
      await Userdb.create({
        name: data.collegeName,
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
// get
export async function getCollage(req, res, next) {
  try {
    const getDomainlist = await collegeSignupDB.find();
    res.status(200).json({
      message: "get successfully",
      data: getDomainlist,
    });
  } catch (err) {
    next();
  }
}
//
export async function getList(req, res, next) {
  try {
    const getemployeelist = await collegeSignupDB
      .find()
      // generateToken({ data: getemployeelist })
      .then((data) => {
        res.status(200).json({
          message: "get successfully",
          data: data,
        });
      });
  } catch (err) {
    next();
  }
}

export async function getListById(req, res, next) {
  if (req.params.id) {
    const id = req.params.id;
    console.log(req.params.id, "getttt");
    collegeSignupDB
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
  try {
    const data = req.body;
    const id = req.params.id;

    const details = {
      role: "college",
      collegeName: data.collegeName,
      collegetype: data.collegetype,
      website: data.website,
      email: data.email,
      establishedYear: data.establishedYear,
      service: data.service,
      phone: data.phone,
      password: bcrypt.hashSync(password, salt),
      country: data.country,
      state: data.state,
      district: data.district,
      city: data.city,
      address: data.address,
      pincode: data.pincode,
    };
    const updateList = await collegeSignupDB.findByIdAndUpdate(id, details, {
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
    const employeeDelete = await collegeSignupDB.findByIdAndDelete(employeeId);
    res.status(200).json({
      message: "Deleted Successfully",
      data: employeeDelete,
    });
  } catch (error) {
    next();
  }
}

export async function CollegeLogin(req, res, next) {
  try {
    const data = req.body;
    const existUser = await collegeSignupDB.findOne({
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
