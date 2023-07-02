import React, { useEffect, useState } from 'react'
import './SinglePost.css'
import { BiCommentDetail, BiSolidCommentDetail } from 'react-icons/bi'
import { BsBookmarkPlus, BsBookmarkPlusFill } from 'react-icons/bs'
import { AiOutlineLike, AiFillLike } from 'react-icons/ai'
import { calculateTimeAgo } from '../../utils/mainUtils'

const SinglePost = ({ post }) => {
  const { _id: postId, img, createdAt, likes, description, user } = post
  const { _id: userId, username, firstname, lastname, profileImage } = user
  const [timeAgo] = useState(calculateTimeAgo(createdAt))
  const [likeCount, setLikeCount] = useState(likes.length)
  const [currUserLike, setCurrUserLike] = useState(likes.includes(userId))
  const handleLike = async () => {
    try {
      const res = await fetch(`http://localhost:8800/social/post/like-dislike-post/${postId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: userId })
      })
      const message = await res.json()
      console.log(message);
    } catch (error) {
      console.log(error);
    }
    if (currUserLike) {
      setCurrUserLike(false)
      setLikeCount(likeCount - 1)
    } else {
      setCurrUserLike(true)
      setLikeCount(likeCount + 1)
    }
  }

  return (
    <div className='single-post-container'>
      <div className="single-post-userimg">
        <img src={profileImage} alt='Profile Pic' />
      </div>
      <div className="single-post-user-top-flex">
        <div className="single-post-userInfo">
          <div className='single-fullname'>{firstname && firstname[0].toUpperCase()}{firstname && firstname.substr(1)}{" "}{lastname}</div>
          <div className="single-username">@{username}</div>
          <div className='time-ago'>{timeAgo.days && `${timeAgo.days} days`} {" "}{!timeAgo.days && timeAgo.hours && `${timeAgo.hours} hours`} {" "}{!timeAgo.days && !timeAgo.hours && timeAgo.minutes && `${timeAgo.minutes} minutes`}</div>
        </div>
        <div className="single-post-lower-container">
          <div className="single-post-desc">{description}</div>
          <div className="single-post-image">
            {
              img.length > 0 && img.map((image) => {
                <img src={image} alt='single-post' className="single-post-img" />
              })
            }
          </div>
        </div>
        <div className="single-post-like-comment">
          <div onClick={handleLike} className="like__btn">
            {
              currUserLike ?
                <AiFillLike className='icons' />
                :
                <AiOutlineLike className='icons' />
            }
            <div className='like__count'>
              {likeCount} Likes
            </div>
          </div>
          <BiCommentDetail className='icons' />
          <BsBookmarkPlus className='icons' />
        </div>
      </div>
    </div>
  )
}

export default SinglePost;