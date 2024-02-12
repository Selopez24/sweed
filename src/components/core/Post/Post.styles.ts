import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    avatarImage: {
        width: 52,
        height: 52,
        borderRadius: 50,
        zIndex: 100,
    },
    post: {
        width: "100%",
        borderBottomColor: "#a9a9a9",
        borderBottomWidth: 1,
        padding: 15,
    },
    postHeader: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        marginBottom: 11,
    },
    postInfoContainer: {
        flexDirection: "row",
        textAlignVertical: "center",
        justifyContent: "space-between",
        marginLeft: 11,
    },
    username: { fontSize: 14, fontWeight: "700" },
    date: { fontWeight: "500", color: "#a9a9a9", marginLeft: 10 },
    icon: {
        fontSize: 18,
        textAlign: "center",
        color: "#696969",
    },
    content: {
        width: "100%",
    },
    text: {
        fontSize: 14,
        fontWeight: "400",
        color: "#090909",
        marginBottom: 22,
    },
    imageContainers: {
        width: "100%",
        flexDirection: "row",
        flexWrap: "wrap",
        position: "relative",
        height: 230,
    },
    postImages: {
        maxHeight: 220,
        borderRadius: 5,
        overflow: "hidden",
        margin: 1,
        borderWidth: 3,
        borderColor: "#e9e9e9",
        position: "absolute",
    },

    actionsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 12,
    },
    reactIcon: {
        color: "#696969",
        fontSize: 14,
    },
});