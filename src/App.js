import "./App.css";
import Header from "./component/common/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
      </Router>
    </>
  );
}

export default App;
