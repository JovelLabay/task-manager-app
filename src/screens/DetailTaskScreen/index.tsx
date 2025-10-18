import React, { useLayoutEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

import detailTaskScreenStyles from "./styles";
import { TaskItem } from "../../types/flatlistRendererInterface";

function DetailTaskScreen({
  setTasks,
}: {
  setTasks: React.Dispatch<React.SetStateAction<TaskItem[]>>;
}) {
  const route = useRoute();
  const navigation = useNavigation();

  const { taskId, title, description, isCompleted, isDeleted } =
    route.params as {
      taskId?: number;
      title: string;
      description?: string;
      isCompleted?: boolean;
      isDeleted?: boolean;
    };

  useLayoutEffect(() => {
    navigation.setOptions({
      title,
      headerRight: () => (
        <>
          {!isDeleted && (
            <TouchableOpacity
              onPress={() => {
                setTasks((prevTasks) =>
                  prevTasks.map((task) =>
                    task.id === taskId ? { ...task, isDeleted: true } : task
                  )
                );

                alert("Task deleted successfully!");
                navigation.goBack();
              }}
              style={detailTaskScreenStyles.deleteButton}
            >
              <Text>Delete</Text>
            </TouchableOpacity>
          )}
        </>
      ),
    });
  }, [navigation, title, taskId, setTasks, isDeleted]);

  return (
    <View style={detailTaskScreenStyles.container}>
      <Text style={detailTaskScreenStyles.title}>{title}</Text>
      {description ? (
        <Text style={detailTaskScreenStyles.description}>{description}</Text>
      ) : null}
      <Text
        style={[
          detailTaskScreenStyles.status,
          isCompleted && detailTaskScreenStyles.completed,
        ]}
      >
        Status: {isCompleted ? "Completed" : "Active"}
      </Text>

      {isDeleted && (
        <Text style={detailTaskScreenStyles.deleted}>
          {isDeleted ? "This task is deleted" : "This task is active"}
        </Text>
      )}
    </View>
  );
}

export default DetailTaskScreen;
