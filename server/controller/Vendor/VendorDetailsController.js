import VendorDetailsDb from "../../model/Vendor/VendorDetailsModel.js";

export async function createVendorDetails(req, res, next) {
  try {
    const data = req.body;
    const details = {
        Name: data.Name,
        email:  data.email,
        mobileNumber: data.mobileNumber,
        address: data.address,
        businessName: data.businessName,
        country: data.country,
        state: data.state,
        district: data.district,
        city: data.city,
    };
    const createVendorDetails = await VendorDetailsDb.create(details);
    res.status(201).json({
      message: "VendorDetails Created Successfully",
      data: createVendorDetails,
    });
  } catch (err) {
    console.log(err);
    next();
  }
}