import MaritalDb from "../../model/StudentModel/Marital.js"

export async function createMarital(req, res, next) {
  try {
    const data = req.body;
    const details = {
      Marital: data.Marital,
    };
      const createMarital = await MaritalDb.create(details);
      res.status(201).json({
        message: "Marital Created Successfully",
        data: createMarital,
      });
  } catch (err) {
    console.log(err);
    next();
  }
}
export async function getMaritalList(req, res, next) {
  try {
    const getMaritallist = await MaritalDb.find();
    res.status(200).json({
      message: "get successfully",
      data: getMaritallist,
    });
  } catch (err) {
    next();
  }
}

export async function updateMarital(req, res, next) {
  try {
    const data = req.body;
    const id = req.params.id;
    const details = {
      Marital: data.Marital,
    };
    const updateMarital = await MaritalDb.findByIdAndUpdate(id, details, {
      new: true,
    });
    res.status(200).json({
      message: "create successfully",
      data: updateMarital,
    });
  } catch (err) {
    next();
  }
}

export async function deleteMarital(req, res, next) {
  try {
    const data = req.params;
    const MaritalId = data.id;
    const deleteMarital = await MaritalDb.findByIdAndDelete(MaritalId);
    res.status(200).json({
      message: "Deleted Successfully",
      data: deleteMarital,
    });
  } catch (error) {
    next();
  }
}
