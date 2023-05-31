const router = require("express").Router();
const Post = require('../model/post-model');
const User = require("../model/user-model");
const {createPost, updatePost, deletePost, likeDislikePost, getPostById, getAllPostById} = require("../controllers/post-controllers")
//create
//put userid as Exisiting user;s mongo ID.

//update
//In URL give monogodb obj ID
// and in body put userid of existing post.

router.route('/create-post').post(createPost) //create-post
router.route("/update-post/:id").put(updatePost) //update-post
router.route("/delete-post/:id").delete(deletePost) //delete-post
router.route("/like-dislike-post/:id").put(likeDislikePost) //like-dislike
router.route("/get-post/:id").get(getPostById) //get post by Id
router.route("/timeline/all").get(getAllPostById);

module.exports = router;