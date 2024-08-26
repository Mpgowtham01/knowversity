import freelancingFormDB from "../../model/freelancingModel/postForm.js";

export async function postFreelancing(req, res, next) {
  try {
    const data = req.body; 
    
    const details = {
      jobTitle: data.jobTitle,
      price: data.price,
      country: data.country,
      technology: data.technology,
      language: data.language,
      timingForPay: data.timingForPay,
      description: data.description,
    };

    const createFreelancing = await freelancingFormDB.create(details);
    res.status(201).json({
      message: "Freelancing details Created Successfully",
      data: createFreelancing,
    });
  } catch (err) {
    console.log(err);
    next();
  }
}
// GET
export async function FreelancingGet(req, res, next) {
  try {
    const getDomainlist = await freelancingFormDB.find();
    res.status(200).json({
      message: "get successfully",
      data: getDomainlist,
    });
  } catch (err) {
    next();
  }
}
//   put
export async function FreelancingPut(req, res, next) {
  try {
    const data = req.body;
    const id = req.params.id;
    const details = {
      jobTitle: data.jobTitle,
      price: data.price,
      country: data.country,
      technology: data.technology,
      language: data.language,
      timingForPay: data.timingForPay,
      description: data.description,
    };

    const updateDomain = await freelancingFormDB.findByIdAndUpdate(
      id,
      details,
      {
        new: true,
      }
    );
    res.status(200).json({
      message: "create successfully",
      data: updateDomain,
    });
  } catch (err) {
    next();
  }
}
//   del
export async function freelancingDelete(req, res, next) {
  try {
    const data = req.params;
    const domainId = data.id;
    const deleteDomain = await freelancingFormDB.findByIdAndDelete(domainId);
    res.status(200).json({
      message: "Deleted Successfully",
      data: deleteDomain,
    });
  } catch (error) {
    next();
  }
}
