import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

import { LOCALES } from "../../i18n/locales";
import { updateLang, selectedLang } from "./langSlice";

type LangSelectProps = {
  linkStyles?: string;
};

const LangSelect: React.FC<LangSelectProps> = ({ linkStyles }) => {
  const dispatch = useAppDispatch();
  const currentLang = useAppSelector(selectedLang);

  const languages = [
    { name: "English", code: LOCALES.ENGLISH },
    { name: "Swedish", code: LOCALES.SWEDISH },
    // { name: "日本語", code: LOCALES.JAPANESE },
    // { name: "Français", code: LOCALES.FRENCH },
    // { name: "Deutsche", code: LOCALES.GERMAN },
  ];

  return (
    <div className="flex items-center space-x-1">
      <FontAwesomeIcon icon={faLanguage} className={`fa-xl ${linkStyles}}`} />
      <div>
        <select
          onChange={(e) => {
            dispatch(updateLang(e.target.value));
            // storing locale in the localstorage
            localStorage.setItem("locale", e.target.value);
          }}
          defaultValue={currentLang}
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
