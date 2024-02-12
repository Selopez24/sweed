import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputContainer: {
        backgroundColor: "#ffffffcc",
        width: "100%",
    },

    input: {
        height: 200,
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    imagesContainer: {
        flexDirection: 'row',
        gap: 5
    },
    loadedImages: { width: 100, height: 100, marginRight: 10, borderRadius: 5 },
    actionsContainer: {
        paddingRight: 10,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
    },
    btn: {
        backgroundColor: "red",
        display: "flex",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        height: 30,
        borderRadius: 15,
    },
});