import Post from '../components/Post';
// import PostCard from '../components/PostCard'


const PostDetails = ({ currentUser, handlePostDelete}) => {
  return (
    <div className="post-details">
      {/* <PostCard /> */}
      <Post
        currentUser={currentUser}
        handlePostDelete={handlePostDelete}
      />
      
    </div>
  )
}

export default PostDetails;