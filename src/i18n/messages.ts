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
    cv_title: "Résumé",
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
    contact_title: "Contact",
    contact_subtitle:
      "To get in touch with Henrik as a consultant, you can reach out to:",
    contact_company: "Company: ",
    contact_adress: "Address: ",
    contact_phone: "Phone: ",
    contact_email: "Email: ",
    contact_text:
      "Feel free to reach out if you have any questions or if you're interested in collaborating with Henrik. Johan looks forward to hearing from you and will be happy to assist you in the process!",
    demo_title: "Demo projects",
    demo_subtitle: "Please scroll or swipe sideways to continue reading.",
    demo_open: "Open demo",
    demo_sourcecode: "Source code",
    demo_1_title: "Henrik's Portfolio",
    demo_1_description:
      "Tretton37 is a consultancy company where IT talents work. The company aimed to redefine its online presence to communicate its message more clearly, and that's when Henrik stepped in as one of the three developers. With a passionate attitude and strong commitment, he learned low-code programming while creating components with pixel-perfect precision.",
    demo_2_description:
      "Henrik created a web app that consumes an internal API to learn more about slightly more advanced React techniques. Recently, Henrik has also become interested in backend development, which led him to create APIs with CRUD functionality and databases for data storage.",
    demo_3_description:
      "Henrik created a web app that consumes an internal API to learn more about slightly more advanced React techniques. Recently, Henrik has also become interested in backend development, which led him to create APIs with CRUD functionality and databases for data storage.",
    demo_4_description:
      "Mirja Leipoo is a well-established, locally-owned family business that includes a bakery, bed & breakfast, and catering services, based in Finland. The company wanted to establish an online presence to expand its customer base. During his study period, Henrik helped the company and applied his new knowledge.",
    demo_5_description:
      "At the beginning of my career, I created this project to learn React and engage in a practical project related to something I was interested in.",
    demo_6_description:
      "After working with React and Javascript for a few years, I wanted to learn more and understand the basics of TypeScript. Since there were no opportunities through work, I chose to create a tic-tac-toe game in TypeScript to learn.",
    demo_7_title: "A no-nonsense weather-app",
    demo_7_description:
      "During my shifts as a doctor in the ER, I often found it challenging to stay updated on the weather without access to windows. Many weather apps I tried were filled with distracting commercials. This app provides a simple solution to that problem.",
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
    cv_title: "CV",
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
    contact_title: "Kontakt",
    contact_subtitle:
      "För att komma i kontakt med Henrik som konsult kan du ta kontakt med:",
    contact_company: "Företag: ",
    contact_adress: "Adress: ",
    contact_phone: "Telefon: ",
    contact_email: "E-post: ",
    contact_text:
      "Tveka inte att höra av dig om du har några frågor eller om du är intresserad av att samarbeta med Henrik. Johan ser fram emot att höra från dig och hjälper dig gärna vidare i processen..!",
    demo_title: "Demoprojekt",
    demo_subtitle: "Vänligen rulla eller svep åt sidan för att fortsätta läsa.",
    demo_open: "Öppna demo",
    demo_sourcecode: "Källkod",
    demo_1_title: "Henriks portfolio",
    demo_1_description:
      "Tretton37 är ett konsultföretag där IT-talanger arbetar. Företaget strävade efter att omdefiniera sin online-närvaro för att tydligare kommunicera sitt budskap, och det var då Henrik trädde in som en av de tre utvecklare. Med en passionerad inställning och starkt engagemang lärde han sig low-code programmering samtidigt som han skapade fram komponenter med pixel-perfekt precision.",
    demo_2_description:
      "Henrik gjorde en webapp som konsumerar ett internt API för att lära sig mer om lite mer avancerade React-tekniker. Under sista tiden har Henrik även intresserat sig för backend, något som gjort att han även skapat API:er med CRUD-funktionalitet och databas där data lagras.",
    demo_3_description:
      "Henrik gjorde en webapp som konsumerar ett internt API för att lära sig mer om lite mer avancerade React-tekniker. Under sista tiden har Henrik även intresserat sig för backend, något som gjort att han även skapat API:er med CRUD-funktionalitet och databas där data lagras.",
    demo_4_description:
      "Mirja Leipoo är ett väletablerat, lokalt familjeägt företag som omfattar ett bageri, bed & breakfast samt cateringtjänster, och det har sin bas i Finland. Företaget ville etablera en online-närvaro att utöka sin kundkrets. Under sin studietid, hjälpte Henrik företaget och samtidigt kunde han applicera sina nya kunskaper.",
    demo_5_description:
      "I början av karriären så skapade jag denna för att lära sig React, och göra ett praktiskt projekt inom något jag var intresserad av.",
    demo_6_description:
      "Efter att ha jobbat några år med React och Javascript tänkte jag att jag ville lära mig mer och lära mig grunderna i typescript. Det fanns ingen möjlighet via jobbet, så jag valde att göra en luffarschack-spel i typescript för att lära mig.",
    demo_7_title: "En enkel och praktisk väder-app",
    demo_7_description:
      "Utan tillgång till fönster, så var det svårt att hålla sig a jour med vädret efter arbetspassen på akuten i min gamla karriär som läkare. Den här appen läser problemet på ett smidigt sätt",
  },
  [LOCALES.MANDARIN]: {
    home_title: "主页",
    hero_role: "前端开发人员",
    hero_linkText: "阅读更多",
    about: "关于",
    about_title: "关于我",
    about_text_1:
      "我对设计和解决问题有着浓厚的兴趣。作为医生的背景使我成为了一个高效的工作者，并为我带来了宝贵的协作技能，以便与团队合作为客户取得最佳成果。我喜欢学习新东西，并始终努力在我的角色中不断发展。",
    about_text_2:
      "当我不忙于工作时，我喜欢与朋友和家人一起度过时间。我们喜欢一起玩桌游和打帕德尔。我对世界充满好奇，热爱冒险，所以投资已经成为我的兴趣之一。",
    about_text_3:
      "我经历过的最勇敢和最愉快的冒险之一是我从瑞典骑车到巴黎，为儿童癌症基金会筹款。这是一段难忘的旅程，突显了我帮助他人的承诺。",
    about_text_4:
      "总之，我是一个热爱设计和解决问题的人，同时也重视协作和发展。我对世界的好奇心驱使我迈向令人兴奋的冒险，我支持重要事业的意愿使我的生活变得有意义和有益。",
    about_keyword_1: "有创意",
    about_keyword_2: "多才多艺",
    about_keyword_3: "好奇心",
    about_keyword_4: "合作性",
    about_keyword_5: "创新",
    competences_title: "能力",
    competences_linkText: "了解更多",
    cv_title: "简历",
    cv_title_1: "Staylive，前端开发人员，2022年1月 - 2023年3月",
    cv_text_1: "为一个CMS创建React组件，使客户能够自行管理流媒体页面。",
    cv_title_2: "Staylive，前端开发人员，2021年9月 - 2021年12月",
    cv_text_2:
      "为一个微服务开发前端部分，该微服务通过API处理电影和图片的上传。",
    cv_title_3: "Staylive，前端开发人员，2021年4月 - 2021年8月",
    cv_text_3: "为公司最常使用的产品制作新的组件，以增强开发能力。",
    cv_title_4: "Aspia，前端开发人员，2020年3月 - 2021年3月",
    cv_text_4:
      "致力于重写和改进公司的产品MyBusiness，重点放在了React和微服务上。",
    cv_title_5:
      "Nore Technology，系统开发人员和SCRUM Master，2019年5月 - 2020年2月",
    cv_text_5: "在咨询流程中实施新步骤，改进了财务咨询的文档。",
    cv_title_6:
      "医学博士，2013年9月 - 2019年2月，曾在斯德哥尔摩地区和达拉纳地区担任实习生、住院医生和专科医生。",
    cv_text_6: "培养了团队合作、领导力和与人互动等宝贵品质。",
    cv_techstack: "技术栈：",
    cv_more_info: "更多信息",
    contact_title: "联系方式",
    contact_subtitle: "要与亨利克作为顾问联系，您可以通过以下方式联系：",
    contact_company: "公司：",
    contact_adress: "地址：",
    contact_phone: "电话：",
    contact_email: "电子邮件：",
    contact_text:
      "如果您有任何问题或有兴趣与亨利克合作，请随时与我们联系。约翰期待收到您的来信，并将乐意协助您的进程！",
    demo_title: "演示项目",
    demo_subtitle: "请滚动或侧滑以继续阅读。",
    demo_open: "打开演示",
    demo_sourcecode: "源代码",
    demo_1_title: "亨利克的作品集",
    demo_1_description:
      "Tretton37是一家咨询公司，IT人才在此工作。该公司旨在重新定义其在线存在，以更清晰地传达其信息，亨利克作为其中三名开发人员之一加入其中。他充满激情的态度和强烈的投入感，学习了低代码编程，同时以像素完美的精度创建了组件。",
    demo_2_description:
      "亨利克创建了一个Web应用程序，消耗了内部API，以了解更多稍微高级的React技术。最近，亨利克还对后端开发产生了兴趣，这导致他创建了具有CRUD功能和数据库存储的API。",
    demo_3_description:
      "亨利克创建了一个Web应用程序，消耗了内部API，以了解更多稍微高级的React技术。最近，亨利克还对后端开发产生了兴趣，这导致他创建了具有CRUD功能和数据库存储的API。",
    demo_4_description:
      "Mirja Leipoo是一家知名的本地家族企业，包括面包店、床位&早餐以及餐饮服务，总部位于芬兰。该公司希望建立在线存在，以扩大其客户群。在学习期间，亨利克帮助了该公司并应用了他的新知识。",
    demo_5_description:
      "在我的职业生涯初期，我创建了这个项目，以学习React，并参与与我感兴趣的内容相关的实际项目。",
    demo_6_description:
      "在使用React和Javascript工作了几年后，我想学到更多，并了解TypeScript的基础知识。由于工作中没有机会，我选择创建了一个TypeScript的井字棋游戏来学习。",
    demo_7_title: "简洁实用的天气应用",
    demo_7_description:
      "在急诊室当医生时，我经常发现没有窗户的情况下难以及时了解天气情况。我尝试过的许多天气应用程序都充斥着令人分心的广告。这个应用程序提供了一个简单的解决方案。",
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
