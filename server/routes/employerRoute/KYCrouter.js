import { Router } from "express";
const router = Router();

import {
  createKYC,
  getKYCList,
  updateKYC,
  deleteKYC,
  uploadImage,
  // uploadAadhar
} from "../../controller/EmployerController/KYCcontroller.js";
import Image from "../../middleware/PanCard.js";
// import Image1 from "../../middleware/AddressProof.js";
 
router.route("/createkyc").post(createKYC);
router.route("/getkyclist").get(getKYCList);
router.route("/updatekyc/:id").put(updateKYC);
router.route("/deletekyc/:id").delete(deleteKYC);
router.post("/uploadImage", Image, uploadImage);
// router.post("/uploadAadhar", Image1, uploadAadhar);

export default router;
 