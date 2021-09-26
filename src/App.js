import React from 'react';
import Home from './components/Home/Home';
import Gallery from './components/Gallery/Gallery';
import GallerySecondary from './components/Gallery/GallerySecondary';
import ImageContainer from './components/Gallery/ImageContainer';
import './App.css';

import Navbar from './components/UI/Navbar';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
  <React.Fragment>
  <Navbar/>
  <Switch>
          <Route path="/gallerysec">
            <GallerySecondary />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/image">
            <ImageContainer />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

  </React.Fragment>
  </Router>
  );
}

export default App;
