import multer from "multer";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null,"./public/HomeStudent")
    },
    filename: (req, file, cb) =>{
        cb(null, file.originalname);
    },
    // filename: function (req, file, cb) {
    //     const uniqueSuffix = Date.now()
    //     cb(null, file.fieldname + '-' + uniqueSuffix)
    //   },
});

let StudentImage = multer({ storage: storage});
export default StudentImage.single("StudentImage");