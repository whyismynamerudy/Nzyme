import logo from './logo.svg';
import './App.css';




function App() {
  return (
    
    <div className="App">
      <h1>Summarizer App</h1>

    <div>
      <form className  = "Label1">
        <label >
        Text Input Box:
        
        <input type="text" name="name" className = "App-Form1"/>
        <style>
          background-color : #ffc;
        </style>
        </label >
        <input type="submit" value="Submit" />
      </form>

      <form className  = "Label2">
        <label   >
        Summary Box:

        <input type="text" name="name" className = "App-Form2" />
        </label>
        <style>
        </style>
        <input type="submit" value="Submit" />
      </form>
    </div>

    





      {/* find out out to use app*/}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        {/* this is used for importing the react symbol*/}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>



  );  
}

export default App;



  


