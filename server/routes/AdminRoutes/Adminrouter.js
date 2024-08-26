import { Router } from "express";
const router = Router();

import { create } from "../../controller/AdminController/AdminBlogcontroller.js";
import { find } from "../../controller/AdminController/AdminBlogcontroller.js";
import { update } from "../../controller/AdminController/AdminBlogcontroller.js";
import { Blogdelete } from "../../controller/AdminController/AdminBlogcontroller.js";

router.route("/api/create").post(create);
router.route("/api/get").get(find);
router.route("/api/users/:id").put(update);
router.route("/delete/users/:id").delete(Blogdelete);

export default router;
