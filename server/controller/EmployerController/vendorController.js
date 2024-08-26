// import vendorFormDb from "../../model/EmployerModel/vendorModel.js";

// export async function vendorForm(req, res, next) {
//   try {
//     const data = req.body;
//     const details = {
//         companyName:data.companyName,
//         website:data.website,
//         linkedin:data.linkedin,
//         coFounderFirstName:data.coFounderFirstName,
//         coFounderLastName:data.coFounderLastName,
//         contactFirstName:data.contactFirstName,
//         contactLastName:data.contactLastName,
//         phone:data.phone,
//         email:data.email,
//         employeeStrength:data.employeeStrength,
//     };
//     const vendorForm = await vendorFormDb.create(details);
//     {
//       res.status(201).json({
//         message: "created Job successfully",
//         data: vendorForm,
//       });
//     }
//   } catch (err) {
//     console.log(err);
//     next();
//   }
// }

// export async function getVendor(req, res, next) {
//   try {
//     const getVendor = await VendorFormDb.find();
//     res.status(200).json({
//       message: "Get successfully",
//       data: getVendor,
//     });
//   } catch (err) {
//     next();
//   }
// }

// export async function getone(req, res, next) {
//   try {
//     const data = req.params;
//     console.log("data");
//     const requestId = data.id;
//     const requestgetoneid = await VendorFormDb.find({
//       jobId: requestId,
//     });
//     console.log("dfgsdfgsdg", requestgetoneid);
//     res.status(200).json({
//       message: "get Successfully",
//       data: requestgetoneid,
//     });
//   } catch (e) {
//     next();
//   }
// }

// export async function updateVendor(req, res, next) {
//   try {
//     const data = req.body;
//     const id = req.params.id;
//     const details = {
//         companyName:data.companyName,
//         website:data.website,
//         linkedin:data.linkedin,
//         coFounderFirstName:data.coFounderFirstName,
//         coFounderLastName:data.coFounderLastName,
//         contactFirstName:data.contactFirstName,
//         contactLastName:data.contactLastName,
//         phone:data.phone,
//         email:data.email,
//         employeeStrength:data.employeeStrength,
//     };
//     const updateVendor = await vendorFormDb.findByIdAndUpdate(
//       id,
//       details
//     );
//     res.status(200).json({
//       message: "updated successfully",
//       data: updateVendor,
//     });
//   } catch (err) {
//     next();
//   }
// }

// export async function deleteVendor(req, res, next) {
//   try {
//     const vendorId = req.params.id;
//     const vendorDelete = await vendorFormDb.findByIdAndDelete(
//       createJobId
//     );
//     res.status(200).json({
//       message: "deleted successfully",
//       data: createJobDelete,
//     });
//   } catch (error) {
//     next();
//   }
// }
