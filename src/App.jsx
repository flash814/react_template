import React, { useState } from "react";
import '../src/styles/App.css'
import '../src/styles/bootstrap-grid.min.css'
import '../src/styles/bootstrap-reboot.min.css'
import Header from "./components/Header";
import Register from "./components/Register";
import Slider from "./components/Slider";

function App() {

  return (
    <div className="App">
        <Header/>
        <Register/>
        <Slider/>

    </div>
  );
}

export default App;
