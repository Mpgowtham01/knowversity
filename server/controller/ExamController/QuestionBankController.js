import QuestionBankDb from "../../model/Exam/QuestionBankModel.js";
// import ObjectId from "mongo-objectid";
export async function create(req, res, next) {
  try {
    const data = req.body;

    console.log(data.extraweek, "hello");
    const details = {
      Technology: data.Technology,
      question: data.question,
      quest: data.quest,
      choice: data.choice,
      option: data.option,
      correctOption: data.correctOption,
      week: data.week,
    };

    const createQB = await QuestionBankDb.create(data);
    {
      // console.log("first");
      res.status(201).json({
        message: "created question successfully",
        data: createQB,
      });
    }
    console.log(createQB, "createdData");
  } catch (err) {
    console.log("second");
    console.log(err);
    console.log("error");
    next();
  }
}

//update

export async function QBupdate(req, res) {
  if (!req.body) {
    return res.status(400).send({ message: "Data to update can not be empty" });
  }

  const id = req.params.id;
  QuestionBankDb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot Update user with ${id}. Maybe user not found!`,
        });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error Update user information" });
    });
}
const Qarray = [];
export async function Qfind(req, res) {
  QuestionBankDb.find()
    .then((question) => {
      // console.log("question", question);
      res.send(question);
      // Qarray.push(question);
      // console.log(Qarray, "inside");
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Error Occurred while retriving question bank information",
      });
    });
}
export async function QfindWeek(req, res) {
  // const Technology = req.params.Technology
  // await QuestionBankDb.find({ Technology: Technology })
  QuestionBankDb.aggregate([
    {
      $match: {
        Technology: req.body.Technology,
        // "question.week": week,
        // $project: {
        //   "question": 1,
        //   "_id": 0
        // }
      },
    },])
  
    .then((question) => {
      // console.log("question", Technology)
      res.send(question);
      // Qarray.push(question);
      // console.log(Qarray, "inside");
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Error Occurred while retriving question bank information",
      });
    });
}

// console.log(Qarray, "Qarray");

export async function findById(req, res) {
  console.log(req.params, "khkhkhkhkhkh");
  QuestionBankDb.findById(req.params.id)
    .then((data) => res.send(data))
    .catch((error) =>
      res.status(404).send({ message: "Not found user with Technology " })
    );
}

// export async function findByq(req, res) {
//   console.log(req.params, "khkhkhkhkhkh");
//   QuestionBankDb.findById(req.params.id.id)
//     .then((data) => res.send(data))
//     .catch((error) =>
//       res.status(404).send({ message: "Not found user with Technology " })
//     );
// }

// Delete a Tech with specified  id in the request
export async function QBdelete(req, res) {
  const id = req.params.id;

  QuestionBankDb.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({ message: `Cannot Delete with id ${id}. Maybe id is wrong` });
      } else {
        res.send({
          message: "question was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete question with id=" + id,
      });
    });
}

//student quiz
export async function SQfind(req, res) {
  // QuestionBankDb.find();

  // QuestionBankDb.aggregate([
  //   { $project: { Technology: 1, totalWeeks: { question: 1 } } },
  // ])
  console.log(req.body, QuestionBankDb, "hkjhkj");
  // console.log(location.state.NumberOfWeeks);
  // console.log(Questionbank);
  const tech = req.body.Technology;
  const weekVal = req.body.totalWeeks;
  const filterQuest = QuestionBankDb.filter((ele) => {
    return (ele.Technology == tech && ele.week == weekVal) || null;
  });
  QuestionBankDb.aggregate([
    {
      $match: {
        Technology: req.body.Technology,
        "totalWeeks.week": req.body.totalWeeks,
      },
    },
    // {
    //   $match: {
    //     $or: [
    //       {
    //         Technology: req.body.Technology,
    //       },
    //       {
    //         $and: [
    //           {
    //             "totalWeeks.week": req.body.totalWeeks.week,
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  ])
    // var arrr = [];
    // const arr2 = arrr.push(question);
    // const filtered = arrr.filter((item) => {

    //   item[0].totalWeeks.week == req.body.totalWeeks[0].week;
    //   console.log(item[0].totalWeeks[0].week, "itemmm");
    // })

    .then(() => {
      res.send(filtered);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Error Occurred while retriving question bank information",
      });
    });
}

export async function QuestionBankGetAll(req, res) {
  QuestionBankDb.find()
    .then((question) => {
      console.log("question", question);
      // res.send(question);
      Qarray.push(question);
      const tech = req.body.Technology;
      const weekVal = req.body.totalWeeks;
      console.log(tech, weekVal, "values");

      const filterQuest = question.filter((ele) => {
        // console.log(ele.totalWeeks, "elements");
        var newWeek;
        ele.totalWeeks.map((val) => {
          newWeek = val.week;
        });
        console.log(newWeek, "new");
        return ele.Technology == tech && newWeek == weekVal;
      });
      console.log(filterQuest, "filtered");
      res.send(filterQuest);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Error Occurred while retriving question bank information",
      });
    });
}

// "/questionbanks/:questionbanksId/totalWeek/:totalWeekId/question/:questionId",
export async function Questupdate(req, res) {
  // console.log(req, "11111111156");
  // console.log("req.params.questionbanksId", req.params.questionbanksId);
  // console.log("req.params.totalWeekId", req.params.totalWeekId);
  // console.log("req.params.questionId ", req.params.questionId);
  const id = req.body.id;
  const Quesid = req.body.Quesid;
  try {
    let result = await QuestionBankDb.findOneAndUpdate(
      {},
      {
        $pull: {
          totalweeks: {
            question: {
              _id: "63cbe4dd4eaef701fcb2ffe7",
            },
          },
        },
      }
    );

    {
      console.log(req.params, "req.params");
    }
    console.log("result", result);
    res.send(result);
  } catch (err) {
    console.log("second");
    console.log(err);
    res.status(500).send("Something went wrong");
  }
}
