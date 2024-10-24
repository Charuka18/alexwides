import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router,Route, Routes} from "react-router-dom"
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Phototours from './components/phototours/phototours';
import Lessons from "./components/Lessons/lessons";
import Contact from './components/contact/contact';
import Collections from './components/collections/collections';
import Blog from './components/blog/blog';
import Alex from "./components/Alex/Alex";
import Panoramic from "./components/panoramic/panoramic";


function App() {
  return (
    <div>
      <Header></Header><br></br><br></br><br></br>
    <Router>
         <Routes>
              <Route exact path="/phototours" element={<Phototours/>}/> 
              <Route exact path="/lessons" element={<Lessons/>}/>
              <Route exact path="/contact" element={<Contact/>}/>
              <Route exact path="/collections" element={<Collections/>}/>
              <Route exact path="/blog" element ={<Blog/>}/>
              <Route exact path="/alex" element={<Alex/>}/>
              <Route exact path="/panoramic" element={<Panoramic/>}/>
              <Route exact path="/home" element={<Home/>}/>
              <Route path="/" element={<Home/>}/>
         </Routes>
    </Router>
    
  </div>
  );
}

export default App;
