import React, { useState } from "react";
import Likes from "../../Assets/likes.png";
import "./Post.css";

// const post = {
//   description: "Some post ",
//   img: ["link::/"],
//   likes: ["userids"],
//   createdAt: Date.now(),
//   user: {
//     username: "surya777",
//     email: "surya777@gmail.com"
//   },
//   updatedAt: Date.now()
// }
const Post = ({ post }) => {
  const { description, img, likes, createdAt, user, updatedAt } = post
  const { username, email } = user

  const [likeCount, setLikeCount] = useState(likes.length);

  const handleLikes = () => {
    setLikeCount(likeCount + 1);
  };

  return (
    <div className="feed-wrapper">
      <div className="feed-header">
        <h3 className="feed-username">{username}</h3>
        <small>{createdAt}</small>
      </div>
      <p>{description}</p>
      {
        img.length > 0 && img.map((image) => {
          <img src={image} alt="post1" className="main-feed-img" />
        })
      }
      <span className="like-delete-icons">
        <img
          src={Likes}
          alt="heart"
          className="likebtn"
          onClick={handleLikes}
        />
        <h3>{likeCount} post</h3>
      </span>
    </div>
  );
};

export default Post;
