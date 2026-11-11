const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    image: String,
    title: String,
    description: String
})


const blogModel = mongoose.model("blogs", blogSchema);

module.exports = blogModel;