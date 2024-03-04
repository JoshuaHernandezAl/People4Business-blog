import axios from "axios";
import { useEffect, useState } from "react"
import { Spinner } from "../components/shared/Spinner";
import { PostCard } from "../components/posts/PostCard";
import { Post } from "../interfaces/Post.interface";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

export const PostsPage = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setposts] = useState([]);
  const { search } = useLocation();
  const { q = '' } = queryString.parse(search);
  const getPosts = async () => {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    setLoading(true);
    const { data } = await axios.get(`${baseUrl}/posts`);
    return data;
  }
  useEffect(() => {
    getPosts().then((data) => {
      setposts(data);
      setLoading(false);
    });
  }, [])

  if (loading) {
    return <Spinner />
  }
  return (
    <>
      {
        q !== '' && <div className="alert alert-warning" role="alert"> Posts Not Found! </div>
      }
      <div className="row">
        {
          posts.map((post: Post) => (
            <PostCard key={post.id} {...post} />
          ))
        }
      </div>
    </>
  )
}
