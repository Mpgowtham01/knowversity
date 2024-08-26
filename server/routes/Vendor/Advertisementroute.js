import { Router } from "express";
import { createAdvertisement, deleteAdvertisement, getAdvertisement, updateAdvertisement } from "../../controller/Vendor/Advertisementcontroller.js";


const router = Router();


router.route("/createAdvertisement").post(createAdvertisement);
router.route("/getAdvertisement").get(getAdvertisement);
router.route("/updateAdvertisement/:id").put(updateAdvertisement);
router.route("/deleteAdvertisement/:id").delete(deleteAdvertisement);

export default router;