import React from 'react';

const Feed = ({ posts, handlePostDelete, currentUser }) => {
  // logic to connect user_id to first_name and last_name
  return (
    <div>
      {posts.map((post) => (
        <div>
          <p>{post.user_id}</p>
          <p>{post.content}</p>
          <img src={post.image_url} />
        </div>
      ))}
    
    </div>
  )
}

export default Feed;