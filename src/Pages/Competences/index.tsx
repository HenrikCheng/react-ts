import { FormattedMessage } from "react-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import Header from "../../components/Header";
import Card from "../../components/Card";

const Competences: React.FC<{}> = (props) => {
  const skillsArray = [
    ".NET Core",
    "Agile Scrum",
    "Axios",
    "Bootstrap",
    "COBOL",
    "Content Management Systems (CMS)",
    "CSS",
    "Express.js",
    "Figma",
    "GraphQL API",
    "Git",
    "Github",
    "HTML",
    "JavaScript",
    "Jest Test",
    "JIRA",
    "jQuery",
    "Kanban",
    "Legitimerad läkare",
    "Microsoft Azure",
    "Material-UI",
    "MongoDB Atlas",
    "NextJS",
    "Node.js",
    "Photoshop",
    "Postman",
    "React",
    "React Hooks",
    "React Native",
    "Redux",
    "Responsiv design",
    "REST API",
    "Scrum Master",
    "SASS",
    "SCSS",
    "SQL",
    "Storybook",
    "Styled-components",
    "Storybook",
    "SWR",
    "Tailwind CSS",
    "Take care",
    "Teamworking skills",
    "TypeScript",
    "UI Design",
    "Webflow",
    "Vue",
    "Version Control - GIT",
    "Web Accessibility",
  ];
  const midIndex = Math.ceil(skillsArray.length / 2);

  const topString = skillsArray.slice(0, midIndex).join(" | ");
  const bottomString = skillsArray.slice(midIndex).join(" | ");

  return (
    <Card
      classes="flex flex-col container bg-white shadow rounded-xl py-4 select-none"
      id="Competences"
    >
      <div>
        <Header classes="text-4xl font-semibold mb-4">
          <FormattedMessage id="competences_title" />
        </Header>
        <div className="flex flex-col overflow-hidden tracking-widest font-mono text-lg">
          <div className="animate-leftRight-infinite whitespace-nowrap">
            {topString}
          </div>
          <div className="flex animate-rightLeft-infinite whitespace-nowrap">
            {bottomString}
          </div>
        </div>
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl mt-3"
        >
          <a
            href="https://www.linkedin.com/in/henrik-cheng/"
            target="_blank"
            rel="noreferrer"
          >
            <FormattedMessage id="competences_linkText" />
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ml-2" />
          </a>
        </button>
      </div>
    </Card>
  );
};

export default Competences;
