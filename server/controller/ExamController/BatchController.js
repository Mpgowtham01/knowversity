import BatchListDB from "../../model/Exam/BatchModel.js";

export async function create(req, res) {
    try {
        const checkBatchNo = await BatchListDB.findOne({ batchNo: req.body.batchNo })
        if (checkBatchNo) {
            res.status(400).send({ message: "Batch No. Already Exists" })
            return
        }
        const data = req.body
        console.log("data", data)
        const details = {
            course: data.course,
            Description:data.Description,
            Technology: data.Technology,
            startDate: data.startDate,
            endDate: data.endDate,
            language:data.language,
            courseMode: data.courseMode,
            batchNo: data.batchNo,
            Trainer: data.Trainer,
            frameWork: data.frameWork,
            Actualfees: data.Actualfees,
            Offerfees: data.Offerfees,
            country: data.country,
            state: data.state,
            district: data.district,
            city: data.city,
            // Exam pattern
            Course: data.Course,
            examTechnology: data.examTechnology,
            NumberOfWeeks: data.NumberOfWeeks,
            weeks: data.weeks,

        };
        const createDetails = await BatchListDB.create(details);
        {
            res.status(200).json({
                message: "created Batch successfully",
                data: createDetails
            })
        }
    } catch (error) {

        res.status(500).send({
            message: error.message
        })
    }
}


export async function find(req, res) {
    BatchListDB.find()
        .then((exam) => {
            res.send(exam);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Error Occurred while retriving Course information",
            });
        });
}

export async function findById(req, res) {
    const das = BatchListDB.findById(req.params.id)
        .then((data) => {
            res.send(data);
            console.log(data);
        })
        .catch((error) =>
            res.status(404).send({ message: "Not found user with id " })
        );
    console.log(das.data, "lll");
}


export async function batchupdate(req, res) {
    if (!req.body) {
        res.status(400).send("User Address not found")
    }
    const id = req.params.id
    BatchListDB.findByIdAndUpdate(id, req.body, { new: true })
        .then(data => {
            if (!data) {
                res.status(400).send(`Can not found user Address with ${id}`)
            } else {
                res.send(data)
            }
        })
        .catch(error => {
            res.status(500).send(
                ` user not found ${id}`
            )
        })
}


// Delete a Tech with specified  id in the request
export async function Batchdelete(req, res) {
    const id = req.params.id;

    BatchListDB.findByIdAndDelete(id)
        .then((data) => {
            if (!data) {
                res
                    .status(404)
                    .send({ message: `Cannot Delete with id ${id}. Maybe id is wrong` });
            } else {
                res.send({
                    message: "Batch was deleted successfully!",
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Could not delete Course with id=" + id,
            });
        });
}