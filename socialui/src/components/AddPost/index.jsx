import { useEffect, useState } from "react";
import "./AddPost.css";

const AddPost = ({ userId }) => {
  const [post, setPost] = useState({
    description: "",
    userId: userId,
  });

  const handlePostChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleAddPost = (e) => {
    //some validations
    e.preventDefault();
    fetch("http://localhost:8800/social/post/create-post", {
      method: "post",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.err(err)
      })
  };
  return (
    <div className="add__post__container">
      <img src="" className="logged__user__img" alt="Profile Picture" />
      <form onSubmit={handleAddPost} className="add__post">
        <textarea
          placeholder="Write something interesting..."
          className="post__data"
          name="description"
          value={post.description}
          onChange={handlePostChange}
          rows={6}
          cols="50"
        />
        <button className="submit__post">Post</button>
      </form>
    </div>
  );
};

export default AddPost;
