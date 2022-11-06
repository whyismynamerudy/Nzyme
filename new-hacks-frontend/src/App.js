import React from 'react';
import Nav from './components/Navbar';
import Footer from './components/Footer';
import Forms from './components/Forms';


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <div className="App">
      <Nav />
      <Forms />
      <Footer />
    </div>
  );
}

export default App;
