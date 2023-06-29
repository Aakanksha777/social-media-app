import React from 'react'
import './SinglePost.css'
import Person1 from '../../Assets/person1.webp';
import Post2 from '../../Assets/post2.avif';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import BookmarksIcon from '@mui/icons-material/Bookmarks';

const singlePostData = [
    {
        userImage : Person1,
        userName: "Aakanksha Malothia",
        DateTime : "25/10/2023",
        userHandle : "@Aakanksha777",
        postDesc : "Went to this hangout place, Bob's in Marathalli yesterday. The ambience is real good and the mocktails are really fresh.",
        PostImage : Post2
    }
]

const SinglePost = () => {
  return (
    <div className='single-post-main-container'>
      <h2>SinglePost</h2>
      {singlePostData.map(({userImage, userName, DateTime, userHandle, postDesc, PostImage}) => (
        <div className='single-post-container'>

            <div className="single-post-userimg">
            <img src={userImage} alt='single-post'  className="single-post-userimg-img"/>
            </div>

            <div className="single-post-user-top-flex">
            <div className="single-post-userInfo">
                <div className="single-user-name">{userName}</div>
                <div className="single-user-date">{DateTime}</div>
                <div className="single-user-pin">...</div>
            </div>
                <div className="single-user-handle"><p> {userHandle}</p></div>

                <div className="single-post-lower-container">
                <div className="single-post-desc">{postDesc}</div>
                <div className="single-post-image">{PostImage}</div>
                <div className="single-post-like-comment">
                    <p><FavoriteIcon/></p>
                    <p><CommentIcon/></p>
                    <p> <BookmarksIcon/></p>
                   
                   
                </div>
            </div>

            </div>
           
        </div>
      ))}
    </div>
  )
}

export default SinglePost
