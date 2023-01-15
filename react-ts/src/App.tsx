import React from "react";
import { useAppSelector, useAppDispatch } from "./app/hooks";
import { toggleModal, selectModal } from "./components/Modal/modalSlice";

import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// import Grid from "./components/Grid";
import "./App.css";

function App() {
  const showModal = useAppSelector(selectModal);
  const dispatch = useAppDispatch();

  return (
    <div className="App">
      {showModal && (
        <>
          <div className="fixed inset-0 z-20 shadow-xl bg-white mx-20 my-32 min-w-fit">
            Modal
            <button type="button" onClick={() => dispatch(toggleModal())}>
              _x
            </button>
          </div>
          <div className="fixed inset-0 z-10"></div>
        </>
      )}
      <Navbar />
      <Hero />
      {/* <Grid /> */}
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
