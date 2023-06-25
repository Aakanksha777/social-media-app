const User = require("../model/user-model");
const Post = require("../model/post-model");

const createPost = async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
};

const updatePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (req.body.userId === post.userId) {
      await post.updateOne({ $set: req.body });
      res.status(200).json(post);
    } else {
      res.status(403).json({ error: "You can only update your posts." });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (req.body.userId === post.userId) {
      await post.deleteOne();
      res.status(200).json("Post is Deleted.");
    } else {
      res.status(403).json({ error: "You can only delete your posts." });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const likeDislikePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({ $push: { likes: req.body.userId } });
      res.status(200).json("liked the post");
    } else {
      await post.updateOne({ $pull: { likes: req.body.userId } });
      res.status(200).json("Disliked the post.");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getAllPostById = async (req, res) => {
  try {
    const currentUser = await User.findById(req.params.userId);
    const userPosts = await Post.find({ userId: currentUser._id }).populate(
      "user"
    );
    res.status(200).json(userPosts);
  } catch (err) {
    res.status(500).json(err);
  }
};
const getAllPostForUser = async (req, res) => {
  try {
    const currentUser = await User.findById(req.params.userId);
    console.log(currentUser);

    const friendPosts = await Promise.all(
      currentUser.following.map((friendId) => {
        return Post.find({ userId: friendId });
      })
    );
    res.status(200).json(friendPosts);
  } catch (err) {
    res.status(500).json(err);
  }
};
module.exports = {
  createPost,
  updatePost,
  deletePost,
  likeDislikePost,
  getPostById,
  getAllPostById,
  getAllPostForUser,
};
