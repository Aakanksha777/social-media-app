import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Posts from "../../components/AddPost";
import Post from "../../components/Post";
import "./HomePage.css";

import Post1 from "../../Assets/post1.avif";
import Post2 from "../../Assets/post2.avif";
import Post3 from "../../Assets/post3.avif";
import Post4 from "../../Assets/post4.avif";

const HomePage = ({ user }) => {
  return (
    <div className="main-homePage">
      <Navbar />
      <div className="post-feed-container">
        <div className="post-card">
          <Posts userId={user._id} />
        </div>

        <div className="feed-card">
          <Post
            name="Aakanksha Malothia"
            time="now"
            postImg={Post1}
            desc="What you need to remember is Breathe..."
          />
          <Post
            name="Annu"
            time="12 mins ago"
            postImg={Post2}
            desc="You can't dull my sparkle ✨"
          />
          <Post
            name="Surya saini"
            time="1 day ago"
            postImg={Post3}
            desc="Life is the biggest party you'll ever be at."
          />
          <Post
            name="Himanshu"
            time="2 mins ago"
            postImg={Post4}
            desc="No need of Caption"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
