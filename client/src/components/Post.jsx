import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getOnePost } from '../services/post';
import { Link } from 'react-router-dom';
import '../css/Post.css';


const Post = ({ currentUser, handlePostDelete }) => {
  const [post, setPost] = useState(null);
  const { id } = useParams();
  
  useEffect(() => {
    const fetchPost = async () => {
      const postContent = await getOnePost(id);
      setPost(postContent);
    };
    fetchPost();
  }, [id]);

  return (
    <div>
      {/* {post ?
        currentUser?.id === post?.user_id && (
          <>
            <Link to={`/posts/${post.id}/edit`}>
              <button className="edit-button">Edit</button>
            </Link>
            <button className="delete-button" onClick={() => handlePostDelete(post.id)}>Delete</button>
          </>
        ) : null} */}
      <div className="post-card">
        <img id="post-details-image" src={post ? `${post.image_url}` : null} alt="title" />
        <div className="post-text">
        <article id="author">{post ? `${post.user.first_name} ${post.user.last_name}` : null}</article>
        <p id="content">{post ? `${post.content}` : null}</p>
        </div>
        {post ?
        currentUser?.id === post?.user_id && (
          <>
            <Link to={`/posts/${post.id}/edit`}>
              <button className="edit-button">Edit</button>
            </Link>
            <button className="delete-button" onClick={() => handlePostDelete(post.id)}>Delete</button>
          </>
        ) : null}
      </div>
    </div>
  )
}
export default Post;