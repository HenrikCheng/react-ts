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
			"Staylive is a small company working with livestreaming. The company had around 20 employees, including about 9 developers. Henrik was part of a team of 6 developers who created a content management system (CMS) that allowed customers to create, make changes, and even create their own streaming pages. This saved time for the developers, enabling them to focus more on developing new features.",

		cv_title_2: "Staylive, Frontend Developer Sep 2021 - Dec 2021",
		cv_text_2:
			"Henrik implemented a new feature handling the uploading of videos and images through an API. This saved time for customer service employees who previously had to upload files manually, allowing them to focus on other tasks.",

		cv_title_3: "Staylive, Frontend Developer Apr 2021 - Aug 2021",
		cv_text_3:
			"Part of the company's library of React components had become outdated, difficult to style, and upgrade with new features. As part of improving future development opportunities, Henrik created new React components that were easier to maintain and customize.",

		cv_title_4: "Aspia, Frontend Developer Mar 2020 - Mar 2021",
		cv_text_4:
			"Aspia is a large accounting company that assists businesses throughout Sweden in focusing on their core operations. Much of the accounting can be managed through the company's app, MyBusiness. The company was in a phase of rewriting significant portions of its codebase. The purpose was, among other things, to transition to React and divide the product into microservices, which facilitates further development and CI/CD deployments. Henrik worked with around 20 other developers, testers, UI/UX designers, and business analysts. Working in a larger company is different from working in a smaller one, and Henrik enjoys both work styles and is grateful for the experiences.",

		cv_title_5:
			"Nore Technology, System Developer and SCRUM Master May 2019 - Feb 2020",
		cv_text_5:
			"Nore Technology is a subsidiary of Söderberg & Partners that works with tools for financial advice and pension consultancy used in-house, as well as equivalent products for external clients. Henrik assisted in implementing new steps in the advisory process, developing documentation, improving interfaces, and reformatting old code. Relevant technologies included Javascript, CSS, HTML, jQuery, version control was managed through Git, and the work methodology was in Scrum.",

		cv_title_6:
			"Physician Sep 2013 - Feb 2019 Worked as a junior doctor, resident, and specialist trainee in Region Stockholm and Region Dalarna.",
		cv_text_6:
			"Henrik worked first as a junior doctor, then as a resident and specialist trainee, and also as a licensed physician. He gained valuable skills in how to interact with people, work effectively in teams, and leadership.",
		cv_techstack: "Techstack: ",
		cv_more_info: "More information",
		contact_title: "Contact",
		contact_subtitle: "To get in touch with me:",
		contact_company: "Company: ",
		contact_address: "Address: ",
		contact_phone: "Phone: ",
		contact_email: "Email: ",
		contact_text:
			"Feel free to reach out if you have any questions or if you are interested in collaborating with me.",
		demo_title: "Demo projects",
		demo_subtitle: "Please scroll or swipe sideways to continue reading.",
		demo_open: "Open demo",
		demo_sourcecode: "Source code",
		demo_portfolio_title: "Henrik's Portfolio",
		demo_portfolio_description: "My digital portfolio and resumé",
		demo_tretton_description:
			"tretton37 is a consultancy company where IT talents work. The company aimed to redefine its online presence to communicate its message more clearly, and that's when Henrik stepped in as one of the three developers. With a passionate attitude and strong commitment, he learned low-code programming while creating components with pixel-perfect precision.",
		demo_leetpeople_description:
			"Henrik created a web app that consumes an internal API to learn more about slightly more advanced React techniques. Recently, Henrik has also become interested in backend development, which led him to create APIs with CRUD functionality and databases for data storage.",
		demo_mirjaleipoo_description:
			"Mirja Leipoo is a well-established, locally-owned family business that includes a bakery, bed & breakfast, and catering services, based in Finland. The company wanted to establish an online presence to expand its customer base. During his study period, Henrik helped the company and applied his new knowledge.",
		demo_filmapp_description:
			"At the beginning of my career, I created this project to learn React and engage in a practical project related to something I was interested in.",
		demo_tictactoe_description:
			"After working with React and Javascript for a few years, I wanted to learn more and understand the basics of TypeScript. Since there were no opportunities through work, I chose to create a tic-tac-toe game in TypeScript to learn.",
		demo_weatherguru_title: "A no-nonsense weather-app",
		demo_weatherguru_description:
			"During my shifts as a doctor in the ER, I often found it challenging to stay updated on the weather without access to windows. Many weather apps I tried were filled with distracting commercials. This app provides a simple solution to that problem.",
		cm_title: "Consultant manager",
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
			"Staylive är ett litet företag som jobbar med livestreaming. Företaget hade ca 20 anställda varav ca 9 utvecklare. Henrik var en del av teamet bestående av 6 utvecklare som tog fram ett content management system (CMS) som möjliggjorde för kunder att själva skapa samt göra ändringar och t.o.m. skapa egna streaming-sidor. Detta frigjorde tid för utvecklarna som då kunde fokusera mer på att ta fram nya features.",
		cv_title_2: "Staylive, Frontend-utvecklare Sep 2021 - Dec 2021",
		cv_text_2:
			"Henrik skapade en ny feature som hanterar uppladdning av filmer och bilder via ett API. Detta sparade tid åt kundtjänst-medarbetare som tidigare manuellt behövde ladda upp filer men som nu kunde fokusera på annat.",
		cv_title_3: "Staylive, Frontend-utvecklare Apr 2021 - Aug 2021",
		cv_text_3:
			"En del av företagets bibliotek av React-komponenter hade börjat bli gamla, de var svåra att styla och uppgradera med nya features. Som ett led i att förbättra framtida utvecklingsmöjligheter så gjorde Henrik nya React-komponenter som var lättare att underhålla och skräddarsy.",
		cv_title_4: "Aspia, Frontend-utvecklare Mar 2020 - Mar 2021",
		cv_text_4:
			"Aspia är ett stort bokföringsföretag som hjälper företagare runtom i Sverige med att fokusera på sin kärnverksamhet, mycket av bokföringen kan skötas via företagets app MyBusiness. Företaget var i en fas där man skrev om stora delar av kodbasen. Syftet var bl.a. att gå över till React, dela upp produkten i mikrotjänster, vilket underlättar vidareutveckling och CI/CD deployments. Henrik arbetade med ca 20 andra utvecklare, testare, UI/UX-designers och kravanalytiker. Att arbeta i större företag skiljer sig från arbetet i mindre företag, och Henrik trivs med båda arbetsstilarna och är tacksam för de erfarenheterna.",
		cv_title_5:
			"Nore Technology, Systemutvecklare och SCRUM-master Maj 2019 - Feb 2020",
		cv_text_5:
			"Nore Technology är ett dotterbolag till Söderberg & Partners som dels arbetar med ett verktyg för finansiell rådgivning och pensionsrådgivning som används in-house, samt motsvarande produkter för externa kunder.  Henrik med att implementera nya steg i rådgivningsprocessen, utveckla dokumentationen, förbättra gränssnitt och reformattering av gammal kod. Relevanta tekniker inkluderar Javascript, CSS, HTML, jQuery, versionshantering sköttes via Git och arbetssättet var i Scrum.",
		cv_title_6:
			"Läkare Sep 2013 - Feb 2019 Arbetade som underläkare, AT- och ST-läkare i Region Stockholm och Region Dalarna.",
		cv_text_6:
			"Henrik har arbetat först som underläkare, sedan AT- och ST-läkare, samt även legitimerad läkare. Han lärde sig värdefulla egenskaper om hur man möter människor, hur man arbetar bäst i team och ledarskap.",
		cv_techstack: "Använde tekniker som: ",
		cv_more_info: "Mer information",
		contact_title: "Kontakt",
		contact_subtitle: "För att komma i kontakt med mig:",
		contact_company: "Företag: ",
		contact_address: "Address: ",
		contact_phone: "Telefon: ",
		contact_email: "E-post: ",
		contact_text:
			"Tveka inte att höra av dig om du har några frågor eller om du är intresserad av att samarbeta med mig.",
		demo_title: "Demoprojekt",
		demo_subtitle: "Vänligen rulla eller svep åt sidan för att fortsätta läsa.",
		demo_open: "Öppna demo",
		demo_sourcecode: "Källkod",
		demo_portfolio_title: "Henriks portfolio",
		demo_portfolio_description: "Mitt digitala portfolio och CV",
		demo_tretton_description:
			"tretton37 är ett konsultföretag där IT-talanger arbetar. Företaget strävade efter att omdefiniera sin online-närvaro för att tydligare kommunicera sitt budskap, och det var då Henrik trädde in som en av de tre utvecklare. Med en passionerad inställning och starkt engagemang lärde han sig low-code programmering samtidigt som han skapade fram komponenter med pixel-perfekt precision.",
		demo_leetpeople_description:
			"Henrik gjorde en webapp som konsumerar ett internt API för att lära sig mer om lite mer avancerade React-tekniker. Under sista tiden har Henrik även intresserat sig för backend, något som gjort att han även skapat API:er med CRUD-funktionalitet och databas där data lagras.",
		demo_mirjaleipoo_description:
			"Mirja Leipoo är ett väletablerat, lokalt familjeägt företag som omfattar ett bageri, bed & breakfast samt cateringtjänster, och det har sin bas i Finland. Företaget ville etablera en online-närvaro att utöka sin kundkrets. Under sin studietid, hjälpte Henrik företaget och samtidigt kunde han applicera sina nya kunskaper.",
		demo_filmapp_description:
			"I början av karriären så skapade jag denna för att lära sig React, och göra ett praktiskt projekt inom något jag var intresserad av.",
		demo_tictactoe_description:
			"Efter att ha jobbat några år med React och Javascript tänkte jag att jag ville lära mig mer och lära mig grunderna i typescript. Det fanns ingen möjlighet via jobbet, så jag valde att göra en luffarschack-spel i typescript för att lära mig.",
		demo_weatherguru_title: "En enkel och praktisk väder-app",
		demo_weatherguru_description:
			"Utan tillgång till fönster, så var det svårt att hålla sig a jour med vädret efter arbetspassen på akuten i min gamla karriär som läkare. Den här appen löser problemet på ett smidigt sätt",
		cm_title: "Konsultchef",
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
		cv_title: "CV",
		cv_title_1: "Staylive 前端开发工程师 2022年1月 - 2023年3月",
		cv_text_1:
			"Staylive 是一家从事直播技术的小公司。该公司约有20名员工，其中包括大约9名开发人员。Henrik 是一个由6名开发人员组成的团队的一员，他们开发了一个内容管理系统（CMS），使客户能够自行创建、进行更改，甚至创建自己的直播页面。这为开发人员节省了时间，使他们能够更多地专注于开发新功能。",

		cv_title_2: "Staylive 前端开发工程师 2021年9月 - 2021年12月",
		cv_text_2:
			"Henrik 实现了一个处理通过API上传视频和图像的新功能。这为客户服务人员节省了时间，他们以前需要手动上传文件，现在可以将注意力集中在其他任务上。",

		cv_title_3: "Staylive 前端开发工程师 2021年4月 - 2021年8月",
		cv_text_3:
			"公司的一部分 React 组件已经过时，难以进行样式设置并升级到新功能。作为改进未来开发机会的一部分，Henrik 创建了新的 React 组件，更易于维护和定制。",

		cv_title_4: "Aspia 前端开发工程师 2020年3月 - 2021年3月",
		cv_text_4:
			"Aspia 是一家大型会计公司，协助瑞典各地的企业专注于其核心业务。很多会计工作可以通过公司的 MyBusiness 应用程序进行管理。公司正在重写其代码库的重要部分。目的包括过渡到 React 并将产品分成微服务，这有助于进一步的开发和持续集成/持续部署。Henrik 与其他大约20名开发人员、测试人员、UI/UX 设计师和业务分析师共同工作。在大公司工作与在小公司工作不同，Henrik 既喜欢这两种工作风格，也为这些经历感到感激。",

		cv_title_5:
			"Nore Technology 系统开发工程师和 SCRUM 主管 2019年5月 - 2020年2月",
		cv_text_5:
			"Nore Technology 是 Söderberg & Partners 的子公司，主要从事财务咨询和养老金咨询工具的开发，既用于内部，也为外部客户提供类似产品。Henrik 协助实施咨询流程中的新步骤，开发文档，改进界面，并重新格式化旧代码。相关技术包括 Javascript、CSS、HTML、jQuery，版本控制通过 Git 进行管理，工作方法采用 Scrum。",

		cv_title_6:
			"医生 2013年9月 - 2019年2月 曾在斯德哥尔摩地区和达拉纳地区担任初级医生、住院医生和专科培训医生。",
		cv_text_6:
			"Henrik 首先作为初级医生，然后是住院医生和专科培训医生，还担任过注册医生。他掌握了与人交往、在团队中有效工作以及领导力方面的宝贵技能。",
		cv_techstack: "技术栈：",
		cv_more_info: "更多信息",
		contact_title: "联系方式",
		contact_subtitle: "与我作为顾问取得联系：",
		contact_company: "公司：",
		contact_address: "地址：",
		contact_phone: "电话：",
		contact_email: "电子邮件：",
		contact_text: "如果您有任何问题或有兴趣与我合作，请随时与我联系",
		demo_title: "演示项目",
		demo_subtitle: "请滚动或侧滑以继续阅读。",
		demo_open: "打开演示",
		demo_sourcecode: "源代码",
		demo_portfolio_title: "亨利克的作品集",
		demo_portfolio_description: "我的数字作品集和简历",
		demo_tretton_description:
			"tretton37是一家咨询公司，IT人才在此工作。该公司旨在重新定义其在线存在，以更清晰地传达其信息，亨利克作为其中三名开发人员之一加入其中。他充满激情的态度和强烈的投入感，学习了低代码编程，同时以像素完美的精度创建了组件。",
		demo_leetpeople_description:
			"亨利克创建了一个Web应用程序，消耗了内部API，以了解更多稍微高级的React技术。最近，亨利克还对后端开发产生了兴趣，这导致他创建了具有CRUD功能和数据库存储的API。",
		demo_mirjaleipoo_description:
			"Mirja Leipoo是一家知名的本地家族企业，包括面包店、床位&早餐以及餐饮服务，总部位于芬兰。该公司希望建立在线存在，以扩大其客户群。在学习期间，亨利克帮助了该公司并应用了他的新知识。",
		demo_filmapp_description:
			"在我的职业生涯初期，我创建了这个项目，以学习React，并参与与我感兴趣的内容相关的实际项目。",
		demo_tictactoe_description:
			"在使用React和Javascript工作了几年后，我想学到更多，并了解TypeScript的基础知识。由于工作中没有机会，我选择创建了一个TypeScript的井字棋游戏来学习。",
		demo_weatherguru_title: "简洁实用的天气应用",
		demo_weatherguru_description:
			"在急诊室当医生的时候，我常常发现没有窗户让我难以及时了解天气情况。我尝试了许多天气应用，但其中很多都充斥着令人分心的广告。这个应用为这个问题提供了一个简单的解决方案。",
		cm_title: "顾问经理",
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
