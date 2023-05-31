import React from 'react'
import Person1 from '../Assets/person1.webp'
import "./Posts.css"

const Posts = () => {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src={Person1} alt="" />
          <input
            placeholder="Share Your Thoughts..."
            className="shareInput"
          />
        </div>
        <hr className="shareHr"/>
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    {/* <PermMedia htmlColor="tomato" className="shareIcon"/> */}
                    <span className="shareOptionText">Photo or Video</span>
                </div>
                <div className="shareOption">
                    {/* <Label htmlColor="blue" className="shareIcon"/> */}
                    <span className="shareOptionText">Tag</span>
                </div>
                <div className="shareOption">
                    {/* <Room htmlColor="green" className="shareIcon"/> */}
                    <span className="shareOptionText">Location</span>
                </div>
                <div className="shareOption">
                    {/* <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/> */}
                    <span className="shareOptionText">Feelings</span>
                </div>
            </div>
            <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  )
}

export default Posts
