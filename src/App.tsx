import { useEffect, useState } from "react";
import { IntlProvider } from "react-intl";

import { useAppSelector } from "./app/hooks";
import { selectedLang } from "./components/LangSelect/langSlice";
import Home from "./Pages/Home";
import { LOCALES } from "./i18n/locales";
import { messages } from "./i18n/messages";
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
      messages={messages[currentLocale]}
      locale={currentLocale}
      defaultLocale={LOCALES.ENGLISH}
    >
      <div className="App">
        <Home />
      </div>
    </IntlProvider>
  );
}

export default App;
