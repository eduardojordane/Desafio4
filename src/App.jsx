import React from "react";
import {useState} from 'react';
import Router from "./components/Router/Router";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Toggle from './components/Toggle/Toggle';

//Linha de teste

function App() {
  const [isBright, setisBright] = useState(false)

  return (
    <div className="App" bright-theme={isBright ? "bright" : "dark"}>
      <Header />
      <Toggle 
        isChecked={isBright}
        handleChange={() => setisBright(!isBright)}
      />
      <Router />
      <Footer />
    </div>
  );
}

export default App;