
const multer = require("multer")
const upload = multer({ dest: "upload/" })
const path = require("path")
const express = require('express')
const app = express()
const fs = require('fs')
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require("cors")

const CreatePost = require("./models/CreatePost");

const Category = require("./models/Category")


const port = 4000;

const userRoutes = require("./routes/UserRoures");


// Middle ware
app.use(express.json())
app.use(bodyParser.json());
app.use(cors())


// import routes

app.use("/user", userRoutes);




app.use(express.static(path.join(__dirname, "upload")));





// user registration
// app.post("/signup", upload.single('image'), async (req, res) => {
//     // const { name, email, password, image } = req.body;

//     try {
//         const extension = req.file.mimetype.split("/")[1];
//         if (extension == "png" || extension == "jpg" || extension == "jpeg" || extension == "avif") {
//             const filName = req.file.filename + "." + extension;
//             req.body.image = filName;
//             console.log(filName)
//             fs.rename(req.file.path, `upload/${filName}`, () => {
//                 console.log("file Uploaded with name")
//             });

//         } else {
//             fs.unlink(req.file.path, () => {
//                 console.log("file is deleted")
//             })
//         }
//         const { name, email, password, image } = req.body;
//         // check is user already registered 
//         const alreadyUser = await UserModel.findOne({ email: email });
//         if (alreadyUser !== null) {
//             return res.status(200).json({
//                 status: "failed",
//                 message: "Email already registered"
//             });
//         }

//         // password hashed
//         const hashed = await bcrypt.hash(password, 10);

//         // create user
//         const newUser = await UserModel.create({
//             name: name, email: email, password: hashed, image: image
//         })

//         // generate token?
//         const token = jwt.sign({ id: newUser._id }, secretKey);

//         // return response
//         res.status(201).json({
//             status: "success",
//             message: "Registered successfully",
//             token: token
//         })

//     } catch (error) {

//     }
// })

// // User Login API

// app.post("/login", async (req, res) => {
//     const { email, password } = req.body;



//     try {
//         // confirm the user is registered or not with email

//         const userExist = await UserModel.findOne({ email: email });
//         console.log(userExist)



//         if (userExist === null) {
//             return res.json({
//                 status: "faild",
//                 message: "Authentication failed"
//             })
//         }
//         // confirm password
//         const confirmPass = await bcrypt.compare(password, userExist.password);
//         if (confirmPass === false) {
//             return res.json({
//                 status: "false",
//                 message: "Authentication failed"
//             })
//         }


//         // generate token

//         const token = jwt.sign({ id: userExist._id }, secretKey)
//         // return response
//         res.status(201).json({
//             status: "success",
//             message: "Logged in successfully",
//             token: token
//         })


//     } catch (error) {
//         if (error.name === 'ValidationError') {
//             // Mongoose validation error
//             const errors = {};
//             for (const field in error.errors) {
//                 errors[field] = error.errors[field].message;
//             }
//             res.status(200).json({
//                 status: false,
//                 errors: errors
//             });
//         } else {
//             // Other types of errors
//             res.status(500).json({ error: 'Internal Server Error' });
//         }

//     }
// })



// Create New Post
// app.post("/createpost", upload.single('image'), async (req, res) => {
//     const { title, description, category, status } = req.body;
//     // console.log(req.body)

//     try {
//         const extension = req.file.mimetype.split("/")[1];
//         if (extension == "png" || extension == "jpg" || extension == "jpeg" || extension == "avif") {
//             const filName = req.file.filename + "." + extension;
//             req.body.image = filName;

//             fs.rename(req.file.path, `upload/${filName}`, () => {
//                 console.log("file Uploaded with name")
//             });

//         } else {
//             fs.unlink(req.file.path, () => {
//                 console.log("file is deleted")
//             })
//         }



//         console.log(req.body.image)

//         // create user
//         await CreatePost.create({
//             title: title, description: description, category: category, image: req.body.image, status: status
//         })


//         // return response
//         res.status(201).json({
//             status: "success",
//             message: "New Psot successfully Added"


//         })

//     } catch (error) {
//         if (error.name === 'ValidationError') {
//             // Mongoose validation error
//             const errors = {};
//             for (const field in error.errors) {
//                 errors[field] = error.errors[field].message;
//             }
//             res.status(200).json({
//                 status: false,
//                 errors: errors
//             });
//         } else {
//             // Other types of errors
//             res.status(500).json({ error: 'Internal Server Error' });
//         }
//     }
// })



// Get All Post API

// app.get("/allposts", async (req, res) => {
//     try {
//         const createpost = await CreatePost.find({});
//         return res.status(200).json({
//             status: true,
//             createpost: createpost
//         })
//     } catch (error) {
//         return res.status(404).json({
//             status: false,
//             message: error.message
//         })
//     }
// })

// Get All Post by User_ID API

// app.get("/createpost", async (req, res) => {
//     try {
//         const createpost = await CreatePost.find({});
//         return res.status(200).json({
//             status: true,
//             createpost: createpost
//         })
//     } catch (error) {
//         return res.status(404).json({
//             status: false,
//             message: error.message
//         })
//     }
// })


 // Comments Post API

 app.post("/comment", async (req, res) => {
     const {  postid, comment, status } = req.body;
    console.log(req.body)

     try {


        //   New Comment
         await Comment.create({
              postid: postid, comment: comment, status: status

         })


         
        res.status(201).json({
             status: "success",
            message: "Comment Added successfully",

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
            //   Other types of errors
             res.status(500).json({ error: 'Internal Server Error' });         }

     }
})

//  delete comments

app.delete('/comment/:commentId', async (req, res) => {
    const commentId = req.params.commentId;
console.log(commentId); 
 
try {
    await Comment.findByIdAndDelete(commentId)

    return res.status(200).json({

      status: true,
      message: "Comment is Deleted"
    })
    
} catch (error) {
    
}
   
  
  });

// Get All Comment API

// app.get("/comment", async (req, res) => {
//     try {
//         const comment = await Comment.find({});
//         return res.status(200).json({
//             status: true,
//             comment: comment
//         })
//     } catch (error) {
//         return res.status(404).json({
//             status: false,
//             message: error.message
//         })
//     }
// })

// Create New Category
// app.post("/category", upload.single('image'), async (req, res) => {
//     const { title } = req.body;
//     // console.log(req.body)

//     try {
//         const extension = req.file.mimetype.split("/")[1];
//         if (extension == "png" || extension == "jpg" || extension == "jpeg" || extension == "avif") {
//             const filName = req.file.filename + "." + extension;
//             req.body.image = filName;

//             fs.rename(req.file.path, `upload/${filName}`, () => {
//                 console.log("file Uploaded with name")
//             });

//         } else {
//             fs.unlink(req.file.path, () => {
//                 console.log("file is deleted")
//             })
//         }



//         console.log(req.body.image)

//         // create user
//         await Category.create({
//             title: title,  image: req.body.image
//         })


//         // return response
//         res.status(201).json({
//             status: "success",
//             message: "New Category successfully Added"


//         })

//     } catch (error) {
//         if (error.name === 'ValidationError') {
//             // Mongoose validation error
//             const errors = {};
//             for (const field in error.errors) {
//                 errors[field] = error.errors[field].message;
//             }
//             res.status(200).json({
//                 status: false,
//                 errors: errors
//             });
//         } else {
//             // Other types of errors
//             res.status(500).json({ error: 'Internal Server Error' });
//         }
//     }
// })

// Get All Comment API

// app.get("/category", async (req, res) => {
//     try {
//         const category = await Category.find({});
//         return res.status(200).json({
//             status: true,
//             category: category
//         })
//     } catch (error) {
//         return res.status(404).json({
//             status: false,
//             message: error.message
//         })
//     }
// })


mongoose.connect("mongodb://localhost:27017/blogdb").then(() => {

    app.listen(port, () => {
        console.log("My server is Start")
    })
})