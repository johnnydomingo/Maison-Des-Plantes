import { useEffect, useState } from 'react';
import { Route, Routes, useHistory } from 'react-router-dom';
import PostCreate from '../components/PostCreate.jsx';
import PostEdit from '../components/PostEdit';
import Home from '../screens/Home';
import PostDetail from '../screens/PostDetails';
import { getAllPosts, postPost, putPost, deletePost } from '../services/post';



const MainContainer = ({ currentUser }) => {
  const [posts, setPosts] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchPosts = async () => {
      const postList = await getAllPosts();
      setPosts(postList);
    };
    fetchPosts();
  }, []);

  const handlePostCreate = async (formData) => {
    const newPost = await postPost(formData);
    setPosts((prevState) => [...prevState, newPost]);
    history.push('/');
  };

  const handlePostUpdate = async (id, formData) => {
    const newPost = await putPost(id, formData);
    setPosts((prevState) =>
      prevState.map((post) => {
        return post.id === Number(id) ? newPost : post;
      })
    );
    history.push('/');
  };

  const handlePostDelete = async (id) => {
    await deletePost(id);
    setPosts((prevState) => prevState.filter((post) => post.id !== id));
  };

  return (
    <div>
      <Route>
        <Route path='/posts/:id/edit'>
          <PostEdit posts={posts} handlePostUpdate={handlePostUpdate} />
        </Route>
        <Route path='/posts/new'>
          <PostCreate handlePostCreate={handlePostCreate}/>
        </Route>
        <Route path='/posts/:id'>
          <PostDetail currentUser={currentUser} />
        </Route>
        <Route path='/'>
          <Home
            posts={posts}
            handlePostDelete={handlePostDelete}
            currentUser={currentUser}
          />
        </Route>
      </Route>
    </div>
  )
}
export default MainContainer;