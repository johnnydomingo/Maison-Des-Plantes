import Post from '../components/Post';
import PostCard from '../components/PostCard'


const PostDetails = ({ currentUser, handlePostDelete}) => {
  return (
    <div>
      {/* <PostCard /> */}
      <Post
        currentUser={currentUser}
        handlePostDelete={handlePostDelete}
      />
      
    </div>
  )
}

export default PostDetails;