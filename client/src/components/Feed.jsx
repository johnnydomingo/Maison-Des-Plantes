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
              
            {/* } */}
          {/* <p>{post.content}</p> */}
            <img id="post-image" src={post?.image_url} alt="title" />
            <p>{post?.user?.first_name} {post?.user?.last_name}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Feed;
