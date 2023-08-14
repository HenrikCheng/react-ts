import { FormattedMessage } from "react-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import Card from "../../components/Card";
import Header from "../../components/Header";
import Text from "../../components/Text";
import Slider from "../../components/Slider";

import Nore from "../../logotypes/Nore.png";
import Dalarna from "../../logotypes/Dalarna.png";
import Aspia from "../../logotypes/aspia-logo.webp";
import Staylive from "../../logotypes/Staylive.png";

const CV: React.FC<{}> = (props) => {
  return (
    <Card classes="flex flex-col container bg-white shadow rounded-xl lg:px-4 2xl:px-24 py-4 px-4 md:px-8">
      <div id="CV">
        <Header classes="text-4xl font-semibold mb-4">
          <FormattedMessage id="cv_title" />
        </Header>

        <Slider
          dimension={400}
          slides={[
            {
              imageSrc: Staylive,
              header: "Awesome App",
              description:
                "A cutting-edge application to revolutionize your experience.",
              techStack: ["Redux", "CSS", "HTML", "REST API", "Tailwind CSS"],
            },
            {
              imageSrc: Staylive,
              header: "Innovative Website",
              description: "An interactive website that will amaze users.",
              techStack: ["React.js", "Redux", "CSS", "HTML", "Tailwind CSS"],
            },
            {
              imageSrc: Staylive,
              header: "Cool Project",
              description:
                "A showcase of advanced features and functionalities.",
              techStack: [
                "React.js",
                "Redux",
                "CSS",
                "HTML",
                "REST API",
                "Tailwind CSS",
              ],
            },
            {
              imageSrc: Aspia,
              header: "Next-gen Platform",
              description: "Bringing the future to your fingertips.",
              techStack: [
                "React.js",
                "Redux",
                "TypeScript",
                "SCSS",
                "SASS",
                "Jest",
                "Microsoft Azure",
              ],
            },
            {
              imageSrc: Nore,
              header: "Epic Mobile App",
              description:
                "Unleash the power of mobile technology with this stunning app.",
              techStack: [
                ".NET Core",
                "JavaScript",
                "CSS",
                "HTML",
                "jQuery",
                "Git",
              ],
              backgroundColor: "bg-blue-800 px-10",
            },
            {
              imageSrc: Dalarna,
              header: "Epic Mobile App",
              description:
                "Unleash the power of mobile technology with this stunning app.",
            },
          ]}
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl mt-3">
          <a
            href="https://www.linkedin.com/in/henrik-cheng/"
            target="_blank"
            rel="noreferrer"
          >
            <FormattedMessage id="cv_more_info" />
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ml-2" />
          </a>
        </button>

        {/* <div className="text-start pb-4">
          <Header>
            <FormattedMessage id="cv_title_1" />
          </Header>
          <Text classes="text-gray-700 text-base text-left mb-3">
            <FormattedMessage id="cv_text_1" />
          </Text>
          <Text classes="text-gray-700 text-base text-left font-semibold">
            <FormattedMessage id="cv_techstack" />
          </Text>
          <Text
            classes="text-gray-700 text-base text-left mb-2"
            content="Redux, CSS, HTML, REST API, Tailwind CSS etc."
          />
        </div>
        <div className="text-start pb-4">
          <Header>
            <FormattedMessage id="cv_title_2" />
          </Header>
          <Text classes="text-gray-700 text-base text-left mb-3">
            <FormattedMessage id="cv_text_2" />
          </Text>
          <Text classes="text-gray-700 text-base text-left font-semibold">
            <FormattedMessage id="cv_techstack" />
          </Text>
          <Text
            classes="text-gray-700 text-base text-left mb-3"
            content="React.js, Redux, CSS, HTML, Tailwind CSS etc."
          />
        </div>
        <div className="text-start pb-4">
          <Header>
            <FormattedMessage id="cv_title_3" />
          </Header>
          <Text classes="text-gray-700 text-base text-left mb-3">
            <FormattedMessage id="cv_text_3" />
          </Text>
          <Text classes="text-gray-700 text-base text-left font-semibold">
            <FormattedMessage id="cv_techstack" />
          </Text>
          <Text
            classes="text-gray-700 text-base text-left mb-3"
            content="React.js, Redux, CSS, HTML, REST API, Tailwind CSS etc."
          />
        </div>
        <div className="text-start pb-4">
          <Header>
            <FormattedMessage id="cv_title_4" />
          </Header>
          <Text classes="text-gray-700 text-base text-left mb-3">
            <FormattedMessage id="cv_text_4" />
          </Text>
          <Text classes="text-gray-700 text-base text-left font-semibold">
            <FormattedMessage id="cv_techstack" />
          </Text>
          <Text
            classes="text-gray-700 text-base text-left mb-3"
            content="React.js, Redux, TypeScript, SCSS/SASS, Jest, Microsoft Azure etc."
          />
        </div>
        <div className="text-start pb-4">
          <Header>
            <FormattedMessage id="cv_title_5" />
          </Header>
          <Text classes="text-gray-700 text-base text-left mb-3">
            <FormattedMessage id="cv_text_5" />
          </Text>
          <Text classes="text-gray-700 text-base text-left font-semibold">
            <FormattedMessage id="cv_techstack" />
          </Text>
          <Text
            classes="text-gray-700 text-base text-left mb-3"
            content=".NET Core, JavaScript, CSS, HTML, jQuery, Git etc."
          />
        </div>
        <div className="text-start pb-4">
          <Header>
            <FormattedMessage id="cv_title_6" />
          </Header>
          <Text classes="text-gray-700 text-base text-left mb-3">
            <FormattedMessage id="cv_text_6" />
          </Text>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl mt-3">
          <a
            href="https://www.linkedin.com/in/henrik-cheng/"
            target="_blank"
            rel="noreferrer"
          >
            <FormattedMessage id="cv_more_info" />
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ml-2" />
          </a>
        </button> */}
      </div>
    </Card>
  );
};

export default CV;
