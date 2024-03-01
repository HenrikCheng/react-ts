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
	imageContainer: {
		backgroundColor: ColorPalette["Bright Pink (Crayola)"],
		borderRadius: "50%",
		padding: 10,
		marginVertical: 10,
	},
	left: {
		flex: 1,
		paddingHorizontal: 20,
		paddingTop: 10,
		backgroundColor: ColorPalette["Ghost White"],
		borderRight: `2pt solid ${ColorPalette["Pacific Cyan"]}`,
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
		backgroundColor: ColorPalette["Celestial Blue"],
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
