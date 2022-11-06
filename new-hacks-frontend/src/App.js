import React from 'react';
import Nav from './components/Navbar';
import Footer from './components/Footer';


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <div className="App">
      <Nav />
      <h1>Hello world</h1>
      <Footer />
    </div>
  );
}

export default App;
