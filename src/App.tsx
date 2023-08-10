import { useEffect, useState } from "react";
import { IntlProvider } from "react-intl";

import { useAppSelector } from "./app/hooks";
import { selectedLang } from "./components/LangSelect/langSlice";
import Home from "./Pages/Home";
import { messages } from "./i18n/messages";
import { LOCALES } from "./i18n/locales";
import "./App.css";

function App() {
  const currentLang = useAppSelector(selectedLang);
  const [currentLocale, setCurrentLocale] = useState(currentLang);

  // Update app lang whenever it changes in Redux
  useEffect(() => {
    setCurrentLocale(currentLang);
  }, [currentLang]);

  return (
    <IntlProvider
      messages={messages[currentLocale as LOCALES]} // Cast currentLocale to LOCALES enum
      locale={currentLocale}
      defaultLocale={currentLocale}
    >
      <div className="App">
        <Home />
      </div>
    </IntlProvider>
  );
}

export default App;
