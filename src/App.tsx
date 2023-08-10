import { useEffect, useState } from "react";
import { IntlProvider } from "react-intl";

import Home from "./Pages/Home";
import { LOCALES } from "./i18n/locales";
import { messages } from "./i18n/messages";
import "./App.css";

function App() {
  const locale = LOCALES.ENGLISH;

  const [currentLocale, setCurrentLocale] = useState(locale);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentLocale((prevLocale) =>
        prevLocale === LOCALES.ENGLISH ? LOCALES.JAPANESE : LOCALES.ENGLISH
      );
    }, 60000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

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
