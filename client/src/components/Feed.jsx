import React from "react";
import { Link } from "react-router-dom";
import '../css/Feed.css'



const Feed = ({ posts, handlePostDelete, currentUser }) => {
  return (
    <div>
      {posts?.map((post) => (
        <div key={post.id}>
          <Link to={`/posts/${post.id}`}>
            {/* { post?.user &&  */}
              <p>{post?.user?.first_name} {post?.user?.last_name}</p>
            {/* } */}
          {/* <p>{post.content}</p> */}
          <img id="post-image" src={post?.image_url} alt="title" />
          </Link>
          {/* {currentUser?.id === post.user_id && (
            <>
              <Link to={`/posts/${post.id}/edit`}>
                <button>Edit</button>
              </Link>
              <button onCLick={() => handlePostDelete(post.id)}>Delete</button>
            </>
          )}  */}
        </div>
      ))}
    </div>
  );
};

export default Feed;
