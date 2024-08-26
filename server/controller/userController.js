import nodemailer from "nodemailer";
import Userdb from "../model/userModel.js";
import Tokens from "./SignupController/VerifyEmailToken.js";
import bcrypt from "bcryptjs";

export async function forgetPassword(req, res, next) {
  try {
    const data = req.body;
    console.log("data.email", data.email);

    const otp = Math.floor(Math.random() * 9000 + 1000);
    console.log(otp);

    const checkEmail = await Userdb.findOne({ email: data.email });
    console.log(checkEmail, "dsd");
    if (checkEmail) {
      var transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: "ferilcrosshurdle@gmail.com",
          pass: "ntjlgqizfbebdshd",
        },
      });

      var mailOptions = {
        from: "ferilcrosshurdle@gmail.com",
        to: data.email,
        subject: "verifcation code",
        text: `${otp}`,
      };

      transporter.sendMail(mailOptions, async function (error, info) {
        if (error) {
          console.log(error);
        } else {
          const updateCode = await Userdb.findByIdAndUpdate(
            checkEmail._id,
            {
              forgetPasswordCode: otp,
            },
            { new: true }
          );
          res.status(200).json({
            message: "code send successfully",
            id: checkEmail._id,
          });
        }
      });
    } else {
      res.status(400).json({
        message: "Email does not exist",
      });
    }
  } catch (err) {
    console.log(err);
    next();
  }
}

export async function checkVerifivationCode(req, res, next) {
  try { 
    const data = req.body;

    const code = JSON.parse(data.code);
    const checkEmail = await Userdb.findOne({ email: data.email });
    if (checkEmail) {
      const matchVerificationCode = checkEmail.forgetPasswordCode === code;
      if (matchVerificationCode) {
        res.status(200).json({
          message: "verification code matched",
        });
      } else {
        res.status(400).json({
          message: "verification code mismatched",
        });
      }
    } else {
      res.status(400).json({
        message: "Email doesnot exist try again !!!",
      });
    }
  } catch (err) {
    console.log(err);
    next();
  }
}

export async function updatepassword(req, res, next) {
  const salt = await bcrypt.genSaltSync(10);
  const passwordDetails = req.body;
  console.log("passwordDetails", passwordDetails);
  const id = req.params.id;
  if (id) {
    await Userdb.findByIdAndUpdate(id, {
      password: bcrypt.hashSync(passwordDetails.userDetails.password, salt),
    });
    res.status(201).json({
      message: "password changed successfully",
    });
  } else {
    res.status(400).json({
      message: "Try again later",
    });
  }
}

export async function verifyEmail(req, res) {
  // console.log(req.body);
  try {
    const user = await Userdb.findOne({ userId: req.params.id });
    console.log("uuu", user);

    const token = await Tokens.findOne({
      userId: user.userId,
      token: req.params.token,
    });
    console.log("tt", token);

    await Userdb.findOneAndUpdate({ _id: user._id }, { verified: true });
    await token.remove();

    res.status(200).send({ token, message: "Email verified successfully" });
  } catch (error) {
    res.status(400).send({ message: "Invalid link" });
  }
}

//   if (passwordDetails.email) {
//     const checkUser = await Userdb.findOne({
//       email: passwordDetails.email,
//       password: passwordDetails.oldPassword,
//     });
//     if (checkUser) {
//       await Userdb.findByIdAndUpdate(checkUser._id, {
//         password: passwordDetails.newPassword,
//       });
//       res.status(200).json({
//         message: "password changed successfully",
//       });
//     } else {
//       res.status(400).json({
//         message: "email not found",
//       });
//     }
//   } else {
//     res.status(400).json({
//       message: "Try again later",
//     });
//   }
// }

// code for forget password change

export async function deleteUserDb(req, res, next) {
  try {
    const data = req.params;
    const Id = data.id;
    console.log("Id", Id);
    const userDelete = await Userdb.findOneAndDelete({ userId: Id });
    res.status(200).json({
      message: "Deleted Successfully",
      data: userDelete,
    });
  } catch (error) {
    next();
  }
}
