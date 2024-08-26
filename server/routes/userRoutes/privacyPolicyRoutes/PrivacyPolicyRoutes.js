import {createPrivacyPolicy,getPrivacyPolicy,getPrivacyPolicyOne,deletePrivacyPolicy,updatePrivacyPolicy} from "../../../controller/userControllers/privacyPolicy/PrivacyPolicyController.js"
import express from "express"

const router=express.Router()

router.post("/create",createPrivacyPolicy);

router.get("/",getPrivacyPolicy)

router.get("/:id",getPrivacyPolicyOne)

router.put("/:id",updatePrivacyPolicy)

router.delete("/:id",deletePrivacyPolicy)

export default router