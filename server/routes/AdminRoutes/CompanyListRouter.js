import { Router } from "express";
const router = Router();

import {
  createCompanyList,
  getCompanyList,
  updateCompanyList,
  deleteCompanyList,
  uploadImage,
} from "../../controller/AdminController/CompanyListController.js";
import image from "../../middleware/multer.js";

router.route("/createCompanyList").post(createCompanyList);
router.route("/getCompanyList").get(getCompanyList);
router.route("/updateCompanyList/:id").put(updateCompanyList);
router.route("/deleteCompanyList/:id").delete(deleteCompanyList);
router.post("/uploadImage", image, uploadImage);

export default router;
