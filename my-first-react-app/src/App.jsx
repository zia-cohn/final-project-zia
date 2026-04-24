import './App.css'

import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from"./pages/About.jsx";
import Profile from "./pages/Profile.jsx";
import TimelinePage from './pages/TimelinePage.jsx';


function App() {


  return (
    <BrowserRouter>
    <nav>
      <Link to="/">Home</Link> |{" "}
      <Link to="/about">About</Link> |{" "}
      <Link to="/profile">Profile</Link> | {" "}
      <Link to="/timelinePage">Timeline</Link>
    </nav>
    
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/timelinePage" element={<TimelinePage />}/>
      </Routes>

    
    </BrowserRouter>
   
    

  );

}


export default App;
