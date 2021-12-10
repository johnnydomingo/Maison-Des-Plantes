import { useEffect, useState } from 'react';




const MainContainer = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const postList = await getAllPosts();
      setPosts(postList);
    };
    fetchPosts;
  }, []);





  return (
    <div>
    </div>
  )
}
export default MainContainer;