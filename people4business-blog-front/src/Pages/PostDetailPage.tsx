import axios from "axios";
import { useEffect, useState } from "react";
import { Spinner } from "../components/shared/Spinner";
import { useParams } from "react-router-dom";
import { Post } from '../interfaces/Post.interface';
import { format } from "@formkit/tempo";

export const PostDetailPage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [{ title, content, publishDate, author }, setpost] = useState({} as Post);

  const getPost = async () => {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    setLoading(true);
    const { data } = await axios.get(`${baseUrl}/posts/${id}`);
    return data;
  }
  useEffect(() => {
    getPost().then((data) => {
      setpost(data);
      setLoading(false);
    });
  }, [])

  if (loading) {
    return <Spinner />
  }
  return (
    <div className="container text-center bg-light rounded">
      <div className="row">
        <div className="col-8 mt-4">
          <h2 className="text-dark">{title}</h2>
        </div>
        <div className="col">
          <div className="d-flex flex-column align-items-center">
            <p className="text-muted pt-2 mt-2">By <strong>{author}</strong></p>
            <p>Published: {format(publishDate, 'medium')}</p>
          </div>
        </div>
      </div>
      <hr className="border border-secondary border-2 opacity-75"/>
      <p className="text-dark m-5 pb-5">{content}</p>
    </div>
  )
}
