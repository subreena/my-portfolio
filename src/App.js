import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Component/HomePage/Home/Home';
import Blog from './Component/Blog/Blog';
import Contact from './Component/Contact/Contact';
import Works from './Component/Works/Works';
import About from './Component/About/About';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/about">
         <About></About>
        </Route>
        <Route exact path="/works">
          <Works></Works>
        </Route>
        <Route exact path="/blogs">
          <Blog></Blog>
        </Route>
        <Route exact path="/contact">
          <Contact></Contact>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
