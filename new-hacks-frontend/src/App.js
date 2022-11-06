import React from 'react';
import Nav from './components/Navbar';
import Footer from './components/Footer';
import Forms from './components/Forms';
import { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Recall from './components/Recall';

function App() {

  // const [used, setUsed] = useState(false);

  // useEffect(() => {
  //   setUsed(false);
  // }, [])

  // const handleInitialSummarize = () => {
  //   setUsed(true);
  // }

  return (
    <div className="App">
      <Nav />
      <Forms />
      {/* <Recall currState={used}/> */}
      <Footer />
    </div>
  );
}

export default App;
