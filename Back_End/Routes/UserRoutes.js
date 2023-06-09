const express = require('express')
const router = express.Router()
const { SignupController } = require('../Controller/UserController/SignupController')
const { SigninController } = require('../Controller/UserController/SigninController')
const { CreatePostMiddleWare, CreatePostController } = require('../Controller/UserController/CreatePostController')
const { PersonalBlogMiddleWare, FetchPersonalBlogController } = require('../Controller/UserController/FetchPersonalBlogController')
const { Getallblogs } = require('../Controller/UserController/GetAllBlogs')
const { UpdatePostController, UpdatePostMiddleWare } = require('../Controller/UserController/UpdatePostController')
const { DeletePostController, DeletePostMiddleware } = require('../Controller/UserController/DeletePostController')
const { Pagination2 } =require('../Controller/UserController/PanigationController')
const { FiveLatestPost,FiveLatestPostMiddleware } =require('../Controller/UserController/LatestPostController')
const { LatestThreePost } =require('../Controller/UserController/LatestThreePost')
const { VerifyTokenMiddle,UserProfileImage,uploadFile } =require('../Controller/UserController/UserprofileImage')
const { fetchProfileImageMiddleware, FetchUserProfileImage }=require('../Controller/UserController/FetchUserProfilrImage')
router.post('/Signup', SignupController)
router.post('/Signin', SigninController)
router.post('/Create/Post', CreatePostMiddleWare, CreatePostController)
router.delete('/Delete/Post/:id/:userid', DeletePostMiddleware, DeletePostController)
router.put("/Update/Post", UpdatePostMiddleWare, UpdatePostController)
router.get("/Personal/Blog/:id", PersonalBlogMiddleWare, FetchPersonalBlogController)
router.get("/All/Blogs", Getallblogs)
router.get("/Pagination",Pagination2)
router.get("/Five/Latests/Post/:latestid",FiveLatestPostMiddleware,FiveLatestPost)
router.get("/LatestThreePost/:UserID",LatestThreePost)
router.post('/Profile/Image',VerifyTokenMiddle,uploadFile.single("Profilename"),UserProfileImage)
router.get('/fetch/User/Profile/Image/:UserID',fetchProfileImageMiddleware,FetchUserProfileImage)
router.post('/EditProfile', (req, res) => {
  res.send("Edit Profile")
})
router.post('/ForgetPassword', (req, res) => {
  res.send("Forget Password")
})



module.exports = router