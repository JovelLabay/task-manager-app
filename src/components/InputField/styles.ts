import { StyleSheet } from "react-native";

const inputFieldsStyles = StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: "center",
  },
  label: {
    fontWeight: "bold",
    color: "#333",
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    backgroundColor: "#fff",
    width: "100%",
    alignSelf: "center",
  },
  textArea: {
    height: 100,
  },
});

export default inputFieldsStyles;
