import mongoose from "mongoose"

const { Schema, model } = mongoose

const BatchList = new Schema({
    course: {
        type: String
    },
    Description: {
        type: String
    },
    Technology: [{
        type: String
    }],
    startDate: {
        type: String
    },
    endDate: {
        type: String
    },
    courseMode: {
        type: String
    },
    batchNo: {
    uppercase:true,
        type: String
    },
    Trainer: {
        type: String
    },
    frameWork: {
        type: String
    },
    Actualfees: {
        type: String
    },
    Offerfees: {
        type: String
    },
    language: {
        type: String
    },
    lastDate: {
        type: String
    },
    batchSchedule: {
        type: String
    },
    startTime: {
        type: String
    },
    endTime: {
        type: String
    },
    country: {
        type: String
    },
    state: {
        type: String
    },
    district: {
        type: String
    },
    city: {
        type: String
    },
    Course: String,
    examTechnology: [String],
    NumberOfWeeks: String,
  
    weeks: [
      {
        Week: String,
        limit: [{ Tech: String, Count: String }],
  
        time: String,
      },
    ],
},
    { timestamps: true },
)

const BatchListDB = model("BatchList", BatchList)
export default BatchListDB