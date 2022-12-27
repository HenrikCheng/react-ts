import React, { useState, useRef, MutableRefObject, useEffect } from "react";

interface AppProps {
  message: string;
}

const Hero = ({ message }: AppProps): JSX.Element => {
  const [mouseX, setMouseX] = useState();
  const [mouseY, setMouseY] = useState();
  const [mouseXColor, setMouseXColor] = useState("");
  const [mouseYColor, setMouseYColor] = useState("");
  const [screenY, setScreenY] = useState(0);

  const heroBottomAnchor = useRef() as MutableRefObject<HTMLDivElement>;

  const transitionClasses =
    "transition ease-in-out delay-150 group-hover:-translate-y-1 group-hover:scale-110 duration-300";

  const executeScroll = () => {
    heroBottomAnchor.current.scrollIntoView();
  };

  document.onmousemove = handleMouseMove;

  function handleMouseMove(event: any) {
    event = event || window.event; // IE-ism

    setMouseX(event.pageX);
    setMouseY(event.pageY);

    if (event.pageY > 1000) {
      setMouseYColor("to-pink-900");
    } else if (event.pageY > 900) {
      setMouseYColor("to-pink-800");
    } else if (event.pageY > 800) {
      setMouseYColor("to-pink-700");
    } else if (event.pageY > 700) {
      setMouseYColor("to-pink-600");
    } else if (event.pageY > 600) {
      setMouseYColor("to-pink-500");
    } else if (event.pageY > 500) {
      setMouseYColor("to-pink-400");
    } else if (event.pageY > 400) {
      setMouseYColor("to-pink-300");
    } else if (event.pageY > 300) {
      setMouseYColor("to-pink-200");
    } else if (event.pageY > 200) {
      setMouseYColor("to-pink-100");
    } else if (event.pageY > 100) {
      setMouseYColor("to-pink-50");
    } else setMouseYColor("to-white");

    if (event.pageX > 1000) {
      setMouseXColor("from-indigo-900");
    } else if (event.pageX > 900) {
      setMouseXColor("from-indigo-800");
    } else if (event.pageX > 800) {
      setMouseXColor("from-indigo-700");
    } else if (event.pageX > 700) {
      setMouseXColor("from-indigo-600");
    } else if (event.pageX > 600) {
      setMouseXColor("from-indigo-500");
    } else if (event.pageX > 500) {
      setMouseXColor("from-indigo-400");
    } else if (event.pageX > 400) {
      setMouseXColor("from-indigo-300");
    } else if (event.pageX > 300) {
      setMouseXColor("from-indigo-200");
    } else if (event.pageX > 200) {
      setMouseXColor("from-indigo-100");
    } else if (event.pageX > 100) {
      setMouseXColor("from-indigo-50");
    } else setMouseXColor("from-white");
  }

  useEffect(() => {}, []);

  return (
    <div
      className={`${mouseXColor} bg-gradient-to-r ${mouseYColor} h-screen flex justify-center items-center flex-col relative saturate-200 group`}
      ref={(el) => {
        if (!el) return;
        console.log(el.getBoundingClientRect().top);
      }}
    >
      <div
        id="TextContainer"
        className={`absolute ${
          mouseY && mouseY > 300
            ? "text-gray-100"
            : "text-gray-900 shadow-indigo-500/40"
        }`}
      >
        <h1 className={`text-7xl bold ${transitionClasses}`}>
          Merry Christmas
        </h1>
        <h3 className={`text-4xl bold mb-5 ${transitionClasses}`}>
          & Happy New Year
        </h3>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl mb-3"
          onClick={executeScroll}
        >
          Continue
        </button>
        <div className="flex flex-row justify-center space-x-6">
          <div className="text-semibold text-lg">X: {mouseX}</div>
          <div className="text-semibold text-lg">Y: {mouseY}</div>
        </div>
      </div>
      <div ref={heroBottomAnchor} className="absolute bottom-0" />
    </div>
  );
};

export default Hero;
