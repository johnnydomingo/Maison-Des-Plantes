import React from "react";
import { Link } from "react-router-dom";

const Feed = ({ posts, handlePostDelete, currentUser }) => {
  // logic to connect user_id to first_name and last_name
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <p>{post.user_id}</p>
          <p>{post.content}</p>
          <img src={post.image_url} />

          {currentUser?.id === post.user_id && (
            <>
              <Link to={`/posts/${post.id}/edit`}>
                <button>Edit</button>
              </Link>
              <button onCLick={() => handlePostDelete(post.id)}>Delete</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Feed;
