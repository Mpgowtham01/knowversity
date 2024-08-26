import DetailsDb from "../../model/ProfessionalModal/ProfDetails.js";

export async function Details(req, res, next) {
  try {
    const data = req.body;
    const details = {
      companyName: data.companyName,
      desgination: data.desgination,
      fromDate: data.fromDate,
      toDate: data.toDate,
      currentSalary: data.currentSalary,
      expectedSalary: data.expectedSalary,
      noticePeriod: data.noticePeriod,
      changeJob: data.changeJob,

    };
    const createDetails = await DetailsDb.create(details);
    if (createDetails) {
      res.status(201).json({
        message: "Details Created Successfully",
        data: createDetails,
      });
    }
  } catch (err) {
    console.log(err);
    next();
  }
}
export async function getDetails(req, res, next) {
  try {
    const getDetailslist = await DetailsDb.find();
    res.status(200).json({
      message: "get successfully",
      data: getDetailslist,
    });
  } catch (err) {
    next();
  }
}

export async function updateDetails(req, res, next) {
  try {
    const data = req.body;
    const id = req.params.id;
    const details = {
        companyName: data.companyName,
        desgination: data.desgination,
        fromDate: data.fromDate,
        toDate: data.toDate,
        currentSalary: data.currentSalary,
        expectedSalary: data.expectedSalary,
        noticePeriod: data.noticePeriod,
        changeJob: data.changeJob,
    };
    const updateDetails = await DetailsDb.findByIdAndUpdate(id, details, {
      new: true,
    });
    res.status(200).json({
      message: "Updated successfully",
      data: updateDetails,
    });
  } catch (err) {
    next();
  }
}

export async function deleteDetails(req, res, next) {
  try {
    const data = req.params;
    const DetailsId = data.id;
    const DetailsDelete = await DetailsDb.findByIdAndDelete(DetailsId);
    res.status(200).json({
      message: "Deleted Successfully",
      data: DetailsDelete,
    });
  } catch (error) {
    next();
  }
}

