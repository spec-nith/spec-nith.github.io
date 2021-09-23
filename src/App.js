import Home from './components/Home/Home'
import './App.css';
import React from 'react';
import Navbar from './components/UI/Navbar';

function App() {
  return (<React.Fragment>
  <Navbar/>
  <Home/>
  </React.Fragment>
  );
}

export default App;
