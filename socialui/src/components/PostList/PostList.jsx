import SinglePost from "../SinglePost/SinglePost.jsx";
import "./PostList.css"

const PostList = ({ posts, handleLikeOfPost }) => {
  return (
    <div className='single-post-main-container'>
      {posts.map((singlePost) => (
        <SinglePost key={singlePost._id} post={singlePost} handleLikeOfPost={handleLikeOfPost} />
      ))}
    </div>
  );
};

export default PostList;
