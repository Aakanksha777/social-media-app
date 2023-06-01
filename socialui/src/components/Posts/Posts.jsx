// import React, {useEffect, useState} from 'react'
import Person1 from '../Assets/person1.webp'
// import axios from 'axios'
import "./Posts.css"

const Posts = () => {

//   const [sharePost, setSharepost] = useState('');

//   const fetchData = async () => {
//     const {data} = await axios.get("post/get-post/6475fccc5860298168c60796")
//     console.log(data)
//     setSharepost(data)
// }

//   useEffect (() => {
//     fetchData();
//   }, [])

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src={Person1} alt="" />
          <textarea
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
