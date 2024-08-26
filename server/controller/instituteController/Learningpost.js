import institutelearningpostDb from "../../model/instituteModel/Learningpost.js";

export async function learningCreate(req, res, next) {
    try {
        const data = req.body;
        const learningDetail = {
            learningFile: data.learningFile,
            companyName: data.companyName,
            course: data.course,
            courseDuration: data.courseDuration,
            courseFees: data.courseFees,
        };
        const learningCreate = await institutelearningpostDb.create(learningDetail);
        res.status(201).json({
            message: "created Successfully",
            data: learningCreate,
        });
    } catch (err) {
        console.log(err);
        next();
    }
}

export async function getAlllearning(req, res, next) {
    try {
        const getAlllearning = await institutelearningpostDb.find();
        res.status(200).json({
            message: "Get Succesfully",
            data: getAlllearning,
        });
    } catch (error) {
        next();
    }
}

export async function learningUpdate(req, res, next) {
    try {
        const data = req.body;
        const id = req.params.id;
        const learningDetail = {
            learningFile: data.learningFile,
            companyName: data.companyName,
            course: data.course,
            courseDuration: data.courseDuration,
            courseFees: data.courseFees,
        };
        const learningUpdate = await institutelearningpostDb.findByIdAndUpdate(
            id,
            learningDetail
        );
        res.status(200).json({
            message: "update Successfully",
            data: learningUpdate,
        });
    } catch (err) {
        console.log(err);
        next();
    }
}

export async function learningDelete(req, res, next) {
    try {
        const learningId = req.params.id;
        const learningDelete = await institutelearningpostDb.findByIdAndDelete(
            learningId
        );
        res.status(200).json({
            message: "Deleted successfully",
            data: learningDelete,

        });
    } catch (err) {
        console.log(err);
        next();
    }
}

export async function uploadImage(req, res, next) {
    try {
        console.log("req.file", req.file);
        const path = req.file.path;
        res.status(201).json({
            message: "added Succesfully",
            path: path,
        });
    } catch (error) {
        next();
    }
}