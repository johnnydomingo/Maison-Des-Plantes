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

//   let user = [];
//   post.map((post) => (
//     let newUser = user.find((name)=> name)
// ))

  return (
    <div>
      {post ?
        currentUser?.id === post?.user_id && (
          <>
            <Link to={`/posts/${post.id}/edit`}>
              <button>Edit</button>
            </Link>
            <button onClick={() => handlePostDelete(post.id)}>Delete</button>
          </>
        ) : null}
      <div className="post-card">
        <article>{post ? `${post.user_id}` : null}</article>
        <p>{post ? `${post.content}` : null}</p>
        <img src={post ? `${post.image_url}` : null} />
        </div>
    </div>
  )
}
export default Post;