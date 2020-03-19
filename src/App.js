import React from "react";
import PhotoParent from "./childFolder/grandChildFolder/PhotoParent"
import DateChanger from "./childFolder/DateChanger"
import "./App.css";
// import { Button } from 'reactstrap';

function App() {

  return (
    <div className="App">
      <h1>NASA: Photo of the Day</h1>
      <p><DateChanger /></p>
      <div className="image-card">
        <PhotoParent /> 
      </div>
      {/* <Button color="danger">Danger!</Button>  tester for if styled-compnent was working*/}
    </div>
   
  );
}

export default App;
