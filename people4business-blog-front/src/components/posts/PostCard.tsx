import { format } from "@formkit/tempo"
import { Post } from "../../interfaces/Post.interface"
import { Link } from "react-router-dom"

export const PostCard = ({title, content, publishDate,author,id}: Post) => {
  const formatDate = format(publishDate, 'medium')
  return (
    <div className="col-sm-6 my-3 mb-sm-0">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{`${content.substring(0, 70)}...`}</p>
          <p>Publish: {formatDate} by <strong>{author}</strong></p>
          <Link to= {`/post/${id}`} className="btn btn-primary">More...</Link>
        </div>
      </div>
    </div>
  )
}
