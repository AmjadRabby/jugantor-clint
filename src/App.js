import "./App.css";
import Home from "./components/Home/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NewsDetails from "./components/Pages/NewsDetails/NewsDetails";
import Nav from "./components/Home/Header/Navbar/Nav";
import Navbar from "./components/Home/Header/Navbar/Navbar";

function App() {
  return (
    <div className="">
      <Router>
        <Nav />
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/:key">
            {" "}
            <NewsDetails />{" "}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
