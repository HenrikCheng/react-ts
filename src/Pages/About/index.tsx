import React from "react";
import Header from "../../components/Header";
import Text from "../../components/Text";
import AboutImage from "../../images/AboutImage.jpeg";
import Card from "../../components/Card";

const About: React.FC<{}> = (props) => {
  // const heroBottomAnchor = useRef() as MutableRefObject<HTMLDivElement>;
  return (
    <Card>
      <Header title="Om Henrik" classes="text-4xl font-semibold mb-4" />
      <img
        src={AboutImage}
        alt="Portrait of Henrik"
        className="rounded-full w-80"
        // className="w-full object-cover h-80"
      />
      <Text content="Henrik har ett stort intresse för design och problemlösning. Henrik har en bakgrund som läkare, vilket har format honom till en person som är effektiv i sitt arbete och givit honom vana att arbeta i team för kundens bästa. Han är alltid intresserad av att lära sig nya saker och utvecklas i sin roll." />
      <Text content="Henrik tycker om att spendera tid med vänner och familj, exempelvis med att spela brädspel och padel. Henrik är nyfiken på omvärlden och gillar äventyr och investering. Det modigaste och roligaste Henrik har gjort var att cykla från Sverige till Paris för att samla in pengar till Barncancerfonden." />
    </Card>
  );
};

export default About;
