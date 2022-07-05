import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [darkMode, setdarkMode] = useState('light'); //State variable to show if darkmode enabled or not

  const toggleMode = () =>{

    if(darkMode === 'light')
      {
        setdarkMode('dark')
        document.body.style.backgroundColor = 'black';
      }
    
    if(darkMode === 'dark')
      {
        setdarkMode('light')
        document.body.style.backgroundColor = 'white';
      }

      console.log(darkMode)
  }

  return (

    <>
    <Navbar title="TextUtils" aboutText = "About" darkMode={darkMode} toggleMode = {toggleMode} />
    <div className="container my3">
      <TextForm heading = "Enter the text to analyze"/>
    </div>
    
    
    </>
    );
}

export default App;

//`npm run start` to run the server