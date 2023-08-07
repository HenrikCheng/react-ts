import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import Header from "../../components/Header";
import Card from "../../components/Card";

const Competences: React.FC<{}> = (props) => {
  const skillsArray = [
    ".NET Core",
    "Accessible design",
    "Agil Scrum",
    "Agile Methods",
    "Axios",
    "Bootstrap",
    "Cobol",
    "Content Management Systems (CMS)",
    "CSS",
    "Figma",
    "GraphQL",
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
    "MongoDB",
    "NextJS",
    "Node.js",
    "Photoshop",
    "Postman",
    "React",
    "React Hooks",
    "React Native",
    "React-storybook",
    "Redux",
    "Responsiv design",
    "REST API",
    "Scrum Master",
    "SCSS/SASS",
    "SQL",
    "Storybook",
    "Structured Query Language",
    "SWR",
    "Tailwind CSS",
    "Take care",
    "Teamworking skills",
    "TypeScript",
    "UI Design",
    "Webflow",
    "Vue",
    "Version Control - GIT",
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
        <Header title="Kompetenser" classes="text-4xl font-semibold mb-4" />
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
            className="space-x-2"
          >
            <span>Utforska fler</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </button>
      </div>
    </Card>
  );
};

export default Competences;
