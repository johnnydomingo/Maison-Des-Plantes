const PostCard = () => {
  return (
    <div className='post-card'>
      <p id='content'>{post.content}</p>
      <img src={post.image_url} />

    </div>
  )
}