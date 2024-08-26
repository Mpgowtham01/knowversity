import mongoose from "mongoose";

const { Schema, model } = mongoose;
const QuestionBankNew = new Schema({
  technologyId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "QuestionBank",
  },

  week: {
    type: String,
    required: true,
  },

  question: [
    {
      quest: String,
      choice: [
        {
          option: {
            type: String,
            required: true,
          },

          correctOption: {
            type: Boolean,
            default: false,
          },
        },
      ],
    },
  ],
});

QuestionBankNew.set("autoIndex", true);

const NewQuestionBankDb = model("NewQuestion", QuestionBankNew);
NewQuestionBankDb.createIndexes();
export default NewQuestionBankDb;
