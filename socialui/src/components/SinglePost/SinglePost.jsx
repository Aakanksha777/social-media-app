import React from 'react'
import './SinglePost.css'
import { BiCommentDetail, BiSolidCommentDetail } from 'react-icons/bi'
import { BsBookmarkPlus, BsBookmarkPlusFill } from 'react-icons/bs'
import { AiOutlineLike, AiFillLike } from 'react-icons/ai'

const SinglePost = ({ post }) => {
  const { userImage, userName, DateTime, userHandle, postDesc, PostImage } = post
  return (
<<<<<<< HEAD
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
           
=======
    <div className='single-post-container'>
      <div className="single-post-userimg">
        <img src={userImage} alt='single-post' className="single-post-userimg-img" />
      </div>
      <div className="single-post-user-top-flex">
        <div className="single-post-userInfo">
          <div className="single-user-name">{userName}</div>
          <div className="single-user-date">{DateTime}</div>
          <div className="single-user-pin">...</div>
>>>>>>> 50a48d5b04048adee7ab222d0f8822efe910db21
        </div>
        <div className="single-user-handle">{userHandle}</div>
        <div className="single-post-lower-container">
          <div className="single-post-desc">{postDesc}</div>
          <div className="single-post-image">{PostImage}</div>
          <div className="single-post-like-comment">
            <AiOutlineLike />
            <BiCommentDetail />
            <BsBookmarkPlus />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SinglePost
