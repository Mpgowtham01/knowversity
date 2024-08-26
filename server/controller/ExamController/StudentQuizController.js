// import ExamPatternDb from "../../model/Exam/ExamPatternModel.js";
// import QuestionBankDb from "../../model/Exam/QuestionBankModel.js";

// export async function find(req, res) {
//   ExamPatternDb.find()
//     .then((exam) => {
//       res.send(exam);
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message:
//           err.message || "Error Occurred while retriving  pattern information",
//       });
//     });
// }

// export async function findById(req, res) {
//   const das = ExamPatternDb.find(req.params.id)
//     .then((data) => {
//       res.send(data);
//       console.log(data);
//     })
//     .catch((error) =>
//       res.status(404).send({ message: "Not found Pattern with id " })
//     );
//   console.log(das.data, "lll");
// }

const mongoose = require("mongoose");

// Connect to your MongoDB database
mongoose.connect("mongodb://localhost/testdb", { useNewUrlParser: true });

// Define your first schema
const ExamPattern = new mongoose.Schema({
  Course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Exampattern",
  },
  weeks: [
    {
      Week: String,
      limit: [{ Tech: String, Count: String }],

      time: String,
    },
  ],
});

// Compile the schema into a model
const Order = mongoose.model("Order", ExamPattern);

// Define your second schema
const QuizQuestion = new mongoose.Schema({
  Technology: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "QuestionBank",
  },
  question: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "QuestionBank",
    },
  ],
});

// Compile the schema into a model
const questionbank = mongoose.model("questionbank", QuizQuestion);

// Define your aggregate function
async function getOrdersWithSufficientStock() {
  try {
    const result = await Order.aggregate([
      {
        $lookup: {
          from: "Technology",
          localField: "Technology",
          foreignField: "_id",
          as: "Technology_docs",
        },
      },
      {
        $match: {
          "Technology_docs.Technology": { $gte: "$weeks.limit.Tech" },
        },
      },
    ]);

    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

// Call the aggregate function
getOrdersWithSufficientStock();
