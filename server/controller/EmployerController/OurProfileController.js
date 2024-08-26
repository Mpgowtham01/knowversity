import ourProfileFormDb from "../../model/EmployerModel/OurProfileModal.js";

export async function createOurProfile(req, res, next) {
  try {
    const data = req.body;
    console.log("data", data);

    const details = {
      userId: data.userId,
      companyName: data.companyName,
      companyLogo: data.companyLogo,
      companyType: data.companyType,
      gst: data.gst,
      established: data.established,
      field: data.field,
      domain: data.domain,
      subDomain: data.subDomain,
      country: data.country,
      state: data.state,
      district: data.district,
      city: data.city,
      pincode: data.pincode,
      website: data.website,
      Linkedin: data.linkedin,
      facebook: data.facebook,
      youtube: data.youtube,
      address: data.address,
      companyLogo: data.companyLogo,
    };
    const exist = await ourProfileFormDb.findOne({
      companyName: data.companyName,
    });
    if (exist) {
      res.status(403).json({
        message: "record already exist",
        data: exist,
      });
    } else {
      const createOurProfile = await ourProfileFormDb.create(details);
      res.status(201).json({
        message: " created ourprofile successfully",
        data: createOurProfile,
      });
    }
  } catch (err) {
    console.log(err);
    next();
  }
}

export async function getAllProfile(req, res, next) {
  try {
    const getAllProfile = await ourProfileFormDb.find();
    res.status(200).json({
      message: "get successfully",
      data: getAllProfile,
    });
  } catch (err) {
    next();
  }
}
export async function getById(req, res, next) {
  const data = req.params;
  const value = data.id;
  try {
    const getAllProfile = await ourProfileFormDb.find({ userId: value });
    res.status(200).json({
      message: "get successfully",
      data: getAllProfile,
    });
  } catch (err) {
    next();
  }
}
export async function getListById(req, res, next) {
  const data = req.params;
  const value = data.id;
  console.log("id",value)
  try {
    const getAllProfile = await ourProfileFormDb.find({ userId: value });
    res.status(200).json({
      message: "get successfully",
      data: getAllProfile,
    });
  } catch (err) {
    next();
  }
}
// export async function getListById(req, res, next) {
//   try{

//   if (req.params.id) {
//     const id = req.params.id;
//     console.log(req.params.id, "getttt");
//   const profileData= await 
//     ourProfileFormDb
//       .findById(id)
//       res.status(200).json({
//         data:profileData,
//       })
//   }
//   else{
//     res.status(400).json({
//       message: "id parameter missing",
//     })
//   }
// }
// catch(e){
//   res.status(500)
// }
// }

// export async function getListById(req, res, next) {
// try {
//   const data = req.params;
//   console.log("data.id");
//   const requestId = data.id;
//   const requestgetoneid = await ourProfileFormDb.find({
//     jobId: requestId,
//   });
//   console.log("dfgsdfgsdg", requestgetoneid);
//   res.status(200).json({
//     message: "get Successfully",
//     data: requestgetoneid,
//   });
// } catch (e) {
//   next();
// }
// }

export async function updateOurProfile(req, res, next) {
  try {
    const data = req.body;
    const id = req.params.id;
    const details = {
      companyName: data.companyName,
      companyType: data.companyType,
      established: data.established,
      gst: data.gst,
      field: data.field,
      domain: data.domain,
      subDomain: data.subDomain,
      country: data.country,
      state: data.state,
      district: data.district,
      city: data.city,
      pincode: data.pincode,
      website: data.website,
      Linkedin: data.linkedin,
      facebook: data.facebook,
      youtube: data.youtube,
      address: data.address,
      companyLogo: data.companyLogo,
    };

    const updateOurProfile = await ourProfileFormDb.findByIdAndUpdate(
      id,
      details
    );
    res.status(200).json({
      message: "updated successfully",
      data: updateOurProfile,
    });
  } catch (err) {
    next();
  }
}

export async function deleteOurProfile(req, res, next) {
  try {
    // const data = req.params;
    const profileId = req.params.id;
    const profileDelete = await ourProfileFormDb.findByIdAndRemove(profileId);
    res.status(200).json({
      message: "Deleted successfully",
      data: profileDelete,
    });
  } catch (error) {
    next();
  }
}

export async function uploadImage(req, res, next) {
  try {
    console.log("req.file", req.file);
    const path = req.file.path;
    res.status(201).json({
      message: "added Successfully",
      path: path,
    });
  } catch (error) {
    next();
  }
}
