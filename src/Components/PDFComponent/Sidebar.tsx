import { Text as PDFText, View, Image } from "@react-pdf/renderer";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import FontAwesomeCustomIcon from "./FontAwesomeCustomIcon";
import { bernie } from "./bernie";
import QR from "./QR";
import { styles } from "./styles";
import { competencesByCategory } from "./constants";

const Sidebar: React.FC<{}> = (props) => {
	return (
		<View style={styles.left}>
			<View style={styles.bgCircle} />
			<View style={styles.imageContainer}>
				<Image src={bernie} style={styles.image} />
			</View>
			<View style={styles.frontCircle} />

			<View style={styles.chapterWrapper}>
				<PDFText style={styles.chapterHeading}>Expertis i urval</PDFText>
				{Object.entries(competencesByCategory).map(
					([category, competencesArray]) => {
						return (
							<View key={category}>
								<PDFText style={styles.competenceHeader}>{category}</PDFText>
								{competencesArray.map((competence) => (
									<View style={styles.competenceContainer}>
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

			<View style={styles.chapterWrapper} break>
				<PDFText style={styles.chapterHeading}>Kontakt</PDFText>
				<PDFText style={styles.competence}>
					Adress: Solåsvägen 5, 17061 SOLNA
				</PDFText>
				<PDFText style={styles.competence}>Telefon: +46725133704</PDFText>
				<PDFText style={styles.competence}>E-post: henrikcheng@live.se</PDFText>
			</View>
			<PDFText style={styles.chapterHeading}>Språk</PDFText>
			<PDFText style={styles.competence}>
				Kinesiska (Mandarin): Modersmål
			</PDFText>
			<PDFText style={styles.competence}>Svenska: Modersmål</PDFText>
			<PDFText style={styles.competence}>Engelska: Flytande</PDFText>

			<View style={styles.chapterWrapper}>
				<View>
					<PDFText break style={styles.chapterHeading}>
						LinkedIn
					</PDFText>
					<QR url="https://www.linkedin.com/in/henrik-cheng/" />
				</View>
				<View style={styles.QRWebsite}>
					<PDFText break style={styles.chapterHeading}>
						Website
					</PDFText>
					<QR url="https://henrikcheng.github.io/react-ts/" />
				</View>
			</View>
		</View>
	);
};

export default Sidebar;
