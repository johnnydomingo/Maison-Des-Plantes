import React from "react";
import { Link } from "react-router-dom";
import "../css/Feed.css";

const Feed = ({ posts }) => {
  return (
    <div className="feed">
      {posts?.map((post) => (
        <div key={post.id}>
          <div className="hover">
            <Link to={`/posts/${post.id}`}>
              <img id="feed-image" src={post?.image_url} alt="title" />
              <p id="feed-user">by: {post?.user?.first_name} {post?.user?.last_name}
              </p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feed;
