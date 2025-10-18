import { Text, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { AddTaskScreen, DetailTaskScreen, HomeScreen } from "./src/screens";
import { labels, screenConstants } from "./src/constants";
import { useState } from "react";
import type { TaskItem } from "./src/types/flatlistRendererInterface";

export type RootStackParamList = {
  [screenConstants.HOME]: undefined;
  [screenConstants.ADD_TASK]: undefined;
  [screenConstants.DETAIL_TASK]: {
    taskId?: number;
    title: string;
    description?: string;
    isCompleted?: boolean;
    isDeleted?: boolean;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStack() {
  const navigate =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  /**
   * JUST A BASIC USESTATE HERE FOR STATE MANAGEMENT
   * FOR REAL APPS WE WILL USE REXUX WITH SAGA AND CONTEXT FOR BETTER STATE MANAGEMENT
   */
  const [tasks, setTasks] = useState<TaskItem[]>([]);
  const [isDeletedShow, setIsDeletedShow] = useState(false);

  return (
    <Stack.Navigator
      initialRouteName={screenConstants.HOME}
      screenOptions={{
        headerShown: true,
        contentStyle: {
          backgroundColor: "#fff",
        },
      }}
    >
      <Stack.Screen
        name={screenConstants.HOME}
        component={() => (
          <HomeScreen
            tasks={tasks.filter((data) => {
              const shouldShow = isDeletedShow ? true : !data.isDeleted;
              return shouldShow;
            })}
            setTasks={setTasks}
            setIsDeletedShow={setIsDeletedShow}
            isDeletedShow={isDeletedShow}
          />
        )}
        options={{
          title: labels.homeHeaderScreen,
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigate.navigate(screenConstants.ADD_TASK)}
            >
              <Text>{labels.addTaskButtonLabel}</Text>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name={screenConstants.ADD_TASK}
        component={() => <AddTaskScreen setTasks={setTasks} />}
        options={{
          title: labels.addTaskHeaderScreen,
          presentation: "modal",
          gestureEnabled: true,
        }}
      />
      <Stack.Screen
        name={screenConstants.DETAIL_TASK}
        component={() => <DetailTaskScreen setTasks={setTasks} />}
        options={{
          title: labels.detailTaskHeaderScreen,
          animation: "slide_from_right",
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
