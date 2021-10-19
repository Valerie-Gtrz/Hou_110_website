import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./home/Home";
import About from "./about/About";
import Contact from "./contact/Contact";
import NotFound from "../src/errors/NotFound";

function App() {
  return (
    <Router>
    <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/about">
      <About />
    </Route>
    <Route path="/home">
      <Home />
    </Route>
    <Route path="/contact">
      <Contact />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
    </Router>
  );
}

export default App;
