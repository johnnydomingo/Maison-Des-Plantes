import Feed from "../components/Feed.jsx";
import HowItWorks from "../components/HowItWorks.jsx";
import '../css/Home.css';
import { Link } from "react-router-dom";





const Home = ({ posts, currentUser }) => {
  return (
    <div className="home">
      <div className="landing-message">
      <div className="sub-heading">
        <h4 id="home">A Place to Share Your House Plants...</h4>
      </div>
      <div id="share">
        <h5>
          Calling all plant parents who want to show off their plant babies.
        </h5>
      </div>
      {currentUser ? (
        <div className="drop-something">
          <Link id="home-button"to="/create-post">
            <button type="button" className="home-button">
              Drop Somethin'
            </button>
          </Link>
        </div>
      ) : (
        <Link id="home-button" to="/login">Drop Somethin'</Link>
      )}
      </div>
      <div className="home-image">
        <img className="landing-image"
          src="https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_large-monstera_gallery_large_all_all_04_768x.jpg?v=1624309866"
          alt="title"
        />
      </div>
      <br />
      <HowItWorks />
      <br />
      <Feed
        posts={posts}
      />
      <br />
    </div>
  );
};

export default Home;
