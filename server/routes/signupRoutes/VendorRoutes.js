import { Router } from "express";
const router = Router();

import {
  getList,
  getoneUser,
  userSignup,
  updateSingup,
  uploadImage,
  deleteVendor
} from "../../controller/SignupController/VendorSignupController.js";
import Image from "../../middleware/AddressProof.js";

router.route("/vendorCreate").post(userSignup);
router.route("/vendorDelete/:id").delete(deleteVendor);

router.route("/vendorput/:id").put(updateSingup);
// router.route("/addressproofImage/:id").put(Image,uploadImage);
router.put("/addressproofImage/:id", Image, uploadImage);

router.route("/getAll").get(getList);
router.route("/vendor_get/:id").get(getoneUser);

import {
  createCategory,
  getAllCategory,
  updateCategory,
  deleteCategory,
  createSubCategory,
  getCategroyById,
} from "../../controller/Vendor/Categorycontroller.js";

import {
  createAddCategory,
  deleteAddcategory,
  getoneAllCategorysgetid,
  getAddAllCategory,
  updateAddcategory,
} from "../../controller/Vendor/AddCategoryController.js";

router.route("/createCategory").post(createCategory);
router.route("/getAllCategory").get(getAllCategory);
router.route("/updateCategory/:id").put(updateCategory);
router.route("/delete");
router.route("/createSubCategory").post(createSubCategory);
router.route("/categoryById/:categoryId").get(getCategroyById);

import { createVendorDetails } from "../../controller/Vendor/VendorDetailsController.js";
router.route("/createVendorDetails").post(createVendorDetails);


//add category
router.route("/createAddCategory").post(createAddCategory);
router.route("/getAddAllCategory").get(getAddAllCategory);
router.route("/getAddAllCategoryId/:id").get(getoneAllCategorysgetid)
router.route("/puttAddAllCategory/:id").put(updateAddcategory)
router.route("/deleteAddcategory/:id").delete(deleteAddcategory);

export default router;
