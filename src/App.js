import React from "react"
import PhotoParent from "./childFolder/grandChildFolder/PhotoParent"
import DateChanger from "./childFolder/DateChanger"
import "./App.css"
import styled from "styled-components"

function App() {
  const BlueDiv = styled.div`
    color: white;
    background-image: url("https://images.unsplash.com/photo-1465101162946-4377e57745c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1357&q=80");
    font-family: 'Anton', sans-serif;
    padding: 2% 0;
    width:100%;
    background-size: cover;
    background-repeat:no-repeat;
    &:hover{
      background-image: url("https://images.unsplash.com/photo-1462726625343-6a2ab0b9f020?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80");
      color: darkslategrey;
    }
  `;
  return (
    <div className="App">
      <BlueDiv className ="header">
        <h1>NASA: Photo of the Day</h1>
        {/* <h3><DateChanger />Embrace Science</h3> */}
      </BlueDiv>
      <div className="image-card">
        <PhotoParent /> 
      </div>
     
    </div>
   
  );
}

export default App;
