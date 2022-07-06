import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  withRouter,
  Route
} from "react-router-dom";

function App() {
  const [darkMode, setdarkMode] = useState('light'); //State variable to show if darkmode enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }


  const toggleMode = () =>{

    if(darkMode === 'light')
      {
        setdarkMode('dark')
        document.body.style.backgroundColor = '#1f3041';
        showAlert("Dark mode has been enabled", "success");
      }
    
    if(darkMode === 'dark')
      {
        setdarkMode('light')
        document.body.style.backgroundColor = 'white';
        showAlert("Light mode has been enabled", "success");
      }
  }

  return (

    <>
    <Router>
    <Navbar title="TextUtils" aboutText = "About" darkMode={darkMode} toggleMode = {toggleMode} />
    <Alert alert={alert}/>
      <div className="container my3">
        <Routes>
          <Route exact path="/about" element={<About />}>
          </Route>
          <Route exact path="/" element={<TextForm heading = "Enter the text to analyze" darkMode={darkMode} toggleMode = {toggleMode}/>}>
          </Route>
        </Routes>
      </div>
    </Router>
    
    </>
    );
}

export default App;

//`npm run start` to run the server