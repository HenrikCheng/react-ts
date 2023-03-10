import React, { useState, useRef, MutableRefObject, useEffect } from "react";

const Hero = () => {
  const [mouseX, setMouseX] = useState<number | null>();
  const [mouseY, setMouseY] = useState<number | null>();
  const [mouseXColor, setMouseXColor] = useState<string | null>();
  const [mouseYColor, setMouseYColor] = useState<string | null>();
  const [pixelsFromTop, setPixelsFromTop] = useState<number>(0);
  const [scrollBlur, setScrollBlur] = useState<string | null>();
  const [pixelsHeroTextTop, setPixelsHeroTextTop] = useState<
    number | undefined
  >();

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
  const onScroll = (e: any) => {
    setPixelsFromTop(e.target.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onScroll = (e: any) => {
      setPixelsFromTop(e.target.documentElement.scrollTop);
    };
    window.addEventListener("scroll", onScroll);
    updateHero();
    return () => window.removeEventListener("scroll", onScroll);
  }, [pixelsFromTop]);

  const updateHero = () => {
    if (!pixelsHeroTextTop) return;
    else if (-180 > pixelsHeroTextTop)
      return setScrollBlur("blur-3xl -translate-y-28");
    else if (-140 > pixelsHeroTextTop)
      return setScrollBlur("blur-2xl -translate-y-24");
    else if (-100 > pixelsHeroTextTop)
      return setScrollBlur("blur-xl -translate-y-20");
    else if (-60 > pixelsHeroTextTop)
      return setScrollBlur("blur-lg -translate-y-16");
    else if (-20 > pixelsHeroTextTop)
      return setScrollBlur("blur-md -translate-y-12");
    else if (10 > pixelsHeroTextTop)
      return setScrollBlur("blur -translate-y-8");
    else if (40 > pixelsHeroTextTop)
      return setScrollBlur("blur-sm -translate-y-4");
    else return setScrollBlur("");
  };

  return (
    <div className="h-screen flex flex-col">
      <div
        className={`${mouseXColor} bg-gradient-to-r ${mouseYColor} grow flex justify-center items-center flex-col group saturate-200 ${scrollBlur}`}
      >
        <div
          id="TextContainer"
          className={`${
            (mouseY && mouseY > 600) ||
            (mouseX && mouseX > 400 && mouseY && mouseY > 400)
              ? "text-gray-100"
              : "text-gray-900"
          }`}
        >
          <h1
            ref={(el) => {
              if (!el) return;
              setPixelsHeroTextTop(el.getBoundingClientRect().top);
            }}
            className={`text-7xl bold ${transitionClasses}`}
          >
            V??lkommen
          </h1>
          <h3 className={`text-4xl bold mb-5 ${transitionClasses}`}>
            till min sida
          </h3>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl mb-3"
            onClick={executeScroll}
          >
            Continue
          </button>
          {/* <div className="flex flex-row justify-center space-x-6">
            <div className="text-semibold text-lg">X: {mouseX}</div>
            <div className="text-semibold text-lg">Y: {mouseY}</div>
            <div className="text-semibold text-lg">
              pixelsFromTop: {pixelsFromTop}
            </div>
            <div className="text-semibold text-lg">
              pixelsHeroTextTop: {pixelsHeroTextTop}
            </div>
          </div> */}
        </div>
        <div ref={heroBottomAnchor} className="absolute bottom-0" />
      </div>
    </div>
  );
};

export default Hero;
