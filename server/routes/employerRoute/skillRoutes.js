import { Router } from "express";
const router = Router();

import { 
    skillCreate,
    skillUpdate,
    skillDelete,
    getAllSkill,
  } from "../../controller/EmployerController/skillController.js";

// skills
router.route("/createSkill").post(skillCreate);
router.route("/getSkill").get(getAllSkill);
router.route("/updateSkill/:id").put(skillUpdate);
router.route("/deleteSkill/:id").delete(skillDelete);

export default router;