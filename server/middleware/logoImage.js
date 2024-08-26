import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log("first", file);
    cb(null, "./public/companyLogo");
  },
  filename: (req, file, cb) => {
    console.log('file', file)
    cb(null, `${file.fieldname}-${file.originalname}`);
  },
});

let companyLogo = multer({ storage: storage });
export default companyLogo.single("companyLogo");
