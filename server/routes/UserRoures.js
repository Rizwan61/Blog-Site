
const UserCrtl = require("../controllers/UserController");
const PostCrtl = require ("../controllers/PostController")
const categoryCrtl = require("../controllers/CategoryController");
const commentCrtl = require ("../controllers/CommentController")
const multer = require("multer")
const upload = multer({ dest: "upload/" })
const  express =  require("express");


const userR = express.Router()


//  User API
userR.post("/login", UserCrtl.login);
userR.post("/signup", upload.single('image'), UserCrtl.signup);
// Post API
userR.post("/createpost", upload.single('image'),PostCrtl.newcreatepost);
userR.get("/allposts",PostCrtl.GetsAllPosts);
userR.get("/getallpostbyid/:id",PostCrtl.GetAllPostById);
// Category API
userR.post("/createnewcategory", upload.single('image'), categoryCrtl.CreateNewCategory);
userR.get("/getallcategory",categoryCrtl.GetAllCategory);
// Comment API
userR.delete("/comment/:commentId",commentCrtl.DelComment)
userR.post("/comment",commentCrtl.NewComment)

module.exports = userR;