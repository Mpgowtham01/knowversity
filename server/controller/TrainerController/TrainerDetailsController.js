import ProfessionalInfoDb from "../../model/TrainerModel/ProfessionalDetailsModel.js";

export const addProfessionalInfo = async (req, res) => {
  const { experience, skills, currentJob, expectedSalary, noticePeriod, reasonForLeaving, interestedInTeaching } = req.body;
  
  const userId = req.user.id; // Assume the user ID is extracted from a middleware that verifies the JWT token

  try {
    // Check if professional details already exist
    let professionalDetails = await  ProfessionalInfoDb .findOne({ userId });

    if (professionalDetails) {
      // Update the existing professional details
      professionalDetails.experience = experience;
      professionalDetails.skills = skills;
      professionalDetails.currentJob = currentJob;
      professionalDetails.expectedSalary = expectedSalary;
      professionalDetails.noticePeriod = noticePeriod;
      professionalDetails.reasonForLeaving = reasonForLeaving;
      professionalDetails.interestedInTeaching = interestedInTeaching;
    } else {
      // Create new professional details
      professionalDetails = new  ProfessionalInfoDb({
        userId,
        experience,
        skills,
        currentJob,
        expectedSalary,
        noticePeriod,
        reasonForLeaving,
        interestedInTeaching,
      });
    }

    await professionalDetails.save();

    res.status(201).json({ message: "Professional details saved", data: professionalDetails });
  } catch (error) {
    console.error("Error saving professional details:", error);
    res.status(500).json({ message: "Server error" });
  }
};


export const getProfessionalInfo = async (req, res) => {
  const userId = req.user.id; // Assume the user ID is extracted from a middleware that verifies the JWT token

  try {
    const professionalDetails = await ProfessionalInfoDb.findOne({ userId });

    if (!professionalDetails) {
      return res.status(404).json({ message: "Professional details not found" });
    }

    res.status(200).json({ data: professionalDetails });
  } catch (error) {
    console.error("Error fetching professional details:", error);
    res.status(500).json({ message: "Server error" });
  }
};