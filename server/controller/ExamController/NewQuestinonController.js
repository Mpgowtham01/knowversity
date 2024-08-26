import NewQuestionBankDb from "../../model/Exam/newQuestion.js";
import QuestionBankDb from "../../model/Exam/QuestionBankModel.js";

export async function createNewQuest(req, res, next) {
  console.log(req.body, "req.body");

  const data = req.body;
  const details = {
    technologyId: data.technology,
    week: data.week,
  };
  console.log(details.technologyId, "detra");
  try {
    const createQuestion = await NewQuestionBankDb.create(req.body);
    return res.status(201).json({
      message: "Question  Created Successfully",
      data: createQuestion,
    });
  } catch (err) {
    console.log(err);
    next();
  }
}

export async function QBNfind(req, res) {
  NewQuestionBankDb.find()
    .then((question) => {
      res.send(question);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Error Occurred while retriving question bank information",
      });
    });
}

export async function QBNupdate(req, res) {
  if (!req.body) {
    return res.status(400).send({ message: "Data to update can not be empty" });
  }

  const id = req.params.id;
  NewQuestionBankDb.findByIdAndUpdate(
    id,
    { $set: req.body },
    { new: true }
    // { useFindAndModify: false }
  )
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
