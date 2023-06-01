import React, { useState } from 'react'
import Likes from "../Assets/likes.png"

import "./Feed.css"

const Feed = ({name, time, desc, postImg}) => {

  const [likeCount, setLikeCount] = useState(0)

  const handleLikes = () => {
    setLikeCount(likeCount + 1)
    console.log("clicked")
  }
  return (
    <div className="feed">
        <div className="feed-wrapper">
            <div className="feed-header">
            <h3 className='feed-username'>{name}</h3>
            <small>{time}</small>
            </div>
            <p>{desc}</p>
            <img src={postImg} alt="post1" className='main-feed-img'/>
            <span className='like-delete-icons'>
                <img src={Likes} alt="heart" className='likebtn' onClick={handleLikes}/>
                <h3>{likeCount}</h3>
            </span> 
        </div>
        <hr/>
    </div>
  )
}

export default Feed
