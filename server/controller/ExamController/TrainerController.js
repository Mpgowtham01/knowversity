import TrainerListDB from "../../model/Exam/TrainerModel.js";

export async function create(req, res, next) {
    try {
        const data = req.body;
        console.log("reqq", data);
        const details = {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phoneNumber: data.phoneNumber,
            Qualification: data.Qualification,
            Experience: data.Experience,
            Expertise: data.Expertise,
        };
        const createJobForm = await TrainerListDB.create(details);
        {
            res.status(201).json({
                message: "created Trainer successfully",
                data: createJobForm,
            });
        }
        console.log(createJobForm, "jhkjhkjhkj");
    } catch (err) {
        console.log(err);
        next();
    }
}


export async function find(req, res) {
    TrainerListDB.find()
        .then((exam) => {
            res.send(exam);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Error Occurred while retriving trainer information",
            });
        });
}

export async function findById(req, res) {
    const das = TrainerListDB.findById(req.params.id)
        .then((data) => {
            res.send(data);
            console.log(data);
        })
        .catch((error) =>
            res.status(404).send({ message: "Not found user with id " })
        );
    console.log(das.data, "lll");
}


export async function updateTrainer(req, res) {
    if (!req.body) {
        res.status(400).send("User Address not found")
    }
    const id = req.params.id
    TrainerListDB.findByIdAndUpdate(id, req.body, { new: true })
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
export async function deleteTrainer(req, res) {
    const id = req.params.id;

    TrainerListDB.findByIdAndDelete(id)
        .then((data) => {
            if (!data) {
                res
                    .status(404)
                    .send({ message: `Cannot Delete with id ${id}. Maybe id is wrong` });
            } else {
                res.send({
                    message: "Trainer was deleted successfully!",
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Could not delete Trainer with id=" + id,
            });
        });
}