const express = require("express");
const UserController= require('../controller/UserController');
const postsController= require('../controller/postsController');
const AuthVerifyMiddleware= require('../middleware/AuthVerifyMiddleware');

const router = express.Router();
//api router end point

//User
router.post("/registration", UserController.registration); //ok
router.post("/login", UserController.login); //ok
router.post("/profileUpdate",AuthVerifyMiddleware , UserController.profileUpdate); //ok




router.post("/createPost", AuthVerifyMiddleware, postsController.createPost);
router.get("/readPost", AuthVerifyMiddleware, postsController.readPost);
router.get("/deletePost/:id", AuthVerifyMiddleware,postsController.deletePost);
router.post("/updatePost/:id", AuthVerifyMiddleware,postsController.updatePost);
router.get("/readPostByID/:id", AuthVerifyMiddleware, postsController.readPostByID);




module.exports = router;