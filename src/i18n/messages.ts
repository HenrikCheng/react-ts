import { LOCALES } from "./locales";

type LocalizedMessages = Record<LOCALES, Record<string, string>>;

export const messages: LocalizedMessages = {
  [LOCALES.ENGLISH]: {
    home_title: "Home",
    hero_role: "FRONTEND DEVELOPER",
    hero_linkText: "Read more",
    about: "About",
    about_title: "About me",
    about_text_1:
      "I have a great interest in design and problem-solving. My background as a doctor has shaped me into an efficient worker and given me valuable skills to collaborate in teams to achieve the best for our clients. I love learning new things and always strive to develop in my role.",
    about_text_2:
      "When I'm not engaged in my work, I enjoy spending time with my friends and family. We enjoy playing board games and padel together. I'm very curious about the world and love adventures, so investments have become one of my interests.",
    about_text_3:
      "One of the bravest and most enjoyable adventures I've experienced was when I cycled from Sweden to Paris to raise money for the Children's Cancer Foundation. It was a memorable journey that highlighted my commitment to helping others.",
    about_text_4:
      "In summary, I'm a person who loves design and problem-solving, while also valuing collaboration and development. My curiosity about the world drives me towards exciting adventures, and my willingness to support important causes makes my life meaningful and rewarding.",
    about_keyword_1: "Creative",
    about_keyword_2: "Versatile",
    about_keyword_3: "Curious",
    about_keyword_4: "Collaborative",
    about_keyword_5: "Innovative",
    competences_title: "Competences",
    competences_linkText: "Explore more",
    contact_title: "Contact",
    demo_title: "Demo projects",
    cv_title_1: "Staylive, Frontend Developer Jan 2022 - Mar 2023",
    cv_text_1:
      "Created React components for a CMS that enabled customers to manage streaming pages on their own.",
    cv_title_2: "Staylive, Frontend Developer Sep 2021 - Dec 2021",
    cv_text_2:
      "Developed frontend parts for a microservice that handled the upload of movies and images via an API.",
    cv_title_3: "Staylive, Frontend Developer Apr 2021 - Aug 2021",
    cv_text_3:
      "Produced new components for the company's most used products to enhance development capabilities.",
    cv_title_4: "Aspia, Frontend Developer Mar 2020 - Mar 2021",
    cv_text_4:
      "Worked on rewriting and improving the company's product MyBusiness with a focus on React and microservices.",
    cv_title_5:
      "Nore Technology, System Developer and SCRUM Master May 2019 - Feb 2020",
    cv_text_5:
      "Implemented new steps in the advisory process and improved documentation for financial advice.",
    cv_title_6:
      "Medical Doctor Sep 2013 - Feb 2019 Worked as an intern, resident, and specialist doctor in Region Stockholm and Region Dalarna.",
    cv_text_6:
      "Developed valuable qualities such as teamwork, leadership, and interaction with people.",
    cv_techstack: "Techstack: ",
    cv_more_info: "More information",
  },
  [LOCALES.SWEDISH]: {
    home_title: "Hem",
    hero_role: "FRONTENDUTVECKLARE",
    hero_linkText: "Läs mer",
    about: "Om mig",
    about_title: "Om mig",
    about_text_1:
      "Jag har ett stort intresse för design och problemlösning. Min bakgrund som läkare har format mig till en effektiv arbetare och gett mig värdefulla färdigheter att samarbeta i team för att uppnå det bästa för våra kunder. Jag älskar att lära mig nya saker och strävar alltid efter att utvecklas i min roll.",
    about_text_2:
      "När jag inte är engagerad i mitt arbete, spenderar jag gärna tid med mina vänner och familj. Vi njuter av att spela brädspel och padel tillsammans. Jag är väldigt nyfiken på omvärlden och älskar äventyr, så investeringar har blivit ett av mina intressen.",
    about_text_3:
      "Ett av de modigaste och roligaste äventyren jag har upplevt var när jag cyklade från Sverige till Paris för att samla in pengar till Barncancerfonden. Det var en minnesvärd resa som visade på mitt engagemang för att hjälpa andra.",
    about_text_4:
      "Sammanfattningsvis är jag en person som älskar design och problemlösning, samtidigt som jag värderar samarbete och utveckling. Min nyfikenhet på omvärlden driver mig mot spännande äventyr, och min vilja att stödja viktiga ändamål gör mitt liv meningsfullt och givande.",
    about_keyword_1: "Kreativ",
    about_keyword_2: "Engagerad",
    about_keyword_3: "Nyfiken",
    about_keyword_4: "Teamworking",
    about_keyword_5: "Innovativ",
    competences_title: "Kompentenser",
    competences_linkText: "Utforska fler",
    contact_title: "Kontakt",
    demo_title: "Demoprojekt",
    cv_title_1: "Staylive, Frontend-utvecklare Jan 2022 - Mar 2023",
    cv_text_1:
      "Skapade React-komponenter för ett CMS som möjliggjorde kunders egen hantering av streaming-sidor.",
    cv_title_2: "Staylive, Frontend-utvecklare Sep 2021 - Dec 2021",
    cv_text_2:
      "Skapade frontend-delar för en mikrotjänst som hanterade uppladdning av filmer och bilder via ett API.",
    cv_title_3: "Staylive, Frontend-utvecklare Apr 2021 - Aug 2021",
    cv_text_3:
      "Producerade nya komponenter för företagets mest använda produkter för att förbättra utvecklingsmöjligheterna. ",
    cv_title_4: "Aspia, Frontend-utvecklare Mar 2020 - Mar 2021",
    cv_text_4:
      "Arbetade med att skriva om och förbättra företagets produkt MyBusiness med fokus på React och mikrotjänster.",
    cv_title_5:
      "Nore Technology, Systemutvecklare och SCRUM-master Maj 2019 - Feb 2020",
    cv_text_5:
      "Implementerade nya steg i rådgivningsprocessen och förbättrade dokumentationen för finansiell rådgivning. ",
    cv_title_6:
      "Läkare Sep 2013 - Feb 2019 Arbetade som underläkare, AT- och ST-läkare i Region Stockholm och Region Dalarna.",
    cv_text_6:
      "Utvecklade värdefulla egenskaper som teamarbete, ledarskap och mötet med människor.",
    cv_techstack: "Använde tekniker som: ",
    cv_more_info: "Mer information",
  },
};
// export const testMessages = {
//   [LOCALES.ENGLISH]: {
//     learn_to: "Hello, let's learn how to use React-Intl",
//     price_display:
//       "How {n, number, ::currency/USD} is displayed in your selected language",
//     number_display:
//       "This is how {n, number} is formatted in the selected locale",
//     start_today: "Start Today: {d, date}",
//     // menu
//     about_project: "About the project",
//     contact_us: "Contact us",
//   },
//   [LOCALES.FRENCH]: {
//     learn_to: "Bonjour, apprenons à utiliser React-Intl",
//     price_display:
//       "Comment {n, number, ::currency/USD} $ s'affiche dans la langue sélectionnée",
//     number_display:
//       "Voici comment {n, number} sont formatés dans les paramètres régionaux sélectionnés ",
//     start_today: "Commencez aujourd'hui: {d, date}",
//     // menu
//     about_project: "À propos du projet",
//     contact_us: "Contactez-nous",
//   },
//   [LOCALES.GERMAN]: {
//     learn_to: "Hallo, lass uns lernen, wie man React-Intl benutzt",
//     price_display:
//       "Wie {n, number, ::currency/USD} in Ihrer ausgewählten Sprache angezeigt wird",
//     number_display:
//       "Auf diese Weise werden {n, number} im ausgewählten Gebietsschema formatiert",
//     start_today: "Beginnen Sie heute: {d, date}",
//     // menu
//     about_project: "Über das Projekt",
//     contact_us: "Kontaktiere uns",
//   },
//   [LOCALES.JAPANESE]: {
//     learn_to: "こんにちは、React-Intlの使い方を学びましょう",
//     price_display:
//       "選択した言語で{n, number, ::currency/USD}がどのように表示されるか",
//     number_display:
//       "これは、選択したロケールで{n, number}がフォーマットされる方法です。",
//     start_today: "今日から始める：{d, date}",
//     // menu
//     about_project: "プロジェクトについて",
//     contact_us: "お問い合わせ",
//   },
// };
