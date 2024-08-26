import AutonomousDb from "../../model/CollegeModal/AutonomousModel.js";

export async function AutonomousCreate(req, res, next) {
  try {
    const data = req.body;
    const details = {
      Autonomous: data.Autonomous,
    };
    console.log("data.name", data);

    const AutonomousCreate = await AutonomousDb.create(details);
    res.status(201).json({
      message: "Autonomous Created Successfully",
      data: AutonomousCreate,
    });
  } catch (err) {
    console.log(err);
    next();
  }
}
export async function getAutonomous(req, res, next) {
  try {
    const getAutonomous = await AutonomousDb.find();
    res.status(200).json({
      message: "get successfully",
      data: getAutonomous,
    });
  } catch (err) {
    next();
  }
}

export async function AutonomousUpdate(req, res, next) {
  try {
    const data = req.body;
    const id = req.params.id;
    const details = {
        Autonomous: data.Autonomous,
    };
    const AutonomousUpdate = await AutonomousDb.findByIdAndUpdate(id, details, {
      new: true,
    });
    res.status(200).json({
      message: "create successfully",
      data: AutonomousUpdate,
    });
  } catch (err) {
    next();
  }
}

export async function deleteAutonomous(req, res, next) {
  try {
    const data = req.params;
    const AutonomousId = data.id;
    const deleteAutonomous = await AutonomousDb.findByIdAndDelete(AutonomousId);
    res.status(200).json({
      message: "Deleted Successfully",
      data: deleteAutonomous,
    });
  } catch (error) {
    next();
  }
}
