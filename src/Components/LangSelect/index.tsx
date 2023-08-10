import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

import { LOCALES } from "../../i18n/locales";
import { updateLang, selectedLang } from "./langSlice";

type LangSelectProps = {
  textColor?: string;
};

const LangSelect: React.FC<LangSelectProps> = ({ textColor }) => {
  const dispatch = useAppDispatch();
  const currentLang = useAppSelector(selectedLang);

  const languages = [
    { name: "English", code: LOCALES.ENGLISH },
    { name: "Swedish", code: LOCALES.SWEDISH },
    { name: "中文", code: LOCALES.MANDARIN },
  ];

  return (
    <div className="flex items-center space-x-1">
      <FontAwesomeIcon
        icon={faLanguage}
        className={`${textColor} block pr-1 rounded md:hover:bg-transparent md:border-0 md:p-0 text-xl xl:text-2xl font-semibold hover:drop-shadow-lg hover:underline underline-offset-2 fa-xl`}
      />
      <div>
        <select
          onChange={(e) => {
            dispatch(updateLang(e.target.value));
            // storing locale in the localstorage
            localStorage.setItem("locale", e.target.value);
          }}
          defaultValue={currentLang}
          className={`${textColor} bg-transparent`}
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
