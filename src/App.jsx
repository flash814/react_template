import React from "react";
import '../src/styles/App.scss'
import Header from "./components/Header";
import Register from "./components/Register";
import Presentation from "./components/Presentation"
import Find from "./components/Find";
import Footer from "./components/Footer";
import Feat from "./components/Feat";
import FEAT__POPUP from "./components/popup__items/FEAT__POPUP";
import Part from "./components/Part";

function App() {
  return (
    <div className="App">
        <Header/>       
        <Register/>
        <Presentation/>
        <Find/>
        <Feat/>
        <FEAT__POPUP/>
        <Part/>
        <Footer/>
        
    </div>
  );
}

export default App;
