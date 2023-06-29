import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import AddPost from "../../components/AddPost/AddPost";
import PostList from "../../components/PostList/index";
import SinglePost from "../../components/SinglePost/SinglePost";
import "./HomePage.css";

const HomePage = ({ user }) => {
  const { _id: userId } = user
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch(`http://localhost:8800/social/post/timeline/all/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          setPosts(data.data)
        } else {
          console.error(data.error)
        }
      });
  }, [])
  return (
    <div className="main-homePage">
      <Navbar />
      <div className="post-feed-container">
        <AddPost userId={userId} />
        <div className="feed-card">
          <PostList posts={posts}/>
        </div>
      </div>
      <SinglePost/>

    </div>
  );
};

export default HomePage;
