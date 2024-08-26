import BgvEductionVerificationDB from "../../../model/BgvModel/BgvVerification/BgvEducationModel.js";

export async function createVerification(req, res) {
    const Details = new BgvEductionVerificationDB({
        qualification: req.body.qualification,
        institute_name: req.body.institute_name,
        mark: req.body.mark,
        passYear: req.body.passYear,
        verification: req.body.verification
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

export async function getEduBgv(req, res, next) {
    try {
        const getBgvEmp = await BgvEductionVerificationDB.find();
        res.status(200).json({
            message: "Get Successfully",
            data: getBgvEmp,
        });
    } catch (error) {
        console.log(error);
        next();
    }
}