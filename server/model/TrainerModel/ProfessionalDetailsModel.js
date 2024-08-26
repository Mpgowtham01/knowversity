// models/Trainer.js
import mongoose from 'mongoose';

const TrainerSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Userdb", // This references the existing Userdb collection
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  skills: {
    type: [String],
    required: true,
  },
  currentJob: {
    type: String,
    required: true,
  },
  expectedSalary: {
    type: Number,
    required: true,
  },
  noticePeriod: {
    type: String,
    required: true,
  },
  reasonForLeaving: {
    type: String,
  },
  interestedInTeaching: {
    type: Boolean,
  },
});

const ProfessionalInfoDb = mongoose.model('TrainerProfessionalDetail', TrainerSchema);
export default ProfessionalInfoDb;
