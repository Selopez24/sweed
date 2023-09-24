import { createTheme } from "@rneui/themed";

export const theme = createTheme({
  lightColors: {
    primary: "#027546",
    secondary: "#6a737c",
  },
  components: {
    Input: {
      cursorColor: "#027546",
      inputContainerStyle: {
        backgroundColor: "#fff",
        borderRadius: 6,
        borderBottomWidth: 0,
        paddingRight: 5,
      },
      inputStyle: {
        color: "#027546",
        fontSize: 14,
        paddingVertical: 5,
        paddingHorizontal: 8,
      },
    },
    Button: {
      buttonStyle: {
        borderRadius: 25,
        padding: 6,
        height: 50,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        elevation: 5,
        marginBottom: 22,
      },
      titleStyle: {
        color: "white",
        fontSize: 16,
        fontWeight: "700",
      },
      containerStyle: {
        width: "100%",
      },
    },
  },
});
