import SinglePost from "../SinglePost/SinglePost.jsx";
import "./PostList.css"

const PostList = ({ posts }) => {
  return (
    <div className='single-post-main-container'>
      {posts.map((singlePost) => (
        <SinglePost post={singlePost} />
      ))}
    </div>
  );
};

export default PostList;
