import "./App.css";
import Header from "./component/common/header/Header";
import {
  // BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Home from "./component/home/Home";
import About from "./component/about/About";
import CourseHome from "./component/allcourses/CourseHome";
import Team from "./component/team/Team";
import Pricing from "./component/pricing/Pricing";

function App() {
  return (
    <>
      {/* <Router>
        <Header />
        <Home />
        <About />
         <Route path="/" component={Home} /> 
      </Router> */}

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<CourseHome />} />
          <Route path="/team" element={<Team />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
