import { Router } from "express";
const router = Router();

import {
  createBlog,
  getBlog,
  updateBlog,
  deleteBlog,
} from "../../controller/AdminController/BlogController.js";

router.route("/createBlog").post(createBlog);
router.route("/getBlog").get(getBlog);
router.route("/updateBlog/:id").put(updateBlog);
router.route("/deleteBlog/:id").delete(deleteBlog);

export default router;
