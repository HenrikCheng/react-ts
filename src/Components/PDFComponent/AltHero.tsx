import {
	faPlane,
	faLaptopCode,
	faSun,
} from "@fortawesome/free-solid-svg-icons";

import FontAwesomeCustomIcon from "./FontAwesomeCustomIcon";

import { Text as PDFText, View } from "@react-pdf/renderer";
import { styles } from "./styles";

const AltHero: React.FC<{}> = (props) => {
	return (
		<View style={styles.altHero}>
			<View style={styles.altHeroSearchBar}>
				<PDFText style={styles.chapterHeading}>Vem vill du anställa?</PDFText>
				<View style={styles.altHeroSearchBar}>
					<FontAwesomeCustomIcon
						faIcon={faPlane}
						style={styles.altHeroIconStyles}
					/>
					<FontAwesomeCustomIcon
						faIcon={faSun}
						style={styles.altHeroIconStyles}
					/>
					<FontAwesomeCustomIcon
						faIcon={faLaptopCode}
						style={styles.altHeroIconStyles}
					/>
				</View>
			</View>
			<View style={styles.altHeroSearchBar}>
				<PDFText style={styles.altHeroName}>Henrik Cheng</PDFText>
				<View style={styles.hireButton}>
					<PDFText style={styles.hireButtonText}>Anställ</PDFText>
				</View>
			</View>
		</View>
	);
};

export default AltHero;
