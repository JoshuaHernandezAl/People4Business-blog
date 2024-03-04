import axios from "axios";
import queryString from "query-string";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Spinner } from "../components/shared/Spinner";
import { PostCard } from "../components/posts/PostCard";
import { Post } from "../interfaces/Post.interface";

export const SearchPostsResults = () => {
  const { search } = useLocation();
  const { q = '' } = queryString.parse(search);
  const navigate = useNavigate();
  const { searchTerm = '' } = useParams();
  const [loading, setLoading] = useState(false);
  const [posts, setposts] = useState([]);
  const getPosts = async () => {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const url = `${baseUrl}/posts/search-by/${searchTerm}?${q}=true`;
    setLoading(true);
    const { data } = await axios.get(url);
    return data;
  }
  useEffect(() => {
    getPosts().then((data) => {
      if (data.length === 0) {
        navigate('/home?q=not-found')
      }
      setposts(data);
      setLoading(false);
    });
  }, [searchTerm])

  if (loading) {
    return <Spinner />
  }
  return (
    <div className="row">
      {
        posts.map((post: Post) => (
          <PostCard key={post.id} {...post} />
        ))
      }
    </div>
  )
}
