import { useState, useRef, MutableRefObject, useEffect } from "react";
import { useAppDispatch } from "../../app/hooks";

import { updateBgColor, updateTextColor } from "./colorSlice";

const Hero = () => {
  const [mouseX, setMouseX] = useState<number | null>();
  const [mouseY, setMouseY] = useState<number | null>();
  const [mouseYColor, setMouseYColor] = useState<string | null>();
  const [pixelsFromTop, setPixelsFromTop] = useState<number>(0);

  const heroBottomAnchor = useRef() as MutableRefObject<HTMLDivElement>;
  const dispatch = useAppDispatch();

  const transitionClasses =
    "transition ease-in-out delay-150 group-hover:scale-110 duration-300";

  const executeScroll = () => {
    heroBottomAnchor.current.scrollIntoView();
  };

  document.onmousemove = handleMouseMove;
  function handleMouseMove(event: any) {
    if (window.innerWidth >= 640) {
      event = event || window.event; // IE-ism
      setMouseX(event.pageX);
      setMouseY(event.pageY);

      if (event.pageY > 900) {
        setMouseYColor("bg-slate-800");
      } else if (event.pageY > 800) {
        setMouseYColor("bg-slate-700");
      } else if (event.pageY > 700) {
        setMouseYColor("bg-slate-600");
      } else if (event.pageY > 600) {
        setMouseYColor("bg-slate-500");
      } else if (event.pageY > 500) {
        setMouseYColor("bg-slate-400");
      } else if (event.pageY > 400) {
        setMouseYColor("bg-slate-300");
      } else if (event.pageY > 300) {
        setMouseYColor("bg-slate-200");
      } else if (event.pageY > 200) {
        setMouseYColor("bg-slate-100");
      } else if (event.pageY > 100) {
        setMouseYColor("bg-slate-50");
      } else setMouseYColor("to-white");
    }
  }

  useEffect(() => {
    if (window.innerWidth < 640) {
      if (window.scrollY > 900) {
        setMouseYColor("bg-slate-800");
      } else if (window.scrollY > 800) {
        setMouseYColor("bg-slate-700");
      } else if (window.scrollY > 700) {
        setMouseYColor("bg-slate-600");
      } else if (window.scrollY > 600) {
        setMouseYColor("bg-slate-500");
      } else if (window.scrollY > 500) {
        setMouseYColor("bg-slate-400");
      } else if (window.scrollY > 400) {
        setMouseYColor("bg-slate-300");
      } else if (window.scrollY > 300) {
        setMouseYColor("bg-slate-200");
      } else if (window.scrollY > 200) {
        setMouseYColor("bg-slate-100");
      } else if (window.scrollY > 100) {
        setMouseYColor("bg-slate-50");
      } else setMouseYColor("to-white");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.scrollY]);

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
    return () => window.removeEventListener("scroll", onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pixelsFromTop]);

  useEffect(() => {
    dispatch(updateBgColor(mouseYColor));
  }, [dispatch, mouseYColor]);

  const handleTextColorChange = () => {
    if (
      (mouseY && mouseY > 600) ||
      (mouseX && mouseX > 400 && mouseY && mouseY > 500)
    ) {
      dispatch(updateTextColor("text-gray-100"));
      return "text-gray-100";
    } else {
      dispatch(updateTextColor("text-gray-900"));
      return "text-gray-900";
    }
  };

  return (
    <div className="h-screen flex flex-col sm:mb-8">
      <div
        className={`${mouseYColor} grow flex justify-center items-center flex-col group select-none w-full`}
      >
        <div id="TextContainer" className={handleTextColorChange()}>
          <h1
            className={`text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-thin ${transitionClasses} group-hover:-translate-y-2 tracking-widest`}
          >
            HENRIK CHENG
          </h1>
          <h3
            className={`text-xl sm:text-3xl md:text-4xl lg:text-6xl mb-5 ${transitionClasses} group-hover:translate-y-1 tracking-widest font-mono`}
          >
            FRONTEND DEVELOPER
          </h3>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl mb-3"
            onClick={executeScroll}
          >
            Läs mer
          </button>
        </div>
        <div ref={heroBottomAnchor} className="absolute bottom-0" />
      </div>
    </div>
  );
};

export default Hero;
