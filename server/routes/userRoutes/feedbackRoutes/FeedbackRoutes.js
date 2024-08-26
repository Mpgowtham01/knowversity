// import {getAllFeedback,getOneFeedback,updateFeedback,deleteFeedback,createFeedback} from "../../userRoutes/feedbackRoutes/FeedbackRoutes.js";
// import express from "express";

// const router=express.Router()

// router.post("/create",createFeedback)

// router.get("/",getAllFeedback)

// router.get("/:id",getOneFeedback)

// router.delete("/:id",deleteFeedback)

// router.put("/:id",updateFeedback)

// export default router

import {getAllFeedback,getOneFeedback,updateFeedback,deleteFeedback,createFeedback
  } from "../../../controller/userControllers/feedback/FeedbackController.js";
  import express from "express";

  //Router declare
  const router = express.Router();

  router.post("/create", createFeedback);

  router.get("", getAllFeedback);

  router.get("/:id", getOneFeedback);

  router.delete("/:id", deleteFeedback);

  router.put("/:id", updateFeedback);

  export default router;
