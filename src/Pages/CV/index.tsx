import React from "react";
import Header from "../../components/Header";
import Text from "../../components/Text";
import AboutImage from "../../images/AboutImage.jpeg";
import Card from "../../components/Card";

const CV: React.FC<{}> = (props) => {
  // const heroBottomAnchor = useRef() as MutableRefObject<HTMLDivElement>;
  return (
    <Card>
      <img
        className="w-full grayscale"
        src={AboutImage}
        alt="Portrait of Henrik"
      />
      <div className="px-6 py-4">
        <Header title="Om Henrik" classes="text-4xl font-semibold mb-4" />
        <Text content="Henrik har ett stort intresse för design och problemlösning. Henrik har en bakgrund som läkare, vilket har format honom till en person som är effektiv i sitt arbete och givit honom vana att arbeta i team för kundens bästa. Han är alltid intresserad av att lära sig nya saker och utvecklas i sin roll." />
        <Text content="Henrik tycker om att spendera tid med vänner och familj, exempelvis med att spela brädspel och padel. Henrik är nyfiken på omvärlden och gillar äventyr och investering. Det modigaste och roligaste Henrik har gjort var att cykla från Sverige till Paris för att samla in pengar till Barncancerfonden." />
      </div>

      <div className="px-6 pt-4 pb-2 flex flex-row">
        <span className="inline-block bg-purple-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #nyfiken
        </span>
        <span className="inline-block bg-pink-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #teamwork
        </span>
        <span className="inline-block bg-indigo-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #kunskaptörstig
        </span>
      </div>
    </Card>
  );
};

export default CV;
