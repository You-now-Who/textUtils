//RFC to generate this template

import React, { useState } from "react";

//props are simply stuff that you can pass on and change. So if you want to use the same form component, but change the title at the top, you can pass in a prop from the index.js file
//This is the func to run all of the code
export default function TextForm(props) {
  //states are nothing more than variables that refresh the screen when changed
  //here we set up a 'state' called text which can only be updated by using the func 'setText()'
  const [text, setText] = useState("");

  //Setting up a function to handle if the Uppercase button in the form below, is clicked
  const handleUpClick = () => {
    console.log("Uppercase was clicked");
    let s = text.toUpperCase();
    setText(s);
    props.showAlert("Converted text successfully to uppercase", "success");
  };

  //Setting up a function to handle if the Lowercase button in the form below, is clicked
  const handleLowClick = () => {
    console.log("Lowercase was clicked");
    let s = text.toLowerCase();
    setText(s);
    props.showAlert("Converted text successfully to lowercase", "success");
  };

  //Setting up a function to handle if the Lowercase button in the form below, is clicked
  const handleCapitalFirstClick = () => {
    console.log("Capital Case was clicked");

    //split the above string into an array of strings
    //whenever a blank space is encountered

    const arr = text.toLowerCase().split(" ");

    //loop through each element of the array and capitalize the first letter.

    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    setText(arr.join(" "));
    props.showAlert("Converted text successfully to capitalcase", "success");
  };

  //Setting up a function to handle any extra spaces
  const handleExtraSpaces = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showAlert("Removed extra whitespaces successfully", "success");
  };

  //Setting up a function to copy text
  const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied text to the clipboard", "success");
    }

  //Setting up a function to handle any extra spaces
  const handleClear = () => {
    setText('');
    props.showAlert("Cleared text", "success");
  };

  //Setting up a function to handle any changes in the text area
  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };


  //Now that we have set up all of the functions, we will send back the jsx, ie the html code that we needed in the first place

  return (
    <>
      {/* Simple div */}
      <div className="container my-5" style={{color: props.darkMode === 'dark' ? 'white':'black'}}>
        <h1>{props.heading} </h1>
        <div className="mb-3">
          {/* Text area for the text to go in */}
          <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" placeholder="Enter your text here" style={{backgroundColor: props.darkMode === 'dark' ? '#1f3041':'white', color: props.darkMode === 'dark' ? 'white':'black'}}></textarea>
        </div>

        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}> Convert to uppercase </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to lowercase </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCapitalFirstClick}> Capitalise first letter </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}> Remove extra white spaces </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}> Copy text </button>
        <button className="btn btn-danger mx-2 my-2" onClick={handleClear}> Clear text </button>
      
      </div>

      <div className="container my-3" style={{color: props.darkMode === 'dark' ? 'white':'black'}}>
        {/* Summary of text */}
        <h2>Your text summary:</h2>
        

        <p><strong>{text.length>0 ? text.trim().split(" ").length : 0}</strong> words, <strong>{text.length}</strong> characters </p>
        <p><strong>{(Math.round((text.length) / 42.7 * 1000) / 1000).toFixed(3)}</strong> minutes to read this text.</p>

        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
