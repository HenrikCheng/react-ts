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
		marginTop: 10,
	},
	chapterHeading: {
		fontSize: 22,
		paddingBottom: 4,
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
		gap: 4,
		alignItems: "center",
		marginBottom: 4,
	},
	pillContainer: {
		backgroundColor: ColorPalette["Sunset Yellow"],
		borderRadius: 4,
		justifyContent: "center",
		paddingVertical: 4,
		paddingHorizontal: 6,
	},
	pillText: {
		fontSize: 12,
		fontFamily: "Helvetica-Bold",
		color: ColorPalette["Ghost White"],
	},
	educationRow: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 2,
		gap: 4,
	},
	educationDescription: {
		fontSize: "12pt",
	},
});
