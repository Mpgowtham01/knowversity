import TechnologyListDb from "../../model/Exam/TechnologyModel.js";

export async function create(req, res, next) {
  try {
    // const logoUrl = `${req.protocol}://${req.get('host')}/${req.file.path.replace(/\\/g, '/')}`
    const data = req.body;
    console.log("reqq", data);
    const details = {
      Technology: data.Technology,
      position: data.position,
      version: data.version,
      description: data.description,
      frameWork: data.frameWork,
      // logo: req.file && req.file.filename ? "http" + "://" + "localhost:8088" + "/Logo/" + req.file.filename : "",
      // logo: logoUrl

    };
    const createJobForm = await TechnologyListDb.create(details);
    {
      res.status(201).json({
        message: "created Job successfully",
        data: createJobForm,
      });
    }
    console.log(createJobForm, "jhkjhkjhkj");
  } catch (err) {
    console.log(err);
    next();
  }
}

// retrieve and return all users/ retrive and return a single user
export async function find(req, res) {
  TechnologyListDb.find()
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

export async function findById(req, res) {
  const das = TechnologyListDb.findById(req.params.id)
    .then((data) => {
      res.send(data);
      console.log(data);
    })
    .catch((error) =>
      res.status(404).send({ message: "Not found user with id " })
    );
  console.log(das.data, "lll");
}

//update

export async function Technologyupdate(req, res) {
  if (!req.body) {
    return res.status(400).send({ message: "Data to update can not be empty" });
  }

  const id = req.params.id;
  TechnologyListDb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot  Update user with ${id}. Maybe user not found!`,
        });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error Update user information" });
    });
}

// Delete a Tech with specified  id in the request
export async function Technologydelete(req, res) {
  const id = req.params.id;

  TechnologyListDb.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({ message: `Cannot Delete with id ${id}. Maybe id is wrong` });
      } else {
        res.send({
          message: "User was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete User with id=" + id,
      });
    });
}
