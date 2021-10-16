import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Team from './Team';
import Join from './Join';
import Footer from './Footer';

function App() {
  const tabs = [
    {
      title: "WORKSHOPS",
    },
    {
      title: "ABOUT",
    },
    {
      title: "TEAM",
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
      <Nav tabs={tabs}></Nav>
      <Home></Home>
      <About></About>
      <Team></Team>
      <Join></Join>
      <Footer></Footer>
    </div>
  );
}

export default App;
