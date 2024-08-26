import BgvEmployerVerificationDB from "../../../model/BgvModel/BgvVerification/BgvEmployerModel.js"

export async function createVerification(req, res) {
    const Details = new BgvEmployerVerificationDB({
        company_name: req.body.company_name,
        jobTitile: req.body.jobTitile,
        experience: req.body.experience,
        year: req.body.year,
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

export async function getEmpBgv(req, res, next) {
    try {
        const getBgvEmp = await BgvEmployerVerificationDB.find();
        res.status(200).json({
            message: "Get Successfully",
            data: getBgvEmp,
        });
    } catch (error) {
        console.log(error);
        next();
    }
}