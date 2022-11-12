import "./App.css";
import Header from "./component/common/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./component/home/Home";
import About from "./component/about/About";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Home />
        <About />
        {/* <Route path="/" component={Home} /> */}
      </Router>
    </>
  );
}

export default App;
