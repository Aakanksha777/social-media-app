import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import AddPost from "../../components/AddPost/AddPost";
import PostList from "../../components/PostList/PostList";
import "./HomePage.css";


// import Person1 from '../../Assets/person1.webp';
// import Post2 from '../../Assets/post2.avif';

// const singlePostData = [
//   {
//     userImage: Person1,
//     userName: "Aakanksha Malothia",
//     DateTime: "25/10/2023",
//     userHandle: "@Aakanksha777",
//     postDesc: "Went to this hangout place, Bob's in Marathalli yesterday. The ambience is real good and the mocktails are really fresh.",
//     PostImage: Post2
//   }, {
//     userImage: Person1,
//     userName: "Aakanksha Malothia",
//     DateTime: "25/10/2023",
//     userHandle: "@Aakanksha777",
//     postDesc: "Went to this hangout place, Bob's in Marathalli yesterday. The ambience is real good and the mocktails are really fresh.",
//     PostImage: Post2
//   }
// ]

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
      <div className="post-feed-container">
        <AddPost userId={userId} />
        <div className="feed-card">
          <PostList posts={posts} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
