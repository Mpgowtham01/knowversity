import BlogDb from "../../model/StudentModel/Blog.js";

export async function createBlog(req, res, next) {
  try {
    const data = req.body;
    const details = {
      //   domainName: data.domainName,
      studentName: data.studentName,
      email: data.email,
      registerId: data.registerId,
      domain: data.domain,
      subdomain: data.subdomain,
      Image: data.Image,
      Tag: data.Tag,
      description: data.description,
      status: false,
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
export async function getBlogList(req, res, next) {
  try {
    const getBloglist = await BlogDb.find();
    res.status(200).json({
      message: "get successfully",
      data: getBloglist,
    });
  } catch (err) {
    next();
  }
}

export async function getListByStatus(req, res, next) {
  // employerSignUpDb.find()
  BlogDb.aggregate([{ $match: { status: true } }])
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.send(error);
    });
}

export async function getBlogById(req, res, next) {
  try {
    console.log("req.params", req.params, req.body);
    const data = req.params.id;
    const blogById = await BlogDb.findById(data);
    res.status(200).json({
      message: "get Successfully",
      data: blogById,
    });
    console.log(blogById, "personal");
  } catch (e) {
    next();
  }
}

export async function updateBlog(req, res, next) {
  try {
    const data = req.body;
    const id = req.params.id;
    const details = {
      //   domainName: data.domainName,
      domain: data.domain,
      subdomain: data.subdomain,
      Image: data.Image,
      Tag: data.Tag,
      description: data.description,
    };
    const updateBlog = await BlogDb.findByIdAndUpdate(id, details, {
      new: true,
    });
    res.status(200).json({
      message: "create successfully",
      data: updateBlog,
    });
  } catch (err) {
    next();
  }
}

export async function updateBlogById(req, res, next) {
  if (!req.body) {
    res.status(400).send("User Address not found");
  }
  const id = req.params.id;
  BlogDb.findByIdAndUpdate(id, req.body, { new: true })
    .then((data) => {
      if (!data) {
        res.status(400).send(`Can not found user Address with ${id}`);
      } else {
        res.send(data);
      }
    })
    .catch((error) => {
      res.status(500).send(error);
    });
}

export async function deleteBlog(req, res, next) {
  try {
    const data = req.params;
    const BlogId = data.id;
    const deleteBlog = await BlogDb.findByIdAndDelete(BlogId);
    res.status(200).json({
      message: "Deleted Successfully",
      data: deleteBlog,
    });
  } catch (error) {
    next();
  }
}

export async function uploadImage(req, res, next) {
  try {
    console.log("req.filedcftgvybhunj", req.file);
    const path = req.file.path;
    console.log("path", path);
    res.status(201).json({
      message: "added Successfully",
      path: path,
    });
  } catch (error) {
    next();
  }
}
