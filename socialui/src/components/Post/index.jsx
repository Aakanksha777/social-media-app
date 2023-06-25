import React, { useState } from "react";
import Likes from "../../Assets/likes.png";
import "./Post.css";

const Post = ({ name, createdAt, description, img, likes }) => {
  const [likeCount, setLikeCount] = useState(likes.length);

  const handleLikes = () => {
    setLikeCount(likeCount + 1);
  };

  return (
    <div className="feed">
      <div className="feed-wrapper">
        <div className="feed-header">
          <h3 className="feed-username">{name}</h3>
          <small>{createdAt}</small>
        </div>
        <p>{description}</p>
        <img src={img} alt="post1" className="main-feed-img" />
        <span className="like-delete-icons">
          <img
            src={Likes}
            alt="heart"
            className="likebtn"
            onClick={handleLikes}
          />
          <h3>{likeCount}</h3>
        </span>
      </div>
    </div>
  );
};

export default Post;
