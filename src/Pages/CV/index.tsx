import { FormattedMessage } from "react-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFileDownload,
	faPlane,
	faLaptopCode,
	faSun,
} from "@fortawesome/free-solid-svg-icons";

import Card from "../../components/Card";
import Header from "../../components/Header";
import FontAwesomeCustomIcon from "./FontAwesomeCustomIcon";
import { bernie } from "./bernie";

import {
	Document,
	Page,
	Text as PDFText,
	View,
	StyleSheet,
	PDFDownloadLink,
	PDFViewer,
	Image,
} from "@react-pdf/renderer";
import QR from "./QR";

const CV: React.FC<{}> = (props) => {
	const competences: string[] = [
		"Responsiv design",
		"SCSS/SASS",
		"Tailwind CSS",
		"Agil Scrum",
		"CMS - Adobe Experience Manager & Sanity",
		"Figma",
		"JavaScript",
		"React",
		"React Hooks",
		"Accessible design",
		"GraphQL",
		"JIRA",
		"Kanban",
		"Microsoft Azure",
		"NextJS",
		"Node.js",
		"React-storybook",
		"Redux",
		"React Native",
		"REST API",
		"Storybook",
		"TypeScript",
		"Version Control - GIT",
	];

	// Create styles
	const styles = StyleSheet.create({
		full: {
			display: "flex",
			flex: 1,
			flexDirection: "row",
			flexGrow: 1,
			flexWrap: "wrap",
			gap: 20,
		},
		image: {
			borderRadius: "50%",
		},
		imageContainer: {
			backgroundColor: "#EEE0D2",
			borderRadius: "50%",
			padding: 10,
			marginVertical: 10,
		},
		left: {
			flex: 1,
			paddingHorizontal: 20,
			paddingTop: 10,
			backgroundColor: "#F8F5F0",
			borderRight: "2pt solid #EEE0D2",
		},
		competence: {
			fontSize: "13pt",
			marginBottom: 2,
		},
		QRWrapper: {
			paddingTop: 10,
		},
		right: {
			flex: 2,
			paddingRight: 20,
			paddingTop: 20,
		},
		hero: {
			backgroundColor: "#FFF396",
			width: 350,
			height: 100,
			borderRadius: 6,
			padding: 20,
			marginBottom: 10,
		},
		iconStyles: { color: "#000", height: 20, width: 20 },
		heroSearchBar: {
			display: "flex",
			flexDirection: "row",
			justifyContent: "space-between",
			gap: 4,
		},
		heroName: {
			borderRadius: 2,
			backgroundColor: "white",
			padding: 6,
			flexGrow: 1,
		},
		hireButton: {
			backgroundColor: "#FE5E00",
			display: "flex",
			flexDirection: "row",
			justifyContent: "center",
			alignItems: "center",
			borderRadius: 20,
			paddingHorizontal: 10,
		},
		hireButtonText: {
			color: "white",
		},
		heading: {
			fontSize: 30,
			paddingBottom: 4,
		},
		subheading: {
			fontSize: 16,
			paddingBottom: 10,
		},
		emphasisText: {
			fontSize: 12,
		},
		chapterHeading: {
			fontSize: 20,
			paddingVertical: 4,
		},
		text: {
			paddingBottom: 10,
			fontSize: 12,
		},
		footer: {
			position: "absolute",
			bottom: 0,
			right: 0,
			flexDirection: "row",
			paddingBottom: 5,
			paddingRight: 10,
		},
		currentPage: {
			fontSize: 10,
		},
		totalPages: {
			fontSize: 16,
		},
	});

	// Create Document Component
	const MyDocument = () => (
		<Document>
			<Page size="A4">
				<View style={styles.full}>
					<View style={styles.left}>
						<View style={styles.imageContainer}>
							<Image src={bernie} style={styles.image} />
						</View>
						<PDFText style={styles.chapterHeading}>Kontakt</PDFText>
						<PDFText style={styles.competence}>
							Adress: Solåsvägen 5, 17061 SOLNA
						</PDFText>
						<PDFText style={styles.competence}>Telefon: +46725133704</PDFText>
						<PDFText style={styles.competence}>
							E-post: henrikcheng@live.se
						</PDFText>
						<PDFText style={styles.chapterHeading}>Expertis i urval</PDFText>
						{competences.map((competence) => (
							<PDFText style={styles.competence} key={competence}>
								* {competence}
							</PDFText>
						))}
						<PDFText style={styles.chapterHeading}>Språk</PDFText>
						<PDFText style={styles.competence}>
							Kinesiska (Mandarin): Modersmål
						</PDFText>
						<PDFText style={styles.competence}>Svenska: Modersmål</PDFText>
						<PDFText style={styles.competence}>Engelska: Flytande</PDFText>

						<View style={styles.QRWrapper}>
							<PDFText break style={styles.chapterHeading}>
								Läs mer
							</PDFText>
							<QR url="https://www.linkedin.com/in/henrik-cheng/" />
						</View>
					</View>
					<View style={styles.right}>
						<View style={styles.hero}>
							<View style={styles.heroSearchBar}>
								<PDFText style={styles.chapterHeading}>
									Vem vill du anställa?
								</PDFText>
								<View style={styles.heroSearchBar}>
									<FontAwesomeCustomIcon
										faIcon={faPlane}
										style={styles.iconStyles}
									/>
									<FontAwesomeCustomIcon
										faIcon={faSun}
										style={styles.iconStyles}
									/>
									<FontAwesomeCustomIcon
										faIcon={faLaptopCode}
										style={styles.iconStyles}
									/>
								</View>
							</View>
							<View style={styles.heroSearchBar}>
								<PDFText style={styles.heroName}>Henrik Cheng</PDFText>
								<View style={styles.hireButton}>
									<PDFText style={styles.hireButtonText}>anställ</PDFText>
								</View>
							</View>
						</View>

						<PDFText style={styles.heading}>Henrik Cheng</PDFText>
						<PDFText style={styles.subheading}>Frontend-utvecklare</PDFText>
						<PDFText style={styles.text}>
							Som en frontend-utvecklare strävar Henrik ständigt efter att lära
							sig och utvecklas inom sitt område. Hans passion för att utforska
							nya teknologier och koncept är tydlig, och han tar alltid
							initiativ för att hålla sig uppdaterad med de senaste trenderna
							inom branschen. Med sin sociala kompetens har han en förmåga att
							skapa en positiv arbetsmiljö där samarbete och produktivitet
							blomstrar, oavsett om det är på kontoret eller under
							fritidsaktiviteter.
						</PDFText>

						<PDFText style={styles.chapterHeading}>Personligt</PDFText>
						<PDFText style={styles.text}>
							Henrik tycker om att spendera tid med vänner och familj. Henrik är
							nyfiken på omvärlden och tycker om att resa och uppleva nya saker.
							Tidigare har Henrik åkt på äventyresor, bland annat har han cyklat
							till Paris från Sverige, bestigit Kilimanjaro och varit på
							surfläger vid Great Ocean Road i Victoria, Australien. Sista tiden
							har Henrik åkt med familjen på lite lugnare resor, Lollo & Bernie
							är två karaktärer som både Henrik och hans familj bokstavligen
							älskar.
						</PDFText>

						<PDFText style={styles.chapterHeading}>Uppdrag och arbeten</PDFText>
						<PDFText style={styles.subheading}>Frontend-utvecklare</PDFText>
						<PDFText style={styles.emphasisText}>
							Konsult på smart Europe GmbH via tretton37: augusti 2023 -
							nuvarande
						</PDFText>
						<PDFText style={styles.text}>
							Smartcar är ett bilmärke som är samägt av Mercedes-Benz och Geely.
							Henrik arbetar med att introducera bilen på den europeiska
							marknaden. Under sin tid i projektet har Henrik varit en viktig
							komponent i teamet.
						</PDFText>
						<PDFText style={styles.text}>
							Exempelvis tog Henrik initiativ till att lära sig ett framework
							för att skapa PDF-dokumentation vilket är viktigt i
							fordonsindustrin. Detta gjorde att Henrik på kort tid blev en
							nyckelspelare för hela teamet.
						</PDFText>

						<PDFText style={styles.chapterHeading}>Frontend-utvecklare</PDFText>
						<PDFText style={styles.subheading}>
							Staylive AB: augusti 2021 - mars 2023
						</PDFText>
						<PDFText style={styles.text}>
							Ändra Staylive är ett företag som hjälper content-innehavare att
							nå ut till tittare via streaming-tjänster. Företaget består av ett
							tjugotal anställda där ungefär hälften arbetar med utveckling.
							Henrik tog fram delar till ett content management system (CMS) som
							gjorde att kunderna själva kunde skapa samt göra ändringar på
							deras egna streaming-sidor. Detta frigjorde tid för utvecklarna
							som då kunde fokusera mer på att ta fram nya features. Han
							utvecklade även en filuppladdare som gjorde att kunder själva
							kunde ladda upp bilder och filmer, vilket tidigare behövdes göras
							manuellt av medarbetare.
						</PDFText>

						<PDFText break style={styles.chapterHeading}>
							Frontend-utvecklare
						</PDFText>
						<PDFText style={styles.subheading}>
							Aspia: mars 2020 - mars 2021
						</PDFText>
						<PDFText style={styles.text}>
							Aspia är ett företag som genom sin produkt MyBusiness hjälper
							företagare med bl.a. bokslut, redovisning, kvittohantering,
							anställdas stämpelklocka vilket gör att företagen då kan fokusera
							på sin verksamhet. Företaget var i en fas där man skrev om stora
							delar av kodbasen. Syftet var bl.a. att gå över till React, dela
							upp produkten i mikrotjänster, vilket underlättar vidareutveckling
							och deployments. Henrik arbetade med ca 20 andra utvecklare,
							testare, UI/UX-designers och kravanalytiker.
						</PDFText>
						<PDFText style={styles.text}>
							Henrik arbetade som frontendutvecklare i React. Han levererade
							komponenter efter mockups i Figma. Data hanterades i Redux, och
							automatiska tester gjordes i Jest. Henrik arbetade i Microsoft
							Azure med CD/CI.
						</PDFText>
						<PDFText style={styles.text}>
							Henrik bidrog till att man fick en ny produkt som är lättare att
							vidareutveckla, som är snabbare och lättare att navigera.
						</PDFText>

						<PDFText style={styles.chapterHeading}>
							Systemutvecklare och SCRUM-master
						</PDFText>
						<PDFText style={styles.subheading}>
							Nore Technology AB: Maj 2019 - Feb. 2020
						</PDFText>
						<PDFText style={styles.text}>
							Nore Technology är ett dotterbolag till Söderberg & Partners som
							arbetar med IT-lösningar för finansiell rådgivning och
							pensionsrådgivning. Henrik arbetade med att implementera nya steg
							i rådgivningsprocessen samt att förbättringar av dokumentation.
							Relevanta tekniker inkluderar Javascript, CSS, HTML, jQuery,
							versionshantering sköttes via Git och arbetssättet var i scrum.
							Utöver detta så var Henrik dev-teamets scrum-master deltid, samt
							presenterade gruppens arbete för stakeholders efter varje sprint.
						</PDFText>

						<PDFText style={styles.chapterHeading}>Läkare</PDFText>
						<PDFText style={styles.subheading}>
							Region Stockholm och Region Dalarna: Sep. 2013 - Feb. 2019
						</PDFText>
						<PDFText style={styles.text}>
							Henrik har arbetat först som underläkare, sedan AT- och ST-läkare,
							samt även legitimerad läkare. Han lärde sig värdefulla egenskaper
							om hur man möter människor, hur man arbetar bäst i team och
							ledarskap.
						</PDFText>

						<PDFText style={styles.chapterHeading}>Utbildning</PDFText>
						<PDFText style={styles.subheading}>
							2019: C#-programmering hos Academy by Academic Work
						</PDFText>
						<PDFText style={styles.subheading}>
							2018-2013: Läkarprogrammet på Karolinska Institutet
						</PDFText>
						<PDFText style={styles.subheading}>2019: SCRUM.org PSM-1</PDFText>
					</View>
				</View>
				<View fixed style={styles.footer}>
					<PDFText
						render={({ pageNumber }) => `${pageNumber}`}
						style={styles.totalPages}
					/>
					<PDFText
						style={styles.currentPage}
						render={({ totalPages }) => `/${totalPages}`}
					/>
				</View>
			</Page>
		</Document>
	);

	return (
		<Card>
			<div id="CV">
				<Header classes="text-4xl font-semibold mb-4">
					<FormattedMessage id="cv_title" />
				</Header>

				<div className="flex flex-col w-screen">
					<PDFViewer className="h-screen w-4/5 self-center">
						<MyDocument />
					</PDFViewer>
					<PDFDownloadLink
						document={<MyDocument />}
						fileName="henrikcheng_CV.pdf"
					>
						{({ blob, url, loading, error }) =>
							loading ? (
								"Loading document..."
							) : (
								<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl">
									Download CV
									<FontAwesomeIcon icon={faFileDownload} className="ml-2" />
								</button>
							)
						}
					</PDFDownloadLink>
				</div>
			</div>
		</Card>
	);
};

export default CV;
