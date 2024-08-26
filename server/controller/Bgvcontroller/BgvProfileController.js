import bgvProfileDB from "../../model/BgvModel/BgvProfileModel.js";

export async function createBgvProfile(req, res) {
    if (!req.body) {
        res.status(400).send("content can not be empty")
        return
    }
    const bgvProfileDetails = new bgvProfileDB({
        companyName: req.body.companyName,
        companyType: req.body.companyType,
        email: req.body.email,
        EstablishedYear: req.body.EstablishedYear,
        domain: req.body.domain,
        subDomain: req.body.subDomain,
        services: req.body.services,
        country: req.body.country,
        state: req.body.state,
        district: req.body.district,
        city: req.body.city,
        discription: req.body.discription,
        pincode: req.body.pincode,
        address: req.body.address,
        linkedIn: req.body.linkedIn,
        facebook: req.body.facebook,
        youTube: req.body.youTube,
        website: req.body.website,
        twitter: req.body.twitter,

    })
    bgvProfileDetails.save(bgvProfileDetails)
        .then((data) => {
            res.status(200).send(data)
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message
            })
        })
}

export async function getBgv(req, res, next) {
    try {
        const getBgv = await bgvProfileDB.find();
        res.status(200).json({
            message: "Get Successfully",
            data: getBgv,
        });
    } catch (error) {
        console.log(error);
        next();
    }
}
export async function getBgvByid(req, res, next) {
    if (req.params.id) {
        const id = req.params.id
        console.log(req.params.id, "getttt");
        bgvProfileDB.findById(id
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

export async function updateBgv(req, res) {
    if (!req.body) {
        res.status(400).send("User Address not found")
    }
    const id = req.params.id
    bgvProfileDB.findByIdAndUpdate(id, req.body, { new: true })
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

export async function deleteBgv(req, res, next) {
    const id = req.params.id;
    console.log(req.params.id, "sdfsdgf")
    bgvProfileDB.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(400).send(`User not Found with ${id}`)
            } else {
                res.send("user deleted successfully")
            }
        })
        .catch(error => {
            res.status(500).send(error)
        })
    // try {
    //     const id = req.params.id;
    //     const createEmpDelete = await bgvProfileDB.findByIdAndDelete(id);
    //     console.log(req.params.id, "afasdf")
    //     res.status(200).json({
    //         message: "deleted successfully",
    //         data: createEmpDelete,
    //     });
    // } catch (error) {
    //     res.status(500).send({
    //         message: error.message
    //     })
    //     next();
    // }
}