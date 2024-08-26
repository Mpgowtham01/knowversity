import multer from "multer";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null,"./public/Carousel")
    },
    filename: (req, file, cb) =>{
        cb(null, file.originalname);
    },
    // filename: function (req, file, cb) {
    //     const uniqueSuffix = Date.now()
    //     cb(null, file.fieldname + '-' + uniqueSuffix)
    //   },
});

let Carousel = multer({ storage: storage});
export default Carousel.single("Carousel");