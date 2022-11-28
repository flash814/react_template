import React, { useState } from "react";
import '../src/styles/App.scss'
import Header from "./components/Header";
import { reg__slider } from "./components/reg__slider/reg__slider";
import Register_slider from "./components/Register_slider";
import Register from "./components/Register";
import Presentation from "./components/Presentation"
import Find from "./components/Find";
import Footer from "./components/Footer";
import Feat from "./components/Feat";
import Feat__items from "./components/Feat__items";
import Part from "./components/Part";
function App() {

  return (
    <div className="App">
        <Header/>       
        <Register_slider/>
        <Presentation/>
        <Find/>
        <Feat/>
        <Part/>
        <Footer/>

    </div>
  );
}

export default App;
