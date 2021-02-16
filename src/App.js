import "./App.css";
import Home from "./components/Home/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="">
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/users">{/* <Users /> */}</Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
