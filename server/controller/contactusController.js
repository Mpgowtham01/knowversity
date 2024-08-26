import contactusDb from "../model/contactusModel.js"
 
export async function createcontactus(req, res, next){
    try{
        const data = req.body;
        const details = {
            name: data.name,
            email: data.email,
            phonenumber: data.phonenumber,
            message: data.message,
        };
        const createcontactus = await contactusDb.create(details);
        if (createcontactus){
            res.status(201).json({
                message: "contactus Created Successfully",
                data: createcontactus,
            });
        }
    } catch (err){
        console.log(err);
        next();
    }
}

export async function getcontactus(req, res, next){
    try{
        const getcontactus = await contactusDb.find();
        res.status(200).json({
            message:"get successfully",
            data:getcontactus,
        });
    } catch (err) {
        next();
    }
}