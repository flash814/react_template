import React, { useState } from "react";
import '../src/styles/App.css'
import '../src/styles/bootstrap-grid.min.css'
import '../src/styles/bootstrap-reboot.min.css'
import Header from "./components/Header";
import Register from "./components/Register";
import Slider from "./components/Slider";
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
