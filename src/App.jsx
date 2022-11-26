import React, { useState } from "react";
import '../src/styles/App.css'
import Header from "./components/Header";
import Register from "./components/Register";
import Presentation from "./components/Presentation"


function App() {

  return (
    <div className="App">
        <Header/>
        <Register/>
        <Presentation/>
        

    </div>
  );
}

export default App;
