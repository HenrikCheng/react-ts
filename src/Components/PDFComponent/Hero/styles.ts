import { StyleSheet } from "@react-pdf/renderer";
import { ColorPalette } from "../constants";

export const styles = StyleSheet.create({
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
	//Depreciated
	altHero: {
		backgroundColor: ColorPalette["Sunset Yellow"],
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
		backgroundColor: ColorPalette["Sunset Yellow"],
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
});
