
const fs = require('fs')
const CreatePost = require("../models/CreatePost");
const categoryM=require('../models/Category')




// Create New Post
const newcreatepost =  async (req, res) => {
    const { title, description,image, category, detail, status } = req.body;
    // console.log(req.body)
console.log(req.body)

    try {
        const extension = req.file.mimetype.split("/")[1];
        if (extension == "png" || extension == "jpg" || extension == "jpeg" || extension == "avif") {
            const filName = req.file.filename + "." + extension;
            req.body.image = filName;

            fs.rename(req.file.path, `upload/${filName}`, () => {
                console.log("file Uploaded with name")
            });

        } else {
            fs.unlink(req.file.path, () => {
                console.log("file is deleted")
            })
        }



        console.log(req.body.image)

        // create user
        await CreatePost.create({
            title: title, description: description, category: category, detail:detail, image: req.body.image, status: status
        })


        // return response
        res.status(201).json({
            status: "success",
            message: "New Psot successfully Added"


        })

    } catch (error) {
        if (error.name === 'ValidationError') {
            // Mongoose validation error
            const errors = {};
            for (const field in error.errors) {
                errors[field] = error.errors[field].message;
            }
            res.status(200).json({
                status: false,
                errors: errors
            });
        } else {
            // Other types of errors
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}


// Get All Post API

const GetsAllPosts =  async (req, res) => {
    const query ={}
    const category = req.params.category;

    if(category !== undefined){
        query['category'] = category;
    }
    try {
        const allpost = await CreatePost.find(query).sort({ createdAt: -1 })
        return res.status(200).json({
            status: true,
            allpost: allpost
        })
    } catch (error) {
        return res.status(404).json({
            status: false,
            message: error.message,
            allpost:allpost
        })
    }
}

// Get All Post by User_ID API

const GetPostById = ("/getpostbyid", async (req, res) => {
    const id = req.params.id
    try {
        const createpost = await CreatePost.findById(id);
        return res.status(200).json({
            status: true,
            createpost: createpost
        })
    } catch (error) {
        return res.status(404).json({
            status: false,
            message: error.message
        })
    }
})


const getCategories = async (req, res) => {

    try {
        const categories = await categoryM.find();
        return res.json(categories);
    } catch (error) {
        console.log(error.message)
    }
};





module.exports = {
    newcreatepost,
    GetsAllPosts,
    GetPostById,
    getCategories
}