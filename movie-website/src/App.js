import './App.css';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Pages from './pages/Bages';
import TvShows from './pages/TvShows';
import Celebs from './pages/Celebs';
import Blog from './pages/Blog';
import Nav from './components/Nav/Nav';
import Details from './pages/Details';
import { BrowserRouter as Router ,Routes , Route} from "react-router-dom";

function App() {
  return (
    <Router>
    <Nav></Nav>
    
     <Routes className="ms-auto">
     <Route path="/" element={<Home />} />
     <Route path="/Movies/:title/" element={<Movies />} />
     <Route path="/Pages" element={<Pages />} />
     <Route path="/TvShows" element={<TvShows/>}/>
     <Route path="/Celebs" element={<Celebs/>}/>
     <Route path="/Blog" element={<Blog/>}/>
     <Route path="/Details/:id/" element={<Details/>}/>
    </Routes> 
    </Router>
    
    );
}

export default App;
 