import { Text as PDFText, View } from "@react-pdf/renderer";
import { faTrademark } from "@fortawesome/free-solid-svg-icons";

import FontAwesomeCustomIcon from "../Components/FontAwesomeCustomIcon";
import { globalStyles } from "../styles";
import { styles } from "./styles";
import Hero from "../Hero/Hero";
import QR from "../Components/QR";

const MainContent: React.FC<{}> = () => {
	const Pill = ({ dateString }: { dateString: string }) => (
		<View style={styles.pillContainer}>
			<PDFText style={styles.pillText}>{dateString}</PDFText>
		</View>
	);

	return (
		<View style={styles.right}>
			<View fixed style={styles.pageNumber}>
				<PDFText
					style={styles.currentPage}
					render={({ totalPages }) => `/${totalPages}`}
				/>
				<PDFText
					render={({ pageNumber }) => `${pageNumber}`}
					style={styles.totalPages}
				/>
			</View>
			<Hero />

			<PDFText style={styles.chapterHeading}>Om mig</PDFText>
			<PDFText style={styles.text}>
				Som frontend-utvecklare strävar jag ständigt efter att lära mig och
				utvecklas. Med min sociala kompetens har jag en förmåga att skapa en
				positiv arbetsmiljö där samarbete och produktivitet blomstrar.
			</PDFText>

			<PDFText style={styles.text}>
				Jag är nyfiken på omvärlden och tycker om att resa och uppleva nya
				saker. Tidigare har jag bland annat cyklat till Paris från Sverige,
				bestigit Kilimanjaro och varit på surfläger vid Great Ocean Road i
				Victoria, Australien. Sista tiden har jag åkt med familjen på lite
				lugnare resor såsom lugna charterresor till värmen.
			</PDFText>

			<View wrap={false} style={styles.mainContentSection}>
				<PDFText style={styles.chapterHeading}>Uppdrag och arbeten</PDFText>
				<View style={styles.occupationDescription}>
					<PDFText style={styles.occupationTitle}>Frontend-utvecklare</PDFText>
					<Pill dateString="mar-23 till nuv" />
				</View>
				<PDFText style={styles.subheading}>tretton37</PDFText>
				<PDFText style={styles.text}>
					Jag arbetar som konsult och frontendutvecklare på ett bilföretag via
					tretton37.
				</PDFText>
				<PDFText style={styles.text}>
					Exempelvis tog jag initiativ till att lära sig ett framework för React
					med vilken man kan skapa PDF-dokumentation vilket är viktigt i
					fordonsindustrin. Detta gjorde att jag på kort tid blev en
					nyckelspelare för hela teamet.
				</PDFText>
			</View>

			<View wrap={false} style={styles.mainContentSection}>
				<PDFText style={styles.occupationTitle}>Frontend-utvecklare</PDFText>
				<View style={styles.occupationDescription}>
					<PDFText style={styles.subheading}>Staylive AB</PDFText>
					<Pill dateString="aug-21 till mar-23" />
				</View>
				<PDFText style={styles.text}>
					Ändra Staylive är ett företag som hjälper content-innehavare att nå ut
					till tittare via streaming-tjänster. Företaget består av ett tjugotal
					anställda där ungefär hälften arbetar med utveckling. Jag tog fram
					delar till ett content management system (CMS) som gjorde att kunderna
					själva kunde skapa samt göra ändringar på deras egna streaming-sidor.
					Detta frigjorde tid för utvecklarna som då kunde fokusera mer på att
					ta fram nya features. Jag utvecklade även en filuppladdare som gjorde
					att kunder själva kunde ladda upp bilder och filmer, vilket tidigare
					behövdes göras manuellt av medarbetare.
				</PDFText>
			</View>

			<View wrap={false} style={{ marginTop: 20 }}>
				<PDFText style={styles.occupationTitle}>Frontend-utvecklare</PDFText>
				<View style={styles.occupationDescription}>
					<PDFText style={styles.subheading}>Aspia</PDFText>
					<Pill dateString="mar-20 till mar-21" />
				</View>
				<PDFText style={styles.text}>
					Aspia är ett företag som genom sin produkt MyBusiness hjälper
					företagare med bl.a. bokslut, redovisning, kvittohantering, anställdas
					stämpelklocka vilket gör att företagen då kan fokusera på sin
					verksamhet. Företaget var i en fas där man skrev om stora delar av
					kodbasen. Syftet var bl.a. att gå över till React, dela upp produkten
					i mikrotjänster, vilket underlättar vidareutveckling och deployments.
					Jag arbetade med ca 20 andra utvecklare, testare, UI/UX-designers och
					kravanalytiker.
				</PDFText>
				<PDFText style={styles.text}>
					Jag arbetade som frontendutvecklare i React. Jag levererade
					komponenter efter mockups i Figma. Data hanterades i Redux, och
					automatiska tester gjordes i Jest. Jag arbetade i Microsoft Azure med
					CD/CI. Mitt arbete bidrog till en produkt som är lättare att
					vidareutveckla, som är snabbare och lättare att navigera.
				</PDFText>
			</View>

			<View wrap={false} style={styles.mainContentSection}>
				<PDFText style={styles.occupationTitle}>
					Systemutvecklare & SCRUM-master
				</PDFText>
				<View style={styles.occupationDescription}>
					<PDFText style={styles.subheading}>Nore Technology AB</PDFText>
					<Pill dateString="maj-19 till feb-20" />
				</View>
				<PDFText style={styles.text}>
					Nore Technology är ett dotterbolag till Söderberg & Partners som
					arbetar med IT-lösningar för finansiell rådgivning och
					pensionsrådgivning. Jag arbetade med att implementera nya steg i
					rådgivningsprocessen samt att förbättringar av dokumentation.
					Relevanta tekniker inkluderar Javascript, CSS, HTML, jQuery,
					versionshantering sköttes via Git och arbetssättet var i Scrum. Utöver
					detta så var jag dev-teamets scrum-master på deltid, samt presenterade
					gruppens arbete för stakeholders efter varje sprint.
				</PDFText>
			</View>

			<View wrap={false} style={styles.mainContentSection}>
				<View style={styles.occupationDescription}>
					<PDFText style={styles.occupationTitle}>Läkare</PDFText>
					<Pill dateString="sep-13 till feb-19" />
				</View>
				<PDFText style={styles.subheading}>
					Region Stockholm och Region Dalarna
				</PDFText>
				<PDFText style={styles.text}>
					Jag har arbetat först som underläkare, sedan AT- och ST-läkare, samt
					även legitimerad läkare. Jag lärde sig värdefulla egenskaper om hur
					man möter människor, hur man arbetar bäst i team och ledarskap.
				</PDFText>
			</View>

			<View wrap={false} style={styles.mainContentSection}>
				<PDFText style={styles.chapterHeading}>Utbildning</PDFText>

				<View>
					<PDFText style={styles.educationTitle}>C#-intensivutbildning</PDFText>
					<View style={styles.educationRow}>
						<PDFText style={styles.educationDescription}>Academic Work</PDFText>
						<Pill dateString="feb-19 till mar-19" />
					</View>
				</View>

				<View>
					<PDFText style={styles.educationTitle}>Läkarprogrammet</PDFText>
					<View style={styles.educationRow}>
						<PDFText style={styles.educationDescription}>
							Karolinska Institutet (330 högskolepoäng)
						</PDFText>
						<Pill dateString="jan-08 till jun-13" />
					</View>
				</View>

				<View>
					<View style={globalStyles.row}>
						<PDFText style={styles.educationTitle}>
							Professional Scrum Master
						</PDFText>
						<FontAwesomeCustomIcon
							faIcon={faTrademark}
							style={styles.altHeroIconStyles}
						/>
						<PDFText style={styles.educationTitle}>I (PSM 1)</PDFText>
					</View>

					<View style={styles.scrumRow}>
						<View>
							<PDFText style={styles.educationDescription}>Scrum.org</PDFText>
						</View>
						<View>
							<QR url="https://www.credly.com/badges/2a9cab26-ef59-4dbf-abe0-d9acd4c9bb0d/public_url" />
						</View>
					</View>
				</View>
			</View>
		</View>
	);
};

export default MainContent;
