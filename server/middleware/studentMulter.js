import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log("first", file);
    cb(null, "./public/studentImage");
  },
  filename: (req, file, cb) => {
    console.log("second", file);
    cb(null, `${file.fieldname}-${file.originalname}`);
    console.log("third", file);
  },
});

let studentImage = multer({ storage: storage });
export default studentImage.single("studentImage");
