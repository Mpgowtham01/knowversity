import CourseListDb from "../../model/Exam/CourseModel.js";

export async function create(req, res, next) {
  try {
    const data = req.body;
    console.log("reqq", data);
    const details = {
      Course: data.Course,
      technology: data.technology,
      duration: data.duration,
      qualification: data.qualification,
      description: data.description,
      fees: data.fees,
      courseMode: data.courseMode,
    };
    const createJobForm = await CourseListDb.create(details);
    {
      res.status(201).json({
        message: "created Course successfully",
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
  CourseListDb.find()
    .then((exam) => {
      res.send(exam);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Error Occurred while retriving Course information",
      });
    });
}

export async function findById(req, res) {
  const das = CourseListDb.findById(req.params.id)
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

export async function courseupdate(req, res) {
  if (!req.body) {
    return res.status(400).send({ message: "Data to update can not be empty" });
  }

  const id = req.params.id;
  CourseListDb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot  Update Course with ${id}. Maybe user not found!`,
        });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error Update Course information" });
    });
}

// Delete a Tech with specified  id in the request
export async function coursedelete(req, res) {
  const id = req.params.id;

  CourseListDb.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({ message: `Cannot Delete with id ${id}. Maybe id is wrong` });
      } else {
        res.send({
          message: "Course was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Course with id=" + id,
      });
    });
}
