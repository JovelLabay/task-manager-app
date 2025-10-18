import { StyleSheet } from "react-native";

const detailTaskScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {},
  status: {
    fontStyle: "italic",
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 5,
  },
  completed: {
    backgroundColor: "#d4edda",
    color: "#155724",
  },
  deleted: {
    backgroundColor: "#f8d7da",
    color: "#721c24",
    padding: 10,
    borderRadius: 5,
  },
  deleteButton: {
    padding: 5,
    backgroundColor: "#f8d7da",
    borderRadius: 5,
  },
});

export default detailTaskScreenStyles;
