import {StyleSheet} from "react-native";

export const appStyles = StyleSheet.create({
	container : {
		flex: 1,
		marginHorizontal: 16,
	},
	title: {
		fontSize:30,
		marginStart: 16,
	},
	subtitle: {
		fontSize: 20,
		marginTop: 4,
		color: "#666",
		marginStart: 16,
	},
	input: {
		paddingVertical: 12,
		padding: 16,
		borderRadius: 4,
		borderWidth: 1,
		borderColor: "#ddd",
		fontSize: 18,
		marginTop: 8,
	},
	buttonContainer: {
		backgroundColor: "lightgreen",
		paddingVertical: 12,
		paddingHorizontal: 16,
		borderRadius: 6,
		alignSelf: "flex-end",
		alignItems: "center",
		marginTop: 8,
	},
	buttonText: {
		fontSize: 18,
	},
	divider: {
		height: 1,
		backgroundColor: 16,
	},
	taskContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 8,
		borderBottomWidth: 1,
		borderColor: "#ddd",
		paddingVertical: 12,
	}, 
	taskText: {
		fontSize: 18,
	},
	taskDelete: {
		width: 23,
		height: 23,
		borderRadius: 13,
		backgroundColor: "red",
		justifyContent: "center",
		alignItems: "center",
	},
	taskDeleteText: {
		fontSize: 18,
		color: "white",
	},
});