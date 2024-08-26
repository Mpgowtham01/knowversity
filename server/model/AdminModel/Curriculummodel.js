import mongoose from "mongoose";

const { Schema, model } = mongoose;
const CurriculumSchema = new Schema({
  title: { type: String,  },
  duration: { type: String, },
  trainer: { type: String, },
  startDate: { type: Date, },
  endDate: { type: Date, },
  classDays: { type: [String], },
  classTime: { type: [String], },
  mode: { type: String, enum: ['online', 'offline'] }, // New field (online/offline)
  price: { type: String, },
  image: { type: String, },
  rating: { type: Number, },
  description: { type: String, },
  whatYoullLearn: { type: [String], },
  subjectTopics: { type: [String], },
  subject: { type: String, },
});

const Curriculum = model('Curriculummodel', CurriculumSchema);
Curriculum.createIndexes();
export default Curriculum;