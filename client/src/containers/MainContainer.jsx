import { useEffect, useState } from 'react';
import { Route, useHistory } from 'react-router-dom';
import '../css/MainContainer.css';
import PostCreate from '../components/PostCreate.jsx';
import EditForm from '../components/EditForm';
import Home from '../screens/Home';
import About from '../screens/About';
import PostDetail from '../screens/PostDetails';
import { getAllPosts, postPost, putPost, deletePost } from '../services/post';



const MainContainer = ({ currentUser }) => {
  const [posts, setPosts] = useState([]);
  const history = useHistory();
  

  useEffect(() => {
    const fetchPosts = async () => {
      const postList = await getAllPosts();
      const sortPosts = postList.sort(function (a, b) {
        let time1 = new Date(a.created_at);
        let time2 = new Date(b.created_at);
        return time2 - time1;
      });
      setPosts(sortPosts);
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
    history.push('/');
  };

  // posts.sort(function (a, b) {
  //   let time1 = new Date(a.created_at);
  //   let time2 = new Date(b.created_at);
  //   return time2 - time1;
  // });

  return (
    <div className='main-container'>
      <Route>
        <Route path='/create-post'>
          <PostCreate
            handlePostCreate={handlePostCreate}
          /> 
        </Route>
        <Route path='/posts/:id'>
          <PostDetail currentUser={currentUser}
            handlePostDelete={handlePostDelete}
          />
          <Route path='/posts/:id/edit'>
            <EditForm
              currentUser={currentUser}
              handlePostUpdate={handlePostUpdate}
            />
          </Route>
        </Route>
        <Route exact path='/'>
          <Home
            posts={posts}
            handlePostDelete={handlePostDelete}
            currentUser={currentUser}
          />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        </Route>
    </div>
  )
}
export default MainContainer;