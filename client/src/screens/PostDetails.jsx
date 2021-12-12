import Post from '../components/Post';



const PostDetails = ({ currentUser, handlePostDelete}) => {
  return (
    <div>
      <Post
        currentUser={currentUser}
        handlePostDelete={handlePostDelete}
      />
      
    </div>
  )
}

export default PostDetails;