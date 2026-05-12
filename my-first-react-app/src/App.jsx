import './App.css'

import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from"./pages/About.jsx";
// import Profile from "./pages/Profile.jsx";
import TimelinePage from './pages/TimelinePage.jsx';
import Culture from './pages/Culture.jsx';
import HistoryQuiz from "./pages/HistoryQuiz.jsx";
import CultureQuiz from "./pages/CultureQuiz.jsx";
import QuizSelector from './components/QuizSelector.jsx';
import Sources from './pages/Sources.jsx';


function App() {


  return (
    <BrowserRouter>
    <nav>
      <Link to="/">Home</Link> |{" "}
      <Link to="/about">About</Link> |{" "}
      {/* <Link to="/profile">Profile</Link> | {" "} */}
      <Link to="/timelinePage">History</Link> | {" "}
      <Link to="/culture">Culture </Link> | {" "} 
      <QuizSelector /> { " | " }
      {/* <Link to="/historyquiz">History Quiz</Link> | {" "} */}
      <Link to="/sources">Sources</Link>
    </nav>
    
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/profile" element={<Profile />} /> */}
        <Route path="/timelinePage" element={<TimelinePage />}/>
        <Route path="/culture" element={<Culture />} /> 
        <Route path="/historyquiz" element={<HistoryQuiz />}/>
        <Route path="/culturequiz" element={<CultureQuiz />}/>
        <Route path="/sources" element={<Sources />}/>
      </Routes>

    
    </BrowserRouter>
   
    

  );

}


export default App;
