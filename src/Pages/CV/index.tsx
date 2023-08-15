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

        <Slider height={"300px"} width={"350px"} slides={slidesWithText} />
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
      </div>
    </Card>
  );
};

export default CV;
