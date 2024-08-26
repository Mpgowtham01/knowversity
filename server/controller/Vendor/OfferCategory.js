import OfferDb from "../../model/Vendor/OfferModel.js";

export async function createOffer(req, res, next) {
  try {
    const data = req.body;
    const details = {
      // Photo: data.Photo,
      Promocode: data.Promocode,
      Category: data.Category,
      StartDate: data.StartDate,
      EndDate: data.EndDate,
      Description: data.Description,
    };
    const createOffer = await OfferDb.create(details);
    res.status(201).json({
      message: "Offer Created Successfully",
      data: createOffer,
    });
  } catch (err) {
    console.log("ln23");
    console.log(err);
    next();
  }
}

export async function getOffer(req, res, next) {
  try {
    const getOffer = await OfferDb.find();
    res.status(200).json({
      message: "get successfully",
      data: getOffer,
    });
  } catch (err) {
    next();
  }
}

export async function updateOffer(req, res, next) {
  try {
    const data = req.body;
    const id = req.params.id;
    const details = {
      Photo: data.Photo,
      Promocode: data.Promocode,
      Category: data.Category,
      StartDate: data.StartDate,
      EndDate: data.EndDate,
      Description: data.Description,
    };
    const updateOffer = await OfferDb.findByIdAndUpdate(id, details, {
      new: true,
    });
    res.status(200).json({
      message: "create successfully",
      data: updateOffer,
    });
  } catch (err) {
    next();
  }
}

export async function deleteOffer(req, res, next) {
  try {
    const deleteOffer = await OfferDb.findByIdAndDelete(cityId);
    res.status(200).json({
      message: "Deleted Successfully",
      data: deleteOffer,
    });
  } catch (error) {
    next();
  }
}
