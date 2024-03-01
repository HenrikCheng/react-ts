import { Text as PDFText, View, Image } from "@react-pdf/renderer";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import FontAwesomeCustomIcon from "../FontAwesomeCustomIcon";
import { bernie } from "../bernie";
import QR from "../QR";
import { styles } from "./styles";
import { competencesByCategory } from "../constants";

const Sidebar: React.FC<{}> = (props) => {
	const Contact = () => {
		return (
			<View style={styles.sidebarSection} break>
				<PDFText style={styles.sidebarHeading}>Kontakt</PDFText>
				<PDFText style={styles.competence}>
					Adress: Solåsvägen 5, 17061 SOLNA
				</PDFText>
				<PDFText style={styles.competence}>Telefon: +46725133704</PDFText>
				<PDFText style={styles.competence}>E-post: henrikcheng@live.se</PDFText>
			</View>
		);
	};

	const Languages = () => {
		return (
			<View style={styles.sidebarSection}>
				<PDFText style={styles.sidebarHeading}>Språk</PDFText>
				<PDFText style={styles.competence}>
					Kinesiska (Mandarin): Modersmål
				</PDFText>
				<PDFText style={styles.competence}>Svenska: Modersmål</PDFText>
				<PDFText style={styles.competence}>Engelska: Flytande</PDFText>
			</View>
		);
	};

	return (
		<View style={styles.left}>
			<View style={styles.bgCircle} />
			<View style={styles.imageContainer}>
				<Image src={bernie} style={styles.image} />
			</View>
			<View style={styles.frontCircle} />

			<View>
				<PDFText style={styles.sidebarHeading}>Expertis i urval</PDFText>
				{Object.entries(competencesByCategory).map(
					([category, competencesArray]) => {
						return (
							<View key={category}>
								<PDFText style={styles.competenceHeader}>{category}</PDFText>
								{competencesArray.map((competence) => (
									<View style={styles.competenceContainer} key={competence}>
										<FontAwesomeCustomIcon
											faIcon={faStar}
											style={styles.altHeroIconStyles}
										/>
										<PDFText style={styles.competence} key={competence}>
											{competence}
										</PDFText>
									</View>
								))}
							</View>
						);
					},
				)}
			</View>

			<Contact />
			<Languages />

			<View style={styles.sidebarSection}>
				<View>
					<PDFText break style={styles.sidebarHeading}>
						LinkedIn
					</PDFText>
					<QR url="https://www.linkedin.com/in/henrik-cheng/" />
				</View>
				<View style={styles.QRWebsite}>
					<PDFText break style={styles.sidebarHeading}>
						Website
					</PDFText>
					<QR url="https://henrikcheng.github.io/react-ts/" />
				</View>
			</View>
		</View>
	);
};

export default Sidebar;
