import React from 'react'
import './SinglePost.css'
import { BiCommentDetail, BiSolidCommentDetail } from 'react-icons/bi'
import { BsBookmarkPlus, BsBookmarkPlusFill } from 'react-icons/bs'
import { AiOutlineLike, AiFillLike } from 'react-icons/ai'

const SinglePost = ({ post }) => {
  const { userImage, userName, DateTime, userHandle, postDesc, PostImage } = post
  return (
    <div className='single-post-container'>
      <div className="single-post-userimg">
        <img src={userImage} alt='single-post' className="single-post-userimg-img" />
      </div>
      <div className="single-post-user-top-flex">
        <div className="single-post-userInfo">
          <div className="single-user-name">{userName}<span className='single-post-dot'>&#9679;</span>{DateTime}</div>
          {/* <div className="single-user-date">{DateTime}</div> */}
          <div className="single-user-pin">  &#9675; &#9675; &#9675;</div>
        </div>
        <div className="single-user-handle">{userHandle}</div>
        <div className="single-post-lower-container">
          <div className="single-post-desc">{postDesc}</div>
          <div className="single-post-image">
            <img src={PostImage} alt='single-post'/>
            </div>
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

export default SinglePost;