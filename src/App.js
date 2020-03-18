import React, {useState, useEffect} from "react";
import PhotoParent from "./childFolder/PhotoParent"
import DateChanger from "./childFolder/DateChanger"
import "./App.css";

function App() {

  return (
    <div className="App">
      <h1>NASA: Photo of the Day</h1>
      <p><DateChanger /></p>
      <div className="image-card">
      <PhotoParent /> 
      {/* **CHANGE PHOTOCARD TO PHOTOPARENT ONCE YOU'VE RETURNED */}
      </div>
    </div>
   
  );
}

export default App;
