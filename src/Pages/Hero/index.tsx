import { useState, useRef, MutableRefObject, useEffect } from "react";
import { FormattedMessage } from "react-intl";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectTextColor } from "../Hero/colorSlice";
import { updateBgColor, updateTextColor } from "./colorSlice";

const Hero = () => {
  const [bgColor, setBgColor] = useState<string | null>();
  const [showText, setShowText] = useState<boolean>(true);

  const heroBottomAnchor = useRef() as MutableRefObject<HTMLDivElement>;
  const dispatch = useAppDispatch();

  const executeScroll = () => {
    heroBottomAnchor.current.scrollIntoView();
  };

  const textColor = useAppSelector(selectTextColor);
  const handleTextColorChange = () => {
    if (window.scrollY > 350 && textColor === "text-slate-900") {
      dispatch(updateTextColor("text-slate-100"));
    } else if (window.scrollY <= 350) {
      dispatch(updateTextColor("text-slate-900"));
    }
  };

  useEffect(() => {
    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // Call the functions to handle text color and background color changes
    handleTextColorChange();

    const scrollPosition = window.scrollY;

    if (scrollPosition > 900) {
      setBgColor("bg-slate-800");
      setShowText(false);
    } else if (scrollPosition > 750) {
      setBgColor("bg-slate-700");
      setShowText(false);
    } else if (scrollPosition > 600) {
      setBgColor("bg-slate-600");
      setShowText(true);
    } else if (scrollPosition > 450) {
      setBgColor("bg-slate-500");
      setShowText(true);
    } else if (scrollPosition > 300) {
      setBgColor("bg-slate-400");
      setShowText(true);
    } else if (scrollPosition > 150) {
      setBgColor("bg-slate-300");
      setShowText(true);
    } else {
      setBgColor("bg-slate-200");
      setShowText(true);
    }
  };

  useEffect(() => {
    dispatch(updateBgColor(bgColor));
  }, [dispatch, bgColor]);

  return (
    <div className="h-screen flex flex-col shadow-inner">
      <div
        className={`${bgColor} grow flex justify-center items-center flex-col group select-none w-full relative`}
      >
        <div className={`${showText ? "fixed" : "hidden"}`}>
          <h1
            className={`text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-thin tracking-widest`}
          >
            HENRIK CHENG
          </h1>
          <h3
            className={`text-xl sm:text-3xl md:text-4xl lg:text-6xl tracking-widest font-mono`}
          >
            <FormattedMessage id="hero_role" />
          </h3>
          <h5
            className={`text-lg sm:text-xl md:text-2xl lg:text-4xl mb-5 font-mono font-thin`}
          >
            @tretton37
          </h5>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl mb-3"
            onClick={executeScroll}
          >
            <FormattedMessage id="hero_linkText" />
          </button>
        </div>
      </div>
      <div ref={heroBottomAnchor} className="h-8 z-10 bg-slate-200" />
    </div>
  );
};

export default Hero;
