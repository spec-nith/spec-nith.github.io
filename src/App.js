import Home from './components/Home/Home';
import Gallery from './components/Gallery/Gallery';
import GallerySecondary from './components/Gallery/GallerySecondary';

import './App.css';
import React from 'react';
import Navbar from './components/UI/Navbar';


function App() {
  return (
  <React.Fragment>
  <Navbar/>
  {/* <Home/> */}
  <GallerySecondary /> 
  </React.Fragment>
  );
}

export default App;
