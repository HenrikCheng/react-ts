import { Text as PDFText, View, Image } from "@react-pdf/renderer";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import FontAwesomeCustomIcon from "../Components/FontAwesomeCustomIcon";
import { Bernie } from "../Images/Bernie";
import QR from "../Components/QR";
import { styles } from "./styles";
import { competencesByCategory } from "../constants";

const Sidebar: React.FC<{}> = (props) => {
	const Contact = () => {
		return (
			<View style={styles.sidebarSection}>
				<PDFText style={styles.sidebarHeading}>Kontakt</PDFText>
				<View>
					<PDFText style={styles.competenceHeader}>Adress:</PDFText>
					<PDFText style={styles.competence}>Solåsvägen 5, 17061 SOLNA</PDFText>
				</View>
				<View>
					<PDFText style={styles.competenceHeader}>Telefon:</PDFText>
					<PDFText style={styles.competence}>+46725133704</PDFText>
				</View>
				<View>
					<PDFText style={styles.competenceHeader}>E-post:</PDFText>
					<PDFText style={styles.competence}>henrikcheng@live.se</PDFText>
				</View>
			</View>
		);
	};

	const Languages = () => {
		return (
			<View style={styles.sidebarSection}>
				<PDFText style={styles.sidebarHeading}>Språk</PDFText>
				<View>
					<PDFText style={styles.competenceHeader}>Svenska:</PDFText>
					<PDFText style={styles.competence}>Modersmål</PDFText>
				</View>
				<View>
					<PDFText style={styles.competenceHeader}>
						Kinesiska (Mandarin):
					</PDFText>
					<PDFText style={styles.competence}>Modersmål</PDFText>
				</View>
				<View>
					<PDFText style={styles.competenceHeader}>Engelska:</PDFText>
					<PDFText style={styles.competence}>Flytande</PDFText>
				</View>
			</View>
		);
	};

	return (
		<View style={styles.left}>
			<View fixed>
				<View style={styles.bgCircle} />
				<View style={styles.imageContainer}>
					<Image src={Bernie} style={styles.image} />
				</View>
				<View style={styles.frontCircle} />
			</View>

			<Contact />
			<Languages />

			<View style={styles.sidebarSection}>
				<PDFText style={styles.competenceHeader}>Hemsida</PDFText>
				<QR url="https://henrikcheng.github.io/react-ts/" width={96} />
			</View>
			<View style={styles.sidebarSection}>
				<PDFText style={styles.competenceHeader}>LinkedIn</PDFText>
				<QR url="https://www.linkedin.com/in/henrik-cheng/" width={96} />
			</View>

			<View break style={styles.sidebarSection}>
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
		</View>
	);
};

export default Sidebar;
