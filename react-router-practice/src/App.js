import React from "react"
import {Switch, Link, Route} from "react-router-dom"
import './App.css';
import About from "./About";
import Home from "./Home"
import Services from "./Services"

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
      </nav>
    <main>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>        
        <Route exact path="/about">
          <About />
        </Route>        
        <Route exact path="/services">
          <Services />
        </Route>
      </Switch>
    </main>
<br/>
    <footer>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/services">Services</Link>
    </footer>

    </div>
  );
}

export default App;
