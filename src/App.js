import React from "react";
import PhotoParent from "./childFolder/grandChildFolder/PhotoParent"
import DateChanger from "./childFolder/DateChanger"
import "./App.css";

function App() {

  return (
    <div className="App">
      <h1>NASA: Photo of the Day</h1>
      <p><DateChanger /></p>
      <div className="image-card">
        <PhotoParent /> 
      </div>
    </div>
   
  );
}

export default App;
