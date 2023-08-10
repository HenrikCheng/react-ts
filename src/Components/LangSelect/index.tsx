import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { LOCALES } from "../../i18n/locales";

type LangSelectProps = {
  linkStyles?: string;
};

const LangSelect: React.FC<LangSelectProps> = ({ linkStyles }) => {
  const languages = [
    { name: "English", code: LOCALES.ENGLISH },
    { name: "日本語", code: LOCALES.JAPANESE },
    { name: "Français", code: LOCALES.FRENCH },
    { name: "Deutsche", code: LOCALES.GERMAN },
  ];

  return (
    <div className="flex items-center space-x-1">
      <FontAwesomeIcon icon={faLanguage} className={`fa-xl ${linkStyles}}`} />
      <div>
        <select>
          {languages.map(({ name, code }) => (
            <option key={code} value={code}>
              {name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default LangSelect;
