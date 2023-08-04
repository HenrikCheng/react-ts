import React from "react";

import Card from "../../components/Card";
import Header from "../../components/Header";
import Text from "../../components/Text";

const CV: React.FC<{}> = (props) => {
  return (
    <Card classes="flex flex-col container bg-white shadow rounded-xl lg:px-4 2xl:px-24 py-4 px-4 md:px-8">
      <div id="CV">
        <Header title="CV" classes="text-4xl font-semibold mb-4" />
        <div className="text-start">
          <Header title="Staylive, Frontend-utvecklare Jan 2022 - Mar 2023" />
          <Text
            classes="text-gray-700 text-base text-left mb-6"
            content="Skapade React-komponenter för ett CMS som möjliggjorde kunders egen
          hantering av streaming-sidor. Använde teknologier som React.js, Redux,
          CSS, HTML, REST API, Tailwind CSS, m.fl."
          />
        </div>
        <div className="text-start">
          <Header title="Staylive, Frontend-utvecklare Sep 2021 - Dec 2021" />
          <Text
            classes="text-gray-700 text-base text-left mb-6"
            content="Skapade frontend-delar för en mikrotjänst som hanterade uppladdning av
          filmer och bilder via ett API. Använde teknologier som React.js,
          Redux, CSS, HTML, Tailwind CSS, m.fl."
          />
        </div>
        <div className="text-start">
          <Header title="Frontend-utvecklare Apr 2021 - Aug 2021" />
          <Text
            classes="text-gray-700 text-base text-left mb-6"
            content="Producerade nya komponenter för företagets mest använda produkter för
          att förbättra utvecklingsmöjligheterna. Använde teknologier som
          React.js, Redux, CSS, HTML, REST API, Tailwind CSS, m.fl."
          />
        </div>
        <div className="text-start">
          <Header title="Aspia, Frontend-utvecklare Mar 2020 - Mar 2021" />
          <Text
            classes="text-gray-700 text-base text-left mb-6"
            content="Arbetade med att skriva om och förbättra företagets produkt MyBusiness
          med fokus på React och mikrotjänster. Använde teknologier som
          React.js, Redux, TypeScript, SCSS/SASS, Jest, Microsoft Azure, m.fl."
          />
        </div>
        <div className="text-start">
          <Header title="Nore Technology, Systemutvecklare och SCRUM-master Maj 2019 - Feb 2020" />
          <Text
            classes="text-gray-700 text-base text-left mb-6"
            content="Implementerade nya steg i rådgivningsprocessen och förbättrade
          dokumentationen för finansiell rådgivning. Använde teknologier som
          .NET Core, JavaScript, CSS, HTML, jQuery, Git, m.fl."
          />
        </div>
        <div className="text-start">
          <Header
            title="Läkare Sep 2013 - Feb 2019 Arbetade som underläkare, AT- och ST-läkare
          i Region Stockholm och Region Dalarna."
          />
          <Text
            classes="text-gray-700 text-base text-left mb-6"
            content="Utvecklade värdefulla egenskaper som teamarbete, ledarskap och mötet
          med människor."
          />
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl mt-3">
          <a
            href="https://www.linkedin.com/in/henrik-cheng/"
            target="_blank"
            rel="noreferrer"
          >
            Mer information
          </a>
        </button>
      </div>
    </Card>
  );
};

export default CV;
