import PostEdit from "../components/PostEdit";

const PostEdit = ({ posts, handlePostUpdate }) => {
  return (
    <div>
      <PostEdit
        posts={posts}
        handlePostUpdate={handlePostUpdate}
      />
    </div>
  )
}