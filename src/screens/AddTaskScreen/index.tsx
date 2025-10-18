import React, { useState, useRef } from "react";
import {
  Keyboard,
  Text,
  TouchableWithoutFeedback,
  View,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { labels } from "../../constants";
import { Button, InputField } from "../../components";

import { TaskItem } from "../../types/flatlistRendererInterface";

import addTaskScreenStyles from "./styles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";

// Simple ID generator for React Native
const generateId = () => {
  return Date.now() + Math.floor(Math.random() * 1000);
};

function AddTaskScreen({
  setTasks,
}: {
  setTasks: React.Dispatch<React.SetStateAction<TaskItem[]>>;
}) {
  const navigate =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [form, setForm] = useState({ title: "", description: "" });
  const [isLoading, setIsLoading] = useState(false);

  const descriptionInputRef = useRef<TextInput>(null);

  const addNewTaskHandler = () => {
    if (form.title === "" || form.description === "") {
      alert("Please fill in all fields");
      return;
    }

    setIsLoading(true);
    const newTask: TaskItem = {
      id: generateId(),
      title: form.title,
      description: form.description,
      isCompleted: false,
      isDeleted: false,
    };

    // Simulate a delay of 3 seconds before adding the new task
    setTimeout(() => {
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setForm({ title: "", description: "" });

      setIsLoading(false);
      alert("Task added successfully!");

      navigate.goBack();
    }, 3000);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={addTaskScreenStyles.container}>
        <Text>AddTaskScreen Component</Text>
        <InputField
          title={labels.titleInputLabel}
          isMultiLine={false}
          value={form.title}
          onChangeText={(text) => setForm({ ...form, title: text })}
          returnKeyType="next"
          onSubmitEditing={() => descriptionInputRef.current?.focus()}
        />
        <InputField
          ref={descriptionInputRef}
          title={labels.descriptionInputLabel}
          isMultiLine={true}
          value={form.description}
          onChangeText={(text) => setForm({ ...form, description: text })}
          returnKeyType="done"
        />
        <Button
          title={isLoading ? "Adding..." : "Add Task"}
          onPress={addNewTaskHandler}
          isDisabled={isLoading}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

export default AddTaskScreen;
