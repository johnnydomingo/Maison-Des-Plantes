import Post from '../components/Post';




const PostDetails = ({ currentUser, handlePostDelete}) => {
  return (
    <div className="post-details">
      <Post
        currentUser={currentUser}
        handlePostDelete={handlePostDelete}
      />
    </div>
  )
}

export default PostDetails;