import React, { useState } from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Grid from "./components/Grid";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <div className="App">
      {!menuOpen && (
        <>
          <div className="fixed inset-0 z-20 shadow-xl bg-white mx-20 my-32 min-w-fit">
            Modal
            <button type="button" onClick={() => setMenuOpen(!menuOpen)}>
              _x
            </button>
          </div>
          <div className="fixed inset-0 z-10"></div>
        </>
      )}
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero menuOpen={menuOpen} />
      <Grid />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;
