import ExamPatternDb from "../../model/Exam/ExamPatternModel.js";

export async function create(req, res, next) {
  try {
    const data = req.body;
    console.log("reqq", data);
    const details = {
      Course: data.Course,
      Technology: data.Technology,
      NumberOfWeeks: data.NumberOfWeeks,
      weeks: data.weeks,
      // Week: data.week,
      // Tech: data.Tech,
      // Tech: data.Tech,
      // Tech: data.Tech,
      // Count: data.Count,
      // Count: data.Count,
      // Count: data.Count,
      // time: data.time,
    };
    const createJobForm = await ExamPatternDb.create(details);
    {
      res.status(201).json({
        message: "created pattern successfully",
        data: createJobForm,
      });
    }
    console.log(createJobForm, "jhkjhkjhkj");
  } catch (err) {
    console.log(err);
    next();
  }
}

// export async function create(req, res) {
//   console.log("reqq",req.body)
//     if (!req.body) {
//       res.status(400).send({ message: "Content can not be emtpy!" });
//       return;
//     }

//     // new user
//     const exam = new ExamPatternDb({
//       Technology: req.body.Technology,
//       NumberOfWeeks: req.body.NumberOfWeeks,

//     });
//   console.log(exam,"jhkjhkjhkj")
//     // save user in the database
//     exam.save(exam);
//     res.status(200).json("create successfully");
//   }

// retrieve and return all users/ retrive and return a single user
export async function find(req, res) {
  ExamPatternDb.find()
    .then((exam) => {
      res.send(exam);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Error Occurred while retriving  pattern information",
      });
    });
}

export async function findById(req, res) {
  const das = ExamPatternDb.findById(req.params.id)
    .then((data) => {
      res.send(data);
      console.log(data);
    })
    .catch((error) =>
      res.status(404).send({ message: "Not found Pattern with id " })
    );
  console.log(das.data, "lll");
}

//update

export async function Examupdate(req, res) {
  if (!req.body) {
    return res.status(400).send({ message: "Data to update can not be empty" });
  }

  const id = req.params.id;
  ExamPatternDb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot  Update Pattern with ${id}. Maybe Pattern not found!`,
        });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error Update Pattern information" });
    });
}

// Delete a Tech with specified  id in the request
export async function Examdelete(req, res) {
  const id = req.params.id;

  ExamPatternDb.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({ message: `Cannot Delete with id ${id}. Maybe id is wrong` });
      } else {
        res.send({
          message: "Pattern was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Pattern with id=" + id,
      });
    });
}

////

// Define your aggregate function
export async function getquestion(req, res) {
  // console.log("req", req);
  try {
    const result = await ExamPatternDb.aggregate([
      {
        $lookup: {
          from: "questionbanks",
          localField: "weeks.limit.Tech",
          foreignField: "Technology",
          as: "result",
        },
      },
      {
        $unwind: {
          path: "$result",
        },
      },
      {
        $unwind: {
          path: "$result.question",
        },
      },
      {
        $match: {
          "result.question.week": "1",
        },
      },
    ]);

    console.log(result, "result");
    res.send({
      data: result,
      message: "get data",
    });
  } catch (error) {
    console.error(error);
  }
}

// Call the aggregate function
// getOrdersWithSufficientStock();
