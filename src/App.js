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
import Blog from "./component/blog/Blog";
import Contact from "./component/contact/Contact";
import Footer from "./component/common/footer/Footer";
// bhargav update
import Login from './component/Login';
import Registration from './component/Registration';
import Admin from './component/Admin';
import Client from './component/Client';


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
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />

          {/* bhargav update */}
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/client" element={<Client />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
