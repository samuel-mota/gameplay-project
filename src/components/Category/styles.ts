import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginRight: 10,
    marginLeft: 5,
  },
  content: {
    width: 100,
    height: 120,
    // backgroundColor: theme.colors.secondary40,
    borderColor: theme.colors.secondary40,
    borderWidth: 3,
    borderRadius: 8,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
  },
  title: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    fontSize: 15,
  },
  check: {
    position: "absolute",
    top: 7,
    right: 7,
    width: 10,
    height: 10,
    backgroundColor: theme.colors.secondary100,
    // alignSelf: "flex-end",
    // marginRight: 7,
    borderColor: theme.colors.secondary50,
    borderWidth: 2,
    borderRadius: 3,
  },
  checked: {
    position: "absolute",
    top: 7,
    right: 7,
    width: 10,
    height: 10,
    backgroundColor: theme.colors.primary,
    // alignSelf: "flex-end",
    // marginRight: 7,
    borderRadius: 3,
  },
});