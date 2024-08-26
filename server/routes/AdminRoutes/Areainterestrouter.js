import { Router } from "express";
const router = Router();

import {
  createAreaofinterest,
  getAreaofinterest,
  getAreaofinterestById,
  updateAreaofinterest,
  deleteAreaofinterest,
} from "../../controller/AdminController/Areainterestcontroller.js";

router.route("/createAreaofinterest").post(createAreaofinterest);
router.route("/getAreaofinterest").get(getAreaofinterest);
router.route("/SubdomainById/:subdomainId").get(getAreaofinterestById);
router.route("/updateAreaofinterest/:id").put(updateAreaofinterest);
router.route("/deleteAreaofinterest/:id").delete(deleteAreaofinterest);

export default router;
