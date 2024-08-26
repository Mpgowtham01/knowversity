import mongoose from "mongoose";

const { Schema, model } = mongoose;
const QuestionBank = new Schema({
  Technology: String,
  // {
  //   type: mongoose.Schema.Types.ObjectId,
  //   required: true,
  //   ref: "TechnologyList",
  // },

  question: [
    {
      quest: String,
      choice: 
        {
          option: [{
            type: String,
            required: true,
          }],
        },
      
      correctOption: {
        type: Number,
        required: true,
      },

      week: {
        type: String,
        required: true,
      },
    },
  ],
});

QuestionBank.method("toJSON", function () {
  const { _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

QuestionBank.set("autoIndex", true);

const QuestionBankDb = model("QuestionBank", QuestionBank);
QuestionBankDb.createIndexes();
export default QuestionBankDb;

// ////
// import mongoose from "mongoose";

// const { Schema, model } = mongoose;
// const QuestionBank = new Schema({
//   Technology: {
//     type: String,
//     required: true,
//   },
// });

// QuestionBank.method("toJSON", function () {
//   const { _id, ...object } = this.toObject();
//   object.id = _id;
//   return object;
// });

// QuestionBank.set("autoIndex", true);

// const QuestionBankDb = model("QuestionBank", QuestionBank);
// QuestionBankDb.createIndexes();
// export default QuestionBankDb;
