import { StyleSheet } from "@react-pdf/renderer";
import { ColorPalette } from "./constants";

export const styles = StyleSheet.create({
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
	bgCircle: {
		backgroundColor: ColorPalette["Sunset Yellow"],
		borderRadius: "50%",
		position: "absolute",
		left: -150,
		top: -200,
		width: 300,
		height: 300,
	},
	imageContainer: {
		backgroundColor: ColorPalette["Pure White"],
		borderRadius: "50%",
		padding: 10,
		marginTop: 10,
	},
	frontCircle: {
		backgroundColor: ColorPalette["Sunset Yellow"],
		borderRadius: "50%",
		position: "absolute",
		left: 150,
		top: 15,
		width: 55,
		height: 55,
		opacity: 0.7,
	},
	left: {
		flex: 1,
		paddingHorizontal: 20,
		backgroundColor: ColorPalette["Ghost White"],
		position: "relative",
	},
	competenceContainer: {
		flexDirection: "row",
		alignItems: "flex-start",
		gap: 4,
	},
	competenceHeader: {
		fontSize: "13pt",
		marginBottom: 6,
		fontFamily: "Helvetica-Bold",
	},
	competence: {
		fontSize: "12pt",
		marginBottom: 6,
	},
	QRWebsite: {
		width: "100%",
		justifyContent: "flex-end",
	},
	right: {
		flex: 2,
		paddingRight: 20,
	},
	hero: {
		paddingTop: 20,
		paddingBottom: 60,
	},
	heroName: {
		flexDirection: "row",
		fontSize: 36,
		paddingBottom: 2,
	},
	heroLastname: {
		color: ColorPalette["Sunset Yellow"],
	},
	heroTitle: {},
	altHero: {
		backgroundColor: ColorPalette["Celestial Blue"],
		width: 350,
		height: 100,
		borderRadius: 6,
		padding: 20,
		marginBottom: 10,
	},
	altHeroIconStyles: {
		color: ColorPalette["Sunset Yellow"],
		height: "auto",
		width: 15,
	},
	altHeroSearchBar: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		gap: 4,
	},
	altHeroName: {
		borderRadius: 2,
		backgroundColor: "white",
		padding: 6,
		flexGrow: 1,
	},
	hireButton: {
		backgroundColor: ColorPalette["Bright Pink (Crayola)"],
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
	chapterWrapper: {
		marginTop: 10,
	},
	chapterHeading: {
		fontSize: 20,
		paddingVertical: 4,
	},
	text: {
		paddingBottom: 10,
		fontSize: 12,
	},
	pageNumber: {
		flexDirection: "row-reverse",
		paddingTop: 20,
		paddingRight: 15,
	},
	currentPage: {
		fontSize: 20,
	},
	totalPages: {
		fontSize: 24,
	},
});
