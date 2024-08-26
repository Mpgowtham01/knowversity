import Addressmulter from "multer";

const storage = Addressmulter.diskStorage({
    destination: (req, file, cb) => {
        console.log("first", file);
        cb(null, "./public/KycVendor"); 
    },
    filename: (req, file, cb) => {
        // cb(null, `${Date.now()}`);
        cb(null, Date.now() + '--' + file.originalname)
    },
});

let AddressProof = Addressmulter({ storage: storage });
export default AddressProof.single("AddressProof");



