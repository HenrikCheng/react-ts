import { StyleSheet } from "@react-pdf/renderer";
import { ColorPalette } from "../constants";

export const styles = StyleSheet.create({
	right: {
		flex: 2,
		paddingRight: 20,
	},
	text: {
		paddingBottom: 10,
		fontSize: 12,
	},
	mainContentSection: {
		marginTop: 20,
	},
	chapterHeading: {
		fontSize: 22,
		paddingBottom: 10,
	},
	occupationTitle: {
		fontFamily: "Helvetica-Bold",
		fontSize: 16,
	},
	subheading: {
		fontSize: 16,
	},
	currentPage: {
		fontSize: 18,
	},
	totalPages: {
		fontSize: 24,
	},
	pageNumber: {
		flexDirection: "row-reverse",
		paddingTop: 10,
		paddingRight: 20,
		position: "absolute",
		top: 0,
		right: 0,
	},
	occupationDescription: {
		flexDirection: "row",
		gap: 10,
		alignItems: "center",
		marginBottom: 4,
	},
	pillContainer: {
		gap: 4,
	},
	pillText: {
		fontSize: 12,
		fontFamily: "Helvetica-Bold",
		color: ColorPalette["Sunset Yellow"],
	},
	educationRow: {
		flexDirection: "row",
		alignItems: "flex-start",
		marginBottom: 2,
		gap: 4,
	},
	scrumRow: {
		flexDirection: "row",
		justifyContent: "space-between",
		gap: 4,
	},
	educationTitle: {
		fontSize: 13,
		marginTop: 6,
		marginBottom: 4,
		fontFamily: "Helvetica-Bold",
	},
	educationDescription: {
		fontSize: "12pt",
		marginBottom: 6,
	},
	altHeroIconStyles: {
		color: ColorPalette["Smoky Black"],
		height: "auto",
		width: 8,
		marginRight: 4,
	},
});
