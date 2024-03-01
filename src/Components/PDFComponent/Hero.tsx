import { Text as PDFText, View } from "@react-pdf/renderer";
import { styles } from "./styles";

const Hero: React.FC<{}> = (props) => {
	return (
		<View style={styles.hero}>
			<View style={styles.heroName}>
				<PDFText>Henrik </PDFText>
				<PDFText style={styles.heroLastname}>Cheng</PDFText>
			</View>
			<PDFText style={styles.heroTitle}>Frontend-utvecklare</PDFText>
		</View>
	);
};

export default Hero;
