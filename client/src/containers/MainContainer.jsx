import { useEffect, useState } from 'react';




const MainContainer = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const postList = await getAllPosts();
      setFoods(postList);
    };
    fetchPosts;
  }, []);





  return (
    <div>
    </div>
  )
}
export default MainContainer;