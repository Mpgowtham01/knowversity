import { Router } from "express";
import { AdminLogo, find } from "../controller/AdminLogoController.js";
import Logo from "../middleware/Logo.js";
const router = Router();



  router.route("/createLogo").post(Logo ,AdminLogo);
  router.route("/getLogo").get(find);
 
export default router;
