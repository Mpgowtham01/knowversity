import { Router } from 'express';
import multer from 'multer';
import path from 'path';
import { find_images,addOrUpdateImage } from '../controller/image_controller.js';

const router = Router();
import { extname } from "path";
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      console.log("first", file);
      cb(null, "./public/mobile_image");
    },
    filename: (req, file, cb) => {
      const extension = extname(file?.originalname);
      cb(null, `${Date.now()}${extension}`);
    },
  });

const upload = multer({
  storage: storage,
 
});

router.put('/updateImages', upload.single('image'), addOrUpdateImage);
router.get('/find_images', find_images);

export default router;
