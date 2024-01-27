const  createpostmodel = require('../models/CreatePost')
const fs = require('fs')
const Category = require("../models/Category")


// Create New Category
const CreateNewCategory = async (req, res) => {
    const { title } = req.body;
   


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
        await Category.create({
            title: title,  image: req.body.image
        })


        // return response
        res.status(201).json({
            status: "success",
            message: "New Category successfully Added"


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

// Get All Comment API

const getAllCategory =  async (req, res) => {
console.log(req.body)

    try {
        const allcategory = await createpostmodel.find({Category:"computer"});
        return res.status(200).json({
            status: true,
            allcategory: allcategory
        })
    } catch (error) {
        return res.status(404).json({
            status: false,
            message: error.message
        })
    }
}



module.exports = {
   
    getAllCategory,
    CreateNewCategory
}