
const multer = require("multer")
const upload = multer({ dest: "upload/" })
const path = require("path")
const express = require('express')
const app = express()
const fs = require('fs')
const mongoose = require("mongoose");
const UserModel = require("./modules/UserModel")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secretKey = "23sf&%T23423sdfasfdaxcvaxfgsadfsdf#O#d;((23234))";

const port = 4000;

// Middle ware
app.use(express.json())
app.use(express.static(path.join(__dirname, "upload")));

// user registration
app.post("/signup", upload.single('image'), async (req, res) => {
    // const { name, email, password, image } = req.body;

    try {
        const extension = req.file.mimetype.split("/")[1];
        if (extension == "png" || extension == "jpg" || extension == "jpeg" || extension == "avif") {
            const filName = req.file.filename + "." + extension;
            req.body.image = filName;
            console.log(filName)
            fs.rename(req.file.path, `upload/${filName}`, () => {
                console.log("file Uploaded with name")
            });

        } else {
            fs.unlink(req.file.path, () => {
                console.log("file is deleted")
            })
        }
        const { name, email, password, image } = req.body;
        // check is user already registered 
        const alreadyUser = await UserModel.findOne({ email: email });
        if (alreadyUser !== null) {
            return res.status(200).json({
                status: "failed",
                message: "Email already registered"
            });
        }

        // password hashed
        const hashed = await bcrypt.hash(password, 10);

        // create user
        const newUser = await UserModel.create({
            name: name, email: email, password: hashed, image: image
        })

        // generate token?
        const token = jwt.sign({ id: newUser._id }, secretKey);

        // return response
        res.status(201).json({
            status: "success",
            message: "Registered successfully",
            token: token
        })

    } catch (error) {

    }
})

// User Login API

    app.post("/login" , async (req,res) =>{
        const {email ,password} = req.body;

       

        try {
             // confirm the user is registered or not with email

             const userExist  = await UserModel.findOne({email:email});
             console.log(userExist)

             

             if(userExist  === null){
                return res.json({
                    status:"faild",
                    message:"Authentication failed"
                })
             }
             // confirm password
             const confirmPass = await bcrypt.compare(password, userExist.password);
             if(confirmPass === false){
                return res.json({
                    status:"false",
                    message:"Authentication failed"
                })
             }

            
          // generate token

          const token = jwt.sign({id:userExist._id}, secretKey)
          // return response
        res.status(201).json({
            status: "success",
            message: "Logged in successfully",
             token: token
        })
       
            
        } catch (error) {
            
        }
    })

mongoose.connect("mongodb://localhost:27017/blogdb").then(() => {

    app.listen(port, () => {
        console.log("My server is Start")
    })
})