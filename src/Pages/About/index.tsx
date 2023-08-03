import React from "react";
import Header from "../../components/Header";
import Text from "../../components/Text";
import AboutImage from "../../images/AboutImage.jpeg";
import BikeImage from "../../images/BikeImage.jpg";
import Card from "../../components/Card";

const About: React.FC<{}> = (props) => {
  return (
    <Card classes="flex flex-col xl:flex-row container xl:justify-center relative bg-white shadow rounded-xl overflow-hidden">
      <div className="lg:px-4 2xl:px-24 py-4 xl:order-2">
        <div id="AboutMe">
          <Header title="Om Henrik" classes="text-4xl font-semibold mb-4" />
          <Text content="Jag har ett stort intresse för design och problemlösning. Min bakgrund som läkare har format mig till en effektiv arbetare och gett mig värdefulla färdigheter att samarbeta i team för att uppnå det bästa för våra kunder. Jag älskar att lära mig nya saker och strävar alltid efter att utvecklas i min roll." />
          <Text content="När jag inte är engagerad i mitt arbete, spenderar jag gärna tid med mina vänner och familj. Vi njuter av att spela brädspel och padel tillsammans. Jag är väldigt nyfiken på omvärlden och älskar äventyr, så investeringar har blivit ett av mina intressen." />
          <Text content="Ett av de modigaste och roligaste äventyren jag har upplevt var när jag cyklade från Sverige till Paris för att samla in pengar till Barncancerfonden. Det var en minnesvärd resa som visade på mitt engagemang för att hjälpa andra." />
          <Text content="Sammanfattningsvis är jag en person som älskar design och problemlösning, samtidigt som jag värderar samarbete och utveckling. Min nyfikenhet på omvärlden driver mig mot spännande äventyr, och min vilja att stödja viktiga ändamål gör mitt liv meningsfullt och givande." />
        </div>

        <div className="flex flex-row">
          <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Kreativ
          </span>
          <span className="inline-block bg-indigo-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Engagerad
          </span>
          <span className="inline-block bg-purple-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Nyfiken
          </span>
          <span className="inline-block bg-pink-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Teamworking
          </span>
        </div>
      </div>
      <img
        className="w-1/2 xl:w-1/3 object-cover xl:order-1 rounded-bl-xl xl:rounded-l-xl object-position"
        src={AboutImage}
        alt="Portrait of Henrik"
      />
      <img
        className="w-1/2 xl:w-1/3 object-cover xl:order-3 absolute xl:static bottom-0 right-0 rounded-br-xl xl:rounded-r-xl object-left"
        src={BikeImage}
        alt="Portrait of Henrik"
      />
    </Card>
  );
};

export default About;
