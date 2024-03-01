import { StyleSheet } from "@react-pdf/renderer";
// import { ColorPalette } from "../constants";

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
		paddingVertical: 4,
	},
	subheading: {
		fontSize: 16,
		paddingBottom: 10,
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
});
