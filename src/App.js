import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Team from './Team';
import Join from './Join';
import Footer from './Footer';
import Workshops from './Workshops';
import Hackathons from './Hackathons';

function App() {
  const tabs = [
    {
      title: "ABOUT",
    },
    {
      title: "TEAM",
    },
    {
      title: "WORKSHOPS",
    },
    {
      title: "HACKATHONS",
    },
    {
      title: "JOIN",
    }
  ]

  return (
    <div className="App">
      <Nav tabs={tabs} />
      <Home />
      <About />
      <Team />
      <Workshops />
      <Hackathons />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
