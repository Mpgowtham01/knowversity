import empBgvDB from "../../model/BgvModel/EmployerBgvModel.js";

export async function createEmp(req, res) {
    if (!req.body) {
        res.status(400).send("Content cannot be empty")
        return
    }
    // try {
    // const data = req.body
    const empDetails = new empBgvDB({
        name: req.body.name,
        lastname: req.body.lastname,
        dob: req.body.dob,
        gender: req.body.gender,
        email: req.body.email,
        panNo: req.body.panNO,
        adhaar: req.body.adhaar,
        country: req.body.country,
        state: req.body.state,
        city: req.body.city,
        educationVerification: req.body.educationVerification,
        employerVerification: req.body.employerVerification,
        policeVerification: req.body.policeVerification,

        permanent_address: req.body.permanent_address,
        Verification: req.body.Verification

    })
    //     const createEmp = await empBgvDB.create(empDetails);
    //     {
    //         res.status(200).json({
    //             message: "created Successfully",
    //            data: createEmp,
    //         })
    //     }
    // } catch (err) {
    //     console.log(err)
    //     next()
    // }
    empDetails.save(empDetails)
        .then(data => {
            res.send(data)
        })
        .catch(error => {
            res.status(500).send({
                message: error.message
            })
        })

}

export async function getCreateEmp(req, res, next) {
    try {
        const getEmp = await empBgvDB.find();
        res.status(200).json({
            message: "Get Successfully",
            data: getEmp,
        });
    } catch (error) {
        console.log(error);
        next();
    }
}


export async function getEmpByid(req, res, next) {
    if (req.params.id) {
        const id = req.params.id
        console.log(req.params.id, "getttt");
        empBgvDB.findById(id
        ).then(data => {
            if (!data) {
                res.status(400).send("User not found")
            } else {
                res.send(data)
            }
        })
            .catch(err => {
                res.status(500).send(err)
            })
    }
}

export async function updateEmp(req, res, next) {
    if (!req.body) {
        res.status(400).send("User Address not found")
    }
    const id = req.params.id
    empBgvDB.findByIdAndUpdate(id, req.body, { new: true })

        .then(data => {
            if (!data) {
                res.status(400).send(`Can not found user Address with ${id}`)
            } else {
                res.send(data)
            }
        })
        .catch(error => {
            res.status(500).send(error)
        })
}

export async function deleteBgvEmp(req, res, next) {
    try {
        const deleteEmpid = req.params.id;
        const createEmpDelete = await empBgvDB.findByIdAndDelete(
            deleteEmpid
        );
        res.status(200).json({
            message: "deleted successfully",
            data: createEmpDelete,
        });
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
        next();
    }
    // const id = req.params.id

    // empBgvDB.findByIdAndDelete(id)
    //     .then(data => {
    //         if (!data) {
    //             res.status(400).send(`User not Found with ${id}`)
    //         } else {
    //             res.send("user deleted successfully")
    //         }
    //     })
    //     .catch(error => {
    //         res.status(500).send(error)
    //     })

}