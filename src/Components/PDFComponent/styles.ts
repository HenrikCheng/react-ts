import { StyleSheet } from "@react-pdf/renderer";

export const globalStyles = StyleSheet.create({
	full: {
		display: "flex",
		flex: 1,
		flexDirection: "row",
		flexGrow: 1,
		flexWrap: "wrap",
		gap: 20,
	},
	row: {
		flexDirection: "row",
	},
});
