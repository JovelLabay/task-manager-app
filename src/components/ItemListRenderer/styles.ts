import { StyleSheet } from "react-native";

const itemListRendererStyles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ddd",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  checkBox: {
    backgroundColor: "red",
    width: "auto",
  },
  titleText: {
    fontWeight: "semibold",
    lineHeight: 20,
  },
  lineThrough: {
    textDecorationLine: "line-through",
    color: "#6c757d",
  },
  containerNoStatus: {
    backgroundColor: "#f9f9f9",
  },
  isCompleted: {
    backgroundColor: "#d4edda",
  },
  deleted: {
    backgroundColor: "#f8d7da",
    color: "#721c24",
    padding: 5,
    borderRadius: 5,
    marginLeft: 10,
  },
  complete: {
    backgroundColor: "#d1ecf1",
    color: "#0c5460",
    padding: 5,
    borderRadius: 5,
    marginLeft: 10,
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default itemListRendererStyles;
