import AreaofinterestDb from "../../model/AdminModel/Areainterestmodel.js";

export async function createAreaofinterest(req, res, next) {
  try {
    const data = req.body;
    const details = {
      AreaofinterestName: data.AreaofinterestName,
      SubdomainId: data.SubdomainId,
    };
    const createAreaofinterest = await AreaofinterestDb.create(details);
    res.status(201).json({
      message: "Areaofinterest Created Successfully",
      data: createAreaofinterest,
    });
  } catch (err) {
    console.log(err);
    next();
  }
}
export async function getAreaofinterest(req, res, next) {
  try {
    const getAreaofinterest = await AreaofinterestDb.find();
    res.status(200).json({
      message: "get successfully",
      data: getAreaofinterest,
    });
  } catch (err) {
    next();
  }
}

export async function getAreaofinterestById(req, res, next) {
  try {
    const SubdomainId = req.params.subdomainId;
    console.log("object :>> ", SubdomainId);
    const getAreaofinterest = await AreaofinterestDb.find({
      subdomainId: SubdomainId,
    });
    res.status(200).json({
      message: "get successfully",
      data: getAreaofinterest,
    });
  } catch (err) {
    next();
  }
}

export async function updateAreaofinterest(req, res, next) {
  try {
    const data = req.body;
    const id = req.params.id;
    const details = {
      AreaofinterestName: data.AreaofinterestName,
    };
    const updateAreaofinterest = await AreaofinterestDb.findByIdAndUpdate(
      id,
      details,
      {
        new: true,
      }
    );
    res.status(200).json({
      message: "create successfully",
      data: updateAreaofinterest,
    });
  } catch (err) {
    next();
  }
}

export async function deleteAreaofinterest(req, res, next) {
  try {
    const data = req.params;
    const AreaofinterestId = data.id;
    const deleteAreaofinterest = await AreaofinterestDb.findByIdAndDelete(
      AreaofinterestId
    );
    res.status(200).json({
      message: "Deleted Successfully",
      data: deleteAreaofinterest,
    });
  } catch (error) {
    next();
  }
}
