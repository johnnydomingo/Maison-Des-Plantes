import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getOnePost } from '../services/post';
import { Link } from 'react-router-dom';


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
      {post ?
        currentUser.id === post.user_id && (
          <>
            <Link to={`/posts/${post.id}/edit`}>
              <button>Edit</button>
            </Link>
            <button onCLick={() => handlePostDelete(post.id)}>Delete</button>
          </>
        ) : null }
      <p>{post ? `${post.content}` : null}</p>
      <img src={post ? `${post.image_url}` : null} />
    </div>
  )
}
export default Post;