import { Router } from "express";
import {
  createOffer,
  deleteOffer,
  getOffer,
  updateOffer,
} from "../../controller/Vendor/OfferCategory.js";
const router = Router();

router.route("/createOffer").post(createOffer);
router.route("/getOffer").get(getOffer);
router.route("/updateOffer/:id").put(updateOffer);
router.route("/deleteOffer/:id").delete(deleteOffer);

export default router;
