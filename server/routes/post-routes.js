const router = require("express").Router();

const {
  createPost,
  updatePost,
  deletePost,
  likeDislikePost,
  getPostById,
  getAllPostById,
  getAllPostForUser,
} = require("../controllers/post-controllers");
//create
//put userid as Exisiting user;s mongo ID.

//update
//In URL give monogodb obj ID
// and in body put userid of existing post.

router.route("/create-post").post(createPost); //create-post
router.route("/update-post/:postId").put(updatePost); //update-post
router.route("/delete-post/:postId").delete(deletePost); //delete-post
router.route("/like-dislike-post/:postId").put(likeDislikePost); //like-dislike
router.route("/get-one-post/:postId").get(getPostById); //get a single post by post Id
router.route("/get-post/:userId").get(getAllPostById); //get personal post by user Id
router.route("/timeline/all/:userId").get(getAllPostForUser); //get followers post by user Id

module.exports = router;
