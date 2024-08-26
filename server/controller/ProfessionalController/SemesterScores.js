import SemesterScoreDb from "../../model/ProfessionalModal/SemesterScores.js";

export async function Score(req, res, next) {
  try {
    const data = req.body;
    const details = {
        semesterPercentage: data.semesterPercentage,
        CGPA: data.CGPA,
    };
    const createScore = await SemesterScoreDb.create(details);
    if (createScore) {
      res.status(201).json({
        message: "Score Created Successfully",
        data: createScore,
      });
    }
  } catch (err) {
    console.log(err);
    next();
  }
}
export async function getScore(req, res, next) {
  try {
    const getScoret = await SemesterScoreDb.find();
    res.status(200).json({
      message: "get successfully",
      data: getScore,
    });
  } catch (err) {
    next();
  }
}

export async function updateScore(req, res, next) {
  try {
    const data = req.body;
    const id = req.params.id;
    const details = {
        semesterPercentage: data.semesterPercentage,
        CGPA: data.CGPA,
    };
    const updateScore = await SemesterScoreDb.findByIdAndUpdate(id, details, {
      new: true,
    });
    res.status(200).json({
      message: "Updated successfully",
      data: updateScore,
    });
  } catch (err) {
    next();
  }
}

export async function deleteScore(req, res, next) {
  try {
    const data = req.params;
    const ScoreId = data.id;
    const ScoreDelete = await SemesterScoreDb.findByIdAndDelete(ScoreId);
    res.status(200).json({
      message: "Deleted Successfully",
      data: ScoreDelete,
    });
  } catch (error) {
    next();
  }
}

