import './App.css';
import NavigationBar from './components/Navbar';
import "./style/landingpage.css"
import Intro from './components/Intro';
import Trending from "./components/Trending"
import Anime from "./components/Anime"

function App() {
  return (
  <div>
    <div className='myBG '>
      <NavigationBar/>
      <Intro />
    </div>

    <div className="trending">
      <Trending />  
    </div>

    <div className="anime">
      <Anime />
    </div>
  </div>
)
}

export default App;
