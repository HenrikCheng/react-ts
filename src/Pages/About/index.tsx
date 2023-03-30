import React, { useRef, MutableRefObject } from "react";
import Header from "../../Components/Header";
import Text from "../../Components/Text";
import AboutImage from "../../images/AboutImage.jpeg";

const About: React.FC<{}> = (props) => {
  // const heroBottomAnchor = useRef() as MutableRefObject<HTMLDivElement>;
  return (
    <div
      className="flex flex-col items-center space-y-4 mt-20"
      // ref={heroBottomAnchor}
    >
      <Header title="Om Henrik" classes="text-4xl font-semibold mb-4" />
      <img
        src={AboutImage}
        alt="Portrait of Henrik"
        className="rounded-full h-80 w-80"
      />
      <Text content="Henrik är en person med stort intresse för design, problemlösning och programmering. Han är alltid intresserad av att lära sig nya saker och utvecklas. Henrik har en läkarexamen från Karolinska Institutet och yrkeserfarenhet efter AT-tjänstgöring. Läkaryrket har format Henrik till en person som är effektiv i sitt arbete och givit honom vana att arbeta i team." />
    </div>
  );
};

export default About;
