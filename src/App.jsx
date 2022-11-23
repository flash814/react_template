import React, { useState } from "react";
import '../src/styles/App.css'
import '../src/styles/bootstrap-grid.min.css'
import '../src/styles/bootstrap-reboot.min.css'
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import Header from "./components/Header";
import Register from "./components/Register";

function App() {

  const [value, setValue] = useState( 'Текст в инпуте')

  return (
    <div className="App">
        <Header/>
        <Register/>

    </div>
  );
}

export default App;
