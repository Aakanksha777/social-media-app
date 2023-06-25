import { useState } from "react";
import Person1 from "../../Assets/person1.webp";
import "./AddPost.css";

const AddPost = () => {
  const [post, setPost] = useState("");

  const handlePostChange = (e) => {
    setPost(e.target.value);
  };

  const handleAddPost = () => {};
  return (
    <div className="post__container">
      <img src="" className="logged__user__img" alt="Profile Picture" />
      <form onSubmit={handleAddPost} className="add__post">
        <textarea
          placeholder="Write something interesting..."
          className="post__data"
          value={post}
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
