import { FormattedMessage } from "react-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";

import Card from "../../components/Card";
import Header from "../../components/Header";

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
			backgroundColor: "white",
			borderRadius: "50%",
			padding: 10,
			marginVertical: 10,
		},
		left: {
			flex: 1,
			paddingHorizontal: 20,
			paddingTop: 10,
			height: "100%",
			backgroundColor: "#EEE0D2",
			borderRight: "2pt solid #F38C00",
		},
		competence: {
			fontSize: "13pt",
			marginBottom: 2,
		},
		right: {
			flex: 2,
			paddingRight: 20,
			paddingTop: 20,
		},
		heading: {
			fontSize: 30,
			paddingBottom: 4,
		},
		subheading: {
			fontSize: 16,
			paddingBottom: 20,
		},
		chapterHeading: {
			fontSize: 20,
			paddingVertical: 4,
		},
		text: {
			paddingBottom: 10,
		},
		header: {
			// borderBottom: "2pt solid #F38C00",
			width: "100vw",
			position: "absolute",
			top: 10,
		},
		footer: {
			width: "100vw",
			minHeight: 20,
			backgroundColor: "#383833",
			borderTop: "5pt solid #484843",
			color: "white",
			display: "flex",
			justifyContent: "center",
			flexDirection: "row",
			alignItems: "flex-start",
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
						{/* <PDFText style={styles.chapterHeading}>LinkedIn</PDFText>
						<QR url="https://www.linkedin.com/in/henrik-cheng/" /> */}

						<PDFText style={styles.chapterHeading}>Kontakt</PDFText>
						<PDFText style={styles.competence}>
							Adress: Solåsvägen 5, 17061 SOLNA
						</PDFText>
						<PDFText style={styles.competence}>Telefon: +46725133704</PDFText>
						<PDFText style={styles.competence}>
							E-post: henrikcheng@live.se
						</PDFText>

						<PDFText style={styles.chapterHeading}>Kompetenser</PDFText>
						{competences.map((competence) => (
							<PDFText style={styles.competence} key={competence}>
								{competence}
							</PDFText>
						))}
					</View>
					<View fixed style={styles.header}></View>
					<View style={styles.right}>
						<PDFText style={styles.heading}>Henrik Cheng</PDFText>
						<PDFText style={styles.subheading}>Frontend-utvecklare</PDFText>
						<PDFText style={styles.text}>
							Henrik har ett stort intresse för design och problemlösning.
							Henrik har en bakgrund som läkare, vilket har format honom till en
							person som är effektiv i sitt arbete och givit honom vana att
							arbeta i team för kundens bästa. Han är alltid intresserad av att
							lära sig nya saker och utvecklas i sin roll.
						</PDFText>

						<PDFText style={styles.chapterHeading}>Personligt</PDFText>
						<PDFText style={styles.text}>
							Henrik tycker om att spendera tid med vänner och familj,
							exempelvis med att spela brädspel och padel. Henrik är nyfiken på
							omvärlden och gillar äventyr och investering. Det modigaste och
							roligaste Henrik har gjort var att cykla från Sverige till Paris
							för att samla in pengar till Barncancerfonden.
						</PDFText>
					</View>
				</View>
				{/* <View fixed style={styles.footer}>
					<PDFText
						render={({ pageNumber }) => `${pageNumber}`}
						style={styles.totalPages}
					/>
					<PDFText
						style={styles.currentPage}
						render={({ totalPages }) => `/${totalPages}`}
					/>
				</View> */}
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
