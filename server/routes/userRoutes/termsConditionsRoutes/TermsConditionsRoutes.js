import {createTermsCondition,getTermsCondition,getTermsConditionOne,deleteTermsCondition,updateTermsCondition} from "../../../controller/userControllers/termsConditionController/TermsConditionsController.js"
import express from "express"

const router=express.Router()

router.post("/create",createTermsCondition);

router.get("/",getTermsCondition)

router.get("/:id",getTermsConditionOne)

router.put("/:id",updateTermsCondition)

router.delete("/:id",deleteTermsCondition)

export default router