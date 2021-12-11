import React from 'react';

const Feed = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <p>{post.content}</p>
      ))}
    
    </div>
  )
}

export default Feed;