import mongoose from "mongoose";

const { Schema, model } = mongoose;

const CompanyApprovedSchema = new Schema({
  companyName: String,
  companyLogo: String,
});

CompanyApprovedSchema.set("autoIndex", true);

const AdminCompanyApproved = model(
  "CompanyApprovedFields",
  CompanyApprovedSchema
);
AdminCompanyApproved.createIndexes();

export default AdminCompanyApproved;
