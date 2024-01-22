
const UserCrtl = require("../controllers/UserController");
const PostCrtl = require ("../controllers/PostController")
const categoryCrtl = require("../controllers/CategoryController");
const commentCrtl = require ("../controllers/CommentController")
const multer = require("multer")
const upload = multer({ dest: "upload/" })
const  express =  require("express");


const userR = express.Router()



userR.post("/login", UserCrtl.login);
userR.post("/signup", upload.single('image'), UserCrtl.signup);
userR.post("/createpost", upload.single('image'),PostCrtl.newcreatepost);
userR.get("/allposts",PostCrtl.GetsAllPosts);
userR.get("/getallpostbyid",PostCrtl.GetAllPostById);
userR.post("/createnewcategory", upload.single('image'), categoryCrtl.CreateNewCategory);
userR.get("/getallcategory",categoryCrtl.GetAllCategory);
userR.post("/comment",commentCrtl.Comment)

module.exports = userR;