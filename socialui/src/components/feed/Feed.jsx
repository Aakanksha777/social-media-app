import React from 'react'
// import Post1 from '../Assets/post1.avif'
// import Post2 from '../Assets/post2.avif'
import Heart from "../Assets/heart.png"
import Like from "../Assets/like.png"
import "./Feed.css"

const Feed = ({name, time, desc, postImg}) => {
  return (
    <div className="feed">
        <div className="feed-wrapper">
            <div className="feed-header">
            <h3 className='feed-username'>{name}</h3>
            <small>{time}</small>
            </div>
            <p>{desc}</p>
            <img src={postImg} alt="post1" className='main-feed-img'/>
            <span>
                <img src={Heart} alt="heart" className='likebtn'/>
                <img src={Like} alt="heart" className='likebtn'/>
            </span> 
        </div>
        <hr/>
    </div>
  )
}

export default Feed
