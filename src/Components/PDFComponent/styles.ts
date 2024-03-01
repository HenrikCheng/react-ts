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
	hero: {
		paddingVertical: 50,
	},
	heroName: {
		flexDirection: "row",
		fontSize: 36,
		paddingBottom: 2,
	},
	heroLastname: {
		color: ColorPalette["Sunset Yellow"],
	},
	heroTitle: {
		fontFamily: "Helvetica-Bold",
	},
	altHero: {
		backgroundColor: ColorPalette["Celestial Blue"],
		width: 350,
		height: 100,
		borderRadius: 6,
		padding: 20,
		marginBottom: 10,
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
	emphasisText: {
		fontSize: 12,
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
