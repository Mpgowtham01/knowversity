import BgvPoliceVerificationDB from "../../../model/BgvModel/BgvVerification/BgvPoliceModel.js"


export async function createPoliceVerification(req, res) {
    const Details = new BgvPoliceVerificationDB({
        criminal_record: req.body.criminal_record,
        status: req.body.status,
        verification: req.body.verification,
        remark: req.body.remark
    })
    Details.save(Details)
        .then((data) => {
            res.status(200).send(data)
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message
            })
        })
}

export async function getPoliceBgv(req, res, next) {
    try {
        const getBgvPolice = await BgvPoliceVerificationDB.find();
        res.status(200).json({
            message: "Get Successfully",
            data: getBgvPolice,
        });
    } catch (error) {
        console.log(error);
        next();
    }
}