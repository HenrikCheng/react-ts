import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch } from "../../app/hooks";

import { LOCALES } from "../../i18n/locales";
import { updateLang } from "./langSlice";

type LangSelectProps = {
  linkStyles?: string;
};

const LangSelect: React.FC<LangSelectProps> = ({ linkStyles }) => {
  const languages = [
    { name: "English", code: LOCALES.ENGLISH },
    { name: "Swedish", code: LOCALES.SWEDISH },
    // { name: "日本語", code: LOCALES.JAPANESE },
    // { name: "Français", code: LOCALES.FRENCH },
    // { name: "Deutsche", code: LOCALES.GERMAN },
  ];
  const dispatch = useAppDispatch();

  return (
    <div className="flex items-center space-x-1">
      <FontAwesomeIcon icon={faLanguage} className={`fa-xl ${linkStyles}}`} />
      <div>
        <select
          onChange={(e) => {
            dispatch(updateLang(e.target.value));
          }}
        >
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
