import { StyleSheet } from "@react-pdf/renderer";
import { ColorPalette } from "../constants";

export const styles = StyleSheet.create({
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
	image: {
		borderRadius: "50%",
	},
	frontCircle: {
		backgroundColor: ColorPalette["Sunset Yellow"],
		borderRadius: "50%",
		position: "absolute",
		left: 150,
		top: 15,
		width: 55,
		height: 55,
		opacity: 0.6,
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
		fontSize: 13,
		marginBottom: 8,
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
	sidebarSection: {
		marginTop: 20,
	},
	sidebarHeading: {
		fontSize: 22,
		paddingVertical: 4,
	},
	altHeroIconStyles: {
		color: ColorPalette["Sunset Yellow"],
		height: "auto",
		width: 15,
	},
});
