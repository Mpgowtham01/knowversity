import { Router } from "express";
const router = Router();

import {postFreelancing,FreelancingGet,FreelancingPut,freelancingDelete} from "../../controller/freelancingController/postForm.js";

router.route("/FreelancingCreate").post(postFreelancing);
router.route("/FreelancingGet").get(FreelancingGet);
router.route("/FreelancingPut/:id").put(FreelancingPut);
router.route("/FreelancingDelete/:id").delete(freelancingDelete);







export default router;