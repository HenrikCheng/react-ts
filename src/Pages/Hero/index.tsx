import { useState, useRef, MutableRefObject, useEffect } from "react";
import { useAppDispatch } from "../../app/hooks";

import { updateBgColor, updateTextColor } from "./colorSlice";

const Hero = () => {
  const [bgColor, setBgColor] = useState<string | null>();

  const heroBottomAnchor = useRef() as MutableRefObject<HTMLDivElement>;
  const dispatch = useAppDispatch();

  const executeScroll = () => {
    heroBottomAnchor.current.scrollIntoView();
  };

  const handleTextColorChange = () => {
    if (window.scrollY > 350) {
      dispatch(updateTextColor("text-gray-100"));
    } else {
      dispatch(updateTextColor("text-gray-900"));
    }
  };

  useEffect(() => {
    handleTextColorChange();
    if (window.scrollY > 900) {
      setBgColor("bg-slate-800");
    } else if (window.scrollY > 750) {
      setBgColor("bg-slate-700");
    } else if (window.scrollY > 600) {
      setBgColor("bg-slate-600");
    } else if (window.scrollY > 450) {
      setBgColor("bg-slate-500");
    } else if (window.scrollY > 300) {
      setBgColor("bg-slate-400");
    } else if (window.scrollY > 150) {
      setBgColor("bg-slate-300");
    } else setBgColor("bg-slate-200");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.scrollY]);

  useEffect(() => {
    dispatch(updateBgColor(bgColor));
  }, [dispatch, bgColor]);

  return (
    <div className="h-screen flex flex-col sm:mb-8">
      <div
        className={`${bgColor} grow flex justify-center items-center flex-col group select-none w-full`}
      >
        <div
          id="TextContainer"
          className="transition ease-in-out delay-150 group-hover:scale-110 duration-300"
        >
          <h1
            className={`text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-thin tracking-widest`}
          >
            HENRIK CHENG
          </h1>
          <h3
            className={`text-xl sm:text-3xl md:text-4xl lg:text-6xl tracking-widest font-mono`}
          >
            FRONTEND DEVELOPER
          </h3>
          <h5
            className={`text-lg sm:text-xl md:text-2xl lg:text-4xl mb-5 font-mono font-thin`}
          >
            @Tretton37
          </h5>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl mb-3"
            onClick={executeScroll}
          >
            Läs mer
          </button>
        </div>
      </div>
      <div ref={heroBottomAnchor} className="absolute bottom-0" />
    </div>
  );
};

export default Hero;
