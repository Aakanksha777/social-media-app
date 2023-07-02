import { useEffect, useState } from "react";
import PostList from "../../components/PostList/PostList"
import Navbar from "../../components/navbar/Navbar";
import "./Explore.css"

const ExploreFeeds = ({ user }) => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch(`http://localhost:8800/social/post/all`)
            .then((res) => res.json())
            .then((data) => {
                if (data.status === 200) {
                    setPosts(data.data)
                } else {
                    console.error(data.error)
                }
            });
    }, [])

    return (
        <div>
            <Navbar />
            <div className="explore__feeds">
                <PostList posts={posts} />

            </div>
        </div>
    )
}
export default ExploreFeeds