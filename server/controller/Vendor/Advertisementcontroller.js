import AdvertisementDb from "../../model/Vendor/Advertisementmodal.js";

export async function createAdvertisement(req, res, next) {
  try {
    const data = req.body;
    const details = {
      companyName: data.companyName,
      websiteLink: data.websiteLink,
      advertisementTag: data.advertisementTag,
    };
    const createAdvertisement = await AdvertisementDb.create(details);
    res.status(201).json({
      message: "Advertisement Created Successfully",
      data: createAdvertisement,
    });
  } catch (err) {
    console.log(err);
    next();
  }
}

export async function getAdvertisement(req, res, next) {
  try {
    const getAdvertisement = await AdvertisementDb.find();
    res.status(200).json({
      message: "get successfully",
      data: getAdvertisement,
    });
  } catch (err) {
    next();
  }
}

export async function updateAdvertisement(req, res, next) {
  try {
    const data = req.body;
    const id = req.params.id;
    const details = {
      companyName: data.companyName,
      websiteLink: data.websiteLink,
      advertisementTag: data.advertisementTag,
    };
    const updateAdvertisement = await AdvertisementDb.findByIdAndUpdate(
      id,
      details,
      {
        new: true,
      }
    );
    res.status(200).json({
      message: "create successfully",
      data: updateAdvertisement,
    });
  } catch (err) {
    next();
  }
}

export async function deleteAdvertisement(req, res, next) {
  try {
    // const data = req.params;
    // const cityId = data.id;
    const deleteAdvertisement = await AdvertisementDb.findByIdAndDelete(cityId);
    res.status(200).json({
      message: "Deleted Successfully",
      data: deleteAdvertisement,
    });
  } catch (error) {
    next();
  }
}
