import React from "react";
import { useAppSelector } from "./app/hooks";
import { selectModal } from "./components/Modal/modalSlice";

import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Modal from "./components/Modal";
import CV from "./components/CV";
import About from "./components/About";
import Demo from "./components/Demo";
import Contact from "./components/Contact";
// import Grid from "./components/Grid";
import "./App.css";

function App() {
  const showModal = useAppSelector(selectModal);

  return (
    <div className="App">
      <Modal />
      <div className={`${showModal && `fixed blur-sm`}`}>
        <Navbar />
        <Hero />
        {/* <Grid /> */}
        <About />
        <CV />
        <Demo />
        <Contact />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Counter />
        </header>
      </div>
    </div>
  );
}

export default App;
