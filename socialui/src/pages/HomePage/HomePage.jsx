import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Posts from "../../components/AddPost";
import Post from "../../components/Post";
import "./HomePage.css";

import Post1 from "../../Assets/post1.avif";

const HomePage = ({ user }) => {
  return (
    <div className="main-homePage">
      <Navbar />
      <div className="post-feed-container">
        <Posts userId={user._id} />
        <div className="feed-card">
          <Post
            name="Aakanksha Malothia"
            time="now"
            postImg={Post1}
            likes={["jvsc", "khsg"]}
            desc="What you need to remember is Breathe..."
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
