import Userdb from "../../model/userModel.js";
import bcrypt from "bcrypt";
import { generateToken } from "../../middleware/auth.js";

export async function Login(req, res, next) {
  try {
    const data = req.body;
    const existUser = await Userdb.findOne({
      email: data.email,
    });
    if (existUser) {
      bcrypt
        .compare(data.password, existUser.password)
        .then((checkPassword) => {
          if (checkPassword) {
            generateToken({ email: existUser.email }).then((token) => {
              if (existUser.verified === true) {
                res.status(200).json({
                  message: "user login successfully",
                  userName: existUser.name,
                  data: existUser,
                  token: token,
                  status: "Successful",
                });
              } else {
                res.status(400).json({
                  message: "check mail",
                  status: "Failed",
                });
              }
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
