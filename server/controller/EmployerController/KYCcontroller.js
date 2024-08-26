import KYCDb from "../../model/EmployerModel/KYCmodel.js"

export async function createKYC(req, res, next) {
  try {
    const data = req.body;
    const details = {
      panno: data.panno,
      address: data.address,
      PanCard: data.PanCard,
      AadharCard: data.AadharCard, 
      Gst: data.Gst, 
      AddressProof: data.AddressProof,
    };
      const createKYC = await KYCDb.create(details);
      res.status(201).json({
        message: "KYC Created Successfully",
        data: createKYC,
      });
  } catch (err) {
    console.log(err);
    next();
  }
}
export async function getKYCList(req, res, next) {
  try {
    const getKYClist = await KYCDb.find();
    res.status(200).json({
      message: "get successfully",
      data: getKYClist,
    });
  } catch (err) {
    next();
  }
}

export async function updateKYC(req, res, next) {
  try {
    const data = req.body;
    const id = req.params.id;
    const details = {
      panno: data.panno,
      address: data.address,
      PanCard: data.PanCard,
      AadharCard: data.AadharCard, 
      Gst: data.Gst,
      AddressProof: data.AddressProof,
    };
    const updateKYC = await KYCDb.findByIdAndUpdate(id, details, {
      new: true,
    });
    res.status(200).json({
      message: "create successfully",
      data: updateKYC,
    });
  } catch (err) {
    next();
  }
}

export async function deleteKYC(req, res, next) {
  try {
    const data = req.params;
    const KYCId = data.id;
    const deleteKYC = await KYCDb.findByIdAndDelete(KYCId);
    res.status(200).json({
      message: "Deleted Successfully",
      data: deleteKYC,
    });
  } catch (error) {
    next();
  }
}

export async function uploadImage(req, res, next) {
  try {
    console.log("req.file", req.file);
    const path = req.file.path;
    res.status(201).json({
      message: "added Successfully",
      path: path,
    });
  } catch (error) {
    next();
  }
}
