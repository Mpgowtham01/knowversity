import AdminLogoDB from "../model/AdminLogo.js";

export async function AdminLogo(req, res, next) {
  try {
    const data = req.body;
    const logoUrl = `${req.protocol}://${req.get(
      "host"
    )}/${req.file.path.replace(/\\/g, "/")}`;

    const details = {
      logo: logoUrl,
    };
    const createaboutus = await AdminLogoDB.create(details);
    if (createaboutus) {
      res.status(201).json({
        message: "Logo Created Successfully",
        data: createaboutus,
      });
    }
  } catch (err) {
    console.log(err);
    next();
  }
}

export async function find(req, res) {
  AdminLogoDB.find()
    .then((exam) => {
      res.send(exam);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Error Occurred while retriving exam Technology information",
      });
    });
}
