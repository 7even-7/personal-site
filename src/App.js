import './App.css';
import Navs from './components/Navs';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Home from './components/Home';
import {Route, Routes} from "react-router-dom"
function App() {
 
  return (
    <>
      <Navs/ >
      <div className="contain">
        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/home" element = {<Home/>}/>
          <Route path = "/about" element = {<About/>}/>
          <Route path = "/skills" element = {<Skills/>}/>
          <Route path = "/contact" element = {<Contact/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
