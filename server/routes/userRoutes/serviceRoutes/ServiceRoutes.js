import {createService,getService,getServiceOne,deleteService,updateService} from "../../../controller/userControllers/services/ServicesController.js"
import express from "express"

const router=express.Router()

router.post("/create",createService)

router.get("/",getService)

router.get("/:id",getServiceOne)

router.delete("/:id",deleteService)

router.put("/:id",updateService)

export default router;