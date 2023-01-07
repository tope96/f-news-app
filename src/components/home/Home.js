import Navbar from '../navbar/Navbar';
import NewsList from '../news-list/NewsList';

function Home() {
  return (
    <div data-testid="home-component">
      <Navbar />
      <NewsList />
    </div>
  );
}

export default Home;
