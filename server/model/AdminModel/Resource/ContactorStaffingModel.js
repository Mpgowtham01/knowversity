import mongoose from "mongoose";

const { Schema, model } = mongoose;

const ContactorStaffing = new Schema({
    AadharNumber:String,
    nameOftheOffice:String,
    CompanyAddress:String,
    CompanyLocation:String,
    CompanyName:String,
    dataOfJoing:String,
    Designation:String,
    EmployeeIdNumber:String,
    FromDate:String,
    Marital:String,
    Todate:String,
    address:String,
    alternativeNumber:String,
    cityValue:String,
    country:String,
    dateofBirth:String,
    districtValue:String,
    emailId:String,
    firstName:String,
    gender:String,
    lastName:String,
    panNumber:String,
    passportExpiryDate:String,
    passportIssueDate:String,
    passportNumber:String,
    phoneNumber:String,
    pincode:String,
    stateValue:String,
     
});

const ContactorStaffingDB = model("ResourceContactorStaffing",ContactorStaffing);
ContactorStaffingDB.createIndexes();

export default ContactorStaffingDB;
