import multer from "multer";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log("first", file);
        cb(null, "./public/Logo"); 
    },
    filename: (req, file, cb) => {
        // cb(null, `${Date.now()}`);
        cb(null, Date.now() + '--' + file.originalname)
    },
});

let logo = multer({ storage: storage });
export default logo.single("logo");



