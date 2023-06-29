import React from "react";
import Post from "../Post/Post.jsx";

const PostList = ({ posts }) => {
  return (
    <div className="feed">
      {posts.length > 0 && posts.map((post) => <Post key={post._id} post={post} />)}
    </div>
  );
};

export default PostList;
