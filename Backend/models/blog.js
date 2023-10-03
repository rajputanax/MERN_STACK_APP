const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        maxLength:50
    },
    description:{
        type:String,
        required:true,
        maxLength:255
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});

const blogModel = mongoose.model("Blogs", blogSchema);

module.exports = blogModel