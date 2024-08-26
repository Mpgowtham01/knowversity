import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log("first", file);
    cb(null, "./public/Learning");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}`);
  },
});

let learningFile = multer({ storage: storage });
export default learningFile.single("learningFile");



