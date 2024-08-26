import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log("first", file);
    cb(null, "./public/blog");
  },
  filename: (req, file, cb) => {
    console.log("second", file);
    cb(null, `${file.fieldname}-${file.originalname}`);
    console.log("third", file);
  },
});

let blog = multer({ storage: storage });
export default blog.single("blog");
