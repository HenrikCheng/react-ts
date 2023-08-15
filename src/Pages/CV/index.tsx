import { FormattedMessage } from "react-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import Card from "../../components/Card";
import Header from "../../components/Header";
import Slider from "../../components/Slider";
import Text from "../../components/Text";

import Nore from "../../logotypes/Nore.png";
import Dalarna from "../../logotypes/Dalarna.png";
import Aspia from "../../logotypes/aspia-logo.webp";
import Staylive from "../../logotypes/Staylive.png";

const CV: React.FC<{}> = (props) => {
  const slidesData = [
    {
      imageSrc: Staylive,
      techStack: ["Redux", "CSS", "HTML", "REST API", "Tailwind CSS"],
      backgroundColor: "bg-emerald-200 px-10",
    },
    {
      imageSrc: Staylive,
      techStack: ["React.js", "Redux", "CSS", "HTML", "Tailwind CSS"],
      backgroundColor: "bg-emerald-200 px-10",
    },
    {
      imageSrc: Staylive,
      techStack: [
        "React.js",
        "Redux",
        "CSS",
        "HTML",
        "REST API",
        "Tailwind CSS",
      ],
      backgroundColor: "bg-emerald-200 px-10",
    },
    {
      imageSrc: Aspia,
      techStack: [
        "React.js",
        "Redux",
        "TypeScript",
        "SCSS",
        "SASS",
        "Jest",
        "Microsoft Azure",
      ],
      backgroundColor: "bg-gray-200 px-10",
    },
    {
      imageSrc: Nore,
      techStack: [".NET Core", "JavaScript", "CSS", "HTML", "jQuery", "Git"],
      backgroundColor: "bg-blue-800 px-10",
    },
    {
      imageSrc: Dalarna,
      backgroundColor: "bg-red-600 px-10",
    },
  ];

  const slidesWithText = slidesData.map((slide, index) => ({
    ...slide,
    header: `cv_title_${index + 1}`,
    description: `cv_text_${index + 1}`,
  }));

  return (
    <Card>
      <div id="CV">
        <Header classes="text-4xl font-semibold mb-4">
          <FormattedMessage id="cv_title" />
        </Header>
        <Text classes="text-gray-700 text-base text-left mb-6 mx-2 text-center">
          <FormattedMessage id="demo_subtitle" />
        </Text>

        <Slider
          height={350}
          width={400}
          slides={slidesWithText}
          componentId="CV"
        />
        <div className="mt-6 mb-3">
          <a
            href="https://www.linkedin.com/in/henrik-cheng/"
            target="_blank"
            rel="noreferrer"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl "
          >
            <FormattedMessage id="cv_more_info" />
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ml-2" />
          </a>
        </div>
      </div>
    </Card>
  );
};

export default CV;
