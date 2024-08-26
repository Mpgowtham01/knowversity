import scheduleInterviewDb from "../../model/EmployerModel/ScheduleInterviewModel.js";

export async function createInterview(req, res, next) {
  try {
    const data = req.body;
    const details = {
      Name: data.Name,
      Date: data.Date,
      Time: data.Time,
      Mode: data.Mode,
      Role: data.Role,
      AssignTo: data.AssignTo,
      userId: data.userId,
    };
    const createInterview = await scheduleInterviewDb.create(details);
    {
      res.status(201).json({
        message: "created Job successfully",
        data: createInterview,
      });
    }
  } catch (err) {
    console.log(err);
    next();
  }
}

export async function getInterview(req, res, next) {
  try {
    const getInterview = await scheduleInterviewDb.find();
    res.status(200).json({
      message: "Get successfully",
      data: getInterview,
    });
  } catch (err) {
    next();
  }
}

export async function getOneDetails(req, res) {
  try {
    const data = req.params;
    const employeeId = data.id;
    console.log("employeeId", employeeId);
    const getoneid = await scheduleInterviewDb.find({ userId: employeeId });
    res.status(200).json({
      message: "get Successfully",
      data: getoneid,
    });
  } catch (e) {
    throw e;
  }
}
export async function updateInterview(req, res, next) {
  try {
    const data = req.body;
    const id = req.params.id;
    const details = {
      Name: data.Name,
      Date: data.Date,
      Time: data.Time,
      Mode: data.Mode,
      Role: data.Role,
      AssignTo: data.AssignTo,
    };
    const updateInterview = await scheduleInterviewDb.findByIdAndUpdate(
      id,
      details
    );
    res.status(200).json({
      message: "updated successfully",
      data: updateInterview,
    });
  } catch (err) {
    next();
  }
}

export async function deleteInterview(req, res, next) {
  try {
    const interviewId = req.params.id;
    const interviewDelete = await scheduleInterviewDb.findByIdAndDelete(
      interviewId
    );
    res.status(200).json({
      message: "deleted successfully",
      data: interviewDelete,
    });
  } catch (error) {
    next();
  }
}
