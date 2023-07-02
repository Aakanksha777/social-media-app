import { useEffect, useState } from "react";
import PostList from "../../components/PostList/PostList"

const BookmarkFeeds = ({ user }) => {
    const [posts, setPosts] = useState([])
    const { _id: userId } = user
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
        <PostList posts={posts} userId={userId} />
    )
}
export default BookmarkFeeds