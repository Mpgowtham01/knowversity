import { Router } from "express";
const router = Router();

import {
  technologyCreate,
  getAlltechnology,
  technologyUpdate,
  technologyDelete,
} from "../../controller/EmployerController/TechnologyController.js";

//technology
router.route("/createtechnology").post(technologyCreate);
router.route("/getAlltechnology").get(getAlltechnology);

router.route("/updatetechnology/:id").put(technologyUpdate);
router.route("/deletetechnology/:id").delete(technologyDelete);

export default router;
