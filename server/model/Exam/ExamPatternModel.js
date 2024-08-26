// import mongoose from "mongoose";

// const { Schema, model } = mongoose;

// const ExamPattern = new Schema({
//   // id:Int16Array,
//   Course: {
//     type: Schema.Types.ObjectId,
//     required: true,
//     ref: "CourseList",
//   },
//   Technology: [
//     {
//       type: Schema.Types.ObjectId,
//       required: true,
//       ref: "TechnologyList",
//     },
//   ],
//   // Course: String,
//   // Technology: Array,
//   NumberOfWeeks: String,
//   weeks: [
//     {
//       week: {
//         type: String,
//         required: true,
//       },
//       limit: [
//         {
//           Tech: [
//             {
//               type: String,
//               required: true,
//             },
//           ],
//           Count: [
//             {
//               type: String,
//               required: true,
//             },
//           ],
//         },
//       ],
//       time: String,
//     },
//   ],
// });

// ExamPattern.method("toJSON", function () {
//   const { _id, ...object } = this.toObject();
//   object.id = _id;
//   return object;
// });

// ExamPattern.set("autoIndex", true);

// const ExamPatternDb = model("Exampattern", ExamPattern);
// ExamPatternDb.createIndexes();

// export default ExamPatternDb;

import mongoose from "mongoose";
import validateForeignKey from "../../../middleware/ForeignKeyCheck.js";

const { Schema, model } = mongoose;

const ExamPattern = new Schema({
  // Course: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   required: true,
  //   ref: "CourseList",
  // },
  // Technology: [
  //   {
  //     type: mongoose.Schema.Types.ObjectId,
  //     required: true,
  //     ref: "TechnologyList",
  //   },
  // ],
  Course: String,
  Technology: [String],
  NumberOfWeeks: String,

  weeks: [
    {
      Week: String,
      limit: [{ Tech: String, Count: String }],

      time: String,
    },
  ],
  //   {
  //     week: String,
  //     Tech: String,
  //     Count: String,
  //     time: String,
  //   },
  //   // {
  //   //   week: {
  //   //     type: String,
  //   //     required: true,
  //   //   },

  //   //   Tech: {
  //   //     type: String,
  //   //     required: true,
  //   //   },
  //   //   Count: {
  //   //     type: String,
  //   //     required: true,
  //   //   },

  //   //   time: String,
  //   // },
  // ],
});

// ExamPattern.pre("save", function (next) {
//   const child = this;
//   // child.Technology.forEach((Technology) => {
//   //   console.log("Technology", Technology);
//   //   validateForeignKey(child, "Technology", "TechnologyList", next);
//   // });
//   validateForeignKey(child, "Course", "CourseList", next);
//   child.Technology.forEach((Technology) => {
//     console.log("Technologyyy", Technology);
//     validateForeignKey(child, Technology, "TechnologyList", next);
//   });
// });

ExamPattern.method("toJSON", function () {
  const { _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

ExamPattern.set("autoIndex", true);

const ExamPatternDb = model("Exampattern", ExamPattern);
ExamPatternDb.createIndexes();

export default ExamPatternDb;
