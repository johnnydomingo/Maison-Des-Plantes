import Feed from '../components/Feed.jsx';

const Home = ({ posts }) => {

  return (
    <div>
      <Feed
      posts={posts}
      />
    </div>
  )
}

export default Home;