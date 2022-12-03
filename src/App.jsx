import React, { useState } from "react";
import '../src/styles/App.scss'
import Header from "./components/Header";
import Register_slider from "./components/Register_slider";
import Presentation from "./components/Presentation"
import Find from "./components/Find";
import Footer from "./components/Footer";
import Feat from "./components/Feat";
import Feat__popup from "./components/popup__items/feat__popup";
import Part from "./components/Part";
function App() {
  const [modalActive, setModalActive] = useState(true)
  return (
    <div className="App">
        <Header/>       
        <Register_slider/>
        <Presentation/>
        <Find/>
        <Feat/>
        <Feat__popup/>
        <Part/>
        <Footer/>
        
    </div>
  );
}

export default App;
