import React from "react";
import PhotoParent from "./childFolder/PhotoParent"
import "./App.css";
import PhotoCard from "./childFolder/PhotoCard";

function App() {
  return (
    <div className="App">
      <h1>NASA: Photo of the Day</h1>
      <p>I want to show the date here</p>
      <div className="image-card">
      <PhotoParent /> 
      {/* **CHANGE PHOTOCARD TO PHOTOPARENT ONCE YOU'VE RETURNED SOMETHING/DONE MAP */}
      </div>
    </div>
   
  );
}

export default App;
