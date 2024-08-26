import { generateToken } from "../../middleware/auth.js";
import TrainerSignupDb from "../../model/signupModel/TrainerModel.js";
import Userdb from "../../model/userModel.js";
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
    console.log("role", role);
    const registrationName = req.body.firstName.substring(0, 3);
    console.log("registrationName", registrationName);
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
      res.status(409).json({
        message: "user already exist",
        data: existUser,
      });
    } else {
      const createUser = await TrainerSignupDb.create(details);
      await Userdb.create({
        name: data.LastName,
        email: data.email,
        password: bcrypt.hashSync(password, salt),
        role: data.role,
        userId: createUser._id,
        forgetPasswordCode: 0,
        RegistrationId: `${registrationName + RegistrationId()}`,
        author: {
          ref: "TrainerSignupDb",
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
// export async function getTrainer(req, res, next) {
//   try {
//     const getTrainers = await TrainerSignupDb.find();
//     res.status(200).json({
//       message: "get successfully",
//       data: getTrainers,
//     });
//   } catch (err) {
//     next();
//   }
// }
export async function updateProfessionalDetails(req, res) {
  try {
    const { id } = req.params;
    const updatedDetails = req.body;
    const trainer = await TrainerSignupDb.findByIdAndUpdate(
      id,
      { $set: { professionalDetails: updatedDetails } },
      { new: true }
    );
    if (!trainer) return res.status(404).json({ message: 'Trainer not found' });
    res.status(200).json({ message: 'Professional details updated successfully', trainer });
  } catch (error) {
    res.status(500).json({ message: 'Error updating professional details', error });
  }
}

export async function getTrainerList(req, res, next) {
  try {
    const getTrainerList = await TrainerSignupDb.find();
    // generateToken({ data: getemployeelist })
    // .then((data) => {
    res.status(200).json({
      message: "get successfully",
      data: getTrainerList,
    });
    // });
  } catch (err) {
    next();
  }
}

export async function getoneTrainer(req, res) {
  try {
    const data = req.params;
    const TrainerId = data.id;
    const Trainergetoneid = await TrainerSignupDb.findById(TrainerId);
    res.status(200).json({
      message: "get Successfully",
      data: Trainergetoneid,
    });
  } catch (e) {
    throw e;
  }
}

export async function updateTrainer(req, res, next) {
  try {
    const data = req.body;
    const id = req.params.id;

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
      skills: data.skills,
    };
    const TrainerupdateList = await TrainerSignupDb.findByIdAndUpdate(id, details, {
      new: true,
    });
    res.status(200).json({
      message: "create successfully",
      data: TrainerupdateList,
    });
  } catch (err) {
    next();
  }
}

export async function deleteTrainer(req, res, next) {
  try {
    const data = req.params;
    const TrainerId = data.id;
    const TrainerDelete = await TrainerSignupDb.findByIdAndDelete(TrainerId);
    res.status(200).json({
      message: "Deleted Successfully",
      data: TrainerDelete,
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

export async function TrainerLogin(req, res, next) {
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

 