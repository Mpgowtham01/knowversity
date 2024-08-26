import BlogDb from "../../model/AdminModel/BlogModel.js";

export async function createBlog(req, res, next) {
  try {
    const data = req.body;
    const details = {
      Title: data.Title,
      Description: data.Description,
      Image: data.Image,
    };
    const createBlog = await BlogDb.create(details);
    res.status(201).json({
      message: "Blog Created Successfully",
      data: createBlog,
    });
  } catch (err) {
    console.log(err);
    next();
  }
}
export async function getBlog(req, res, next) {
  try {
    const getBlog = await BlogDb.find();
    res.status(200).json({
      message: "get successfully",
      data: getBlog,
    });
  } catch (err) {
    next();
  }
}

export async function getBlogById(req, res, next) {
  try {
    const SubdomainId = req.params.subdomainId;
    console.log("object :>> ", SubdomainId);
    const getBlog = await BlogDb.find({
      subdomainId: SubdomainId,
    });
    res.status(200).json({
      message: "get successfully",
      data: getBlog,
    });
  } catch (err) {
    next();
  }
}

export async function updateBlog(req, res, next) {
  try {
    const data = req.body;
    const id = req.params.id;
    const details = {
      Title: data.Title,
      Description: data.Description,
      Image: data.Image,
    };
    const updateBlog = await BlogDb.findByIdAndUpdate(
      id,
      details,
      {
        new: true,
      }
    );
    res.status(200).json({
      message: "create successfully",
      data: updateBlog,
    });
  } catch (err) {
    next();
  }
}

export async function deleteBlog(req, res, next) {
  try {
    const data = req.params;
    const BlogId = data.id;
    const deleteBlog = await BlogDb.findByIdAndDelete(
      BlogId
    );
    res.status(200).json({
      message: "Deleted Successfully",
      data: deleteBlog,
    });
  } catch (error) {
    next();
  }
}
