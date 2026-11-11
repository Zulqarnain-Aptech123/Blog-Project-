const express = require("express");
const multer = require("multer");
const uploadFile = require("./services/storage.service");
const blogModel = require("./models/blog.model");
const cors = require("cors");
// import {blogModel} from './models/blog.model'

const app = express();
app.use(cors());
app.use(express.json());

const upload = multer({ storage: multer.memoryStorage() });

app.post("/create-blog", upload.single("image"), async (req, res) => {
  console.log(req.body);
  console.log(req.file);
  // console.log(req.file.size);

  const file = await uploadFile(req.file.buffer);

  const post = await blogModel.create({
    title: req.body.title,
    description: req.body.description,
    image: file.url,
  });

  return res.status(201).json({
    message: "Blog created successfully",
    post,
  });
});

app.get("/blogs", async (req, res) => {
  const blogs = await blogModel.find();
  return res.status(200).json({
    message: "Blogs fetched successfully",
    blogs,
  });
});

module.exports = app;
