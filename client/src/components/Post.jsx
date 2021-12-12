import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getOnePost } from '../services/post';


const Post = ({post}) => {
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
      <p>{post.content}</p>
    </div>
  )
}
export default Post;