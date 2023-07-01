import SinglePost from "../SinglePost/SinglePost.jsx";
import "./PostList.css"

const PostList = ({ posts }) => {
  return (
    <div className='single-post-main-container'>
      {posts.map((singlePost) => (
        <SinglePost key={singlePost._id} post={singlePost} />
      ))}
    </div>
  );
};

export default PostList;
