import Panmulter from "multer";

const storage = Panmulter.diskStorage({
  destination: (req, file, cb) => {
    console.log("first", file);
    cb(null, "./public/PanCard");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}`);
  },
});

let PanCard = Panmulter({ storage: storage });
export default PanCard.single("PanCard");



