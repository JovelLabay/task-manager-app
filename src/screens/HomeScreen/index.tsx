import React from "react";
import { Switch, Text, View } from "react-native";

import { ItemListRenderer } from "../../components";
import { FlatListRenderer } from "../../components";

import { TaskItem } from "../../types/flatlistRendererInterface";

import homeScreenStyles from "./styles";

function HomeScreen({
  tasks,
  setTasks,
  setIsDeletedShow,
  isDeletedShow,
}: {
  tasks: TaskItem[];
  setTasks: React.Dispatch<React.SetStateAction<TaskItem[]>>;
  setIsDeletedShow: React.Dispatch<React.SetStateAction<boolean>>;
  isDeletedShow: boolean;
}) {
  const toggleSwitch = () =>
    setIsDeletedShow((previousState) => !previousState);

  const isCountTask = tasks.length === 0;

  return (
    <View style={homeScreenStyles.container}>
      <View style={homeScreenStyles.filterContainer}>
        <Text>Show Deleted {isCountTask ? "Task" : "Tasks"}</Text>
        <Switch
          value={isDeletedShow}
          onValueChange={toggleSwitch}
          trackColor={{ false: "#767577", true: "#721c24" }}
          thumbColor={isDeletedShow ? "#f4f3f4" : "#f4f3f4"}
        />
      </View>
      <FlatListRenderer
        dataList={[...tasks]}
        renderListItem={({ item }) => (
          <ItemListRenderer key={item.id} data={item} setTasks={setTasks} />
        )}
      />
    </View>
  );
}

export default HomeScreen;
