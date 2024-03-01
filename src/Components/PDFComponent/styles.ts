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
});
