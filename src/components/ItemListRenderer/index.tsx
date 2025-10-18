import { Text, View, TouchableOpacity } from "react-native";
import type { TaskItem } from "../../types/flatlistRendererInterface";
import { Checkbox } from "@futurejj/react-native-checkbox";
import { useNavigation } from "@react-navigation/native";

import itemListRendererStyles from "./styles";
import { screenConstants } from "../../constants";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../../App";

function ItemListRenderer({
  data,
  setTasks,
}: {
  data: TaskItem;
  setTasks: React.Dispatch<React.SetStateAction<TaskItem[]>>;
}) {
  const navigate =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const { id, title, description, isCompleted, isDeleted } = data;

  const marKTaskComplete = () => {
    !isDeleted &&
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === data.id
            ? { ...task, isCompleted: !task.isCompleted }
            : task
        )
      );
  };

  return (
    <TouchableOpacity
      onPress={() =>
        navigate.navigate(screenConstants.DETAIL_TASK, {
          taskId: id,
          title,
          description,
          isCompleted,
          isDeleted,
        })
      }
    >
      <View
        style={[
          itemListRendererStyles.container,
          isCompleted
            ? itemListRendererStyles.isCompleted
            : itemListRendererStyles.containerNoStatus,
        ]}
      >
        <View style={itemListRendererStyles.textContainer}>
          <Checkbox
            status={isCompleted ? "checked" : "unchecked"}
            onPress={marKTaskComplete}
            color="#4CAF50"
            uncheckedColor="#4CAF50"
            disabled={isDeleted}
          />
          <Text
            style={[
              itemListRendererStyles.titleText,
              isCompleted && itemListRendererStyles.lineThrough,
            ]}
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            {title}
          </Text>
        </View>

        <View style={itemListRendererStyles.statusContainer}>
          {isDeleted && (
            <Text style={itemListRendererStyles.deleted}>Deleted</Text>
          )}
          {isCompleted && (
            <Text style={itemListRendererStyles.complete}>Completed</Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default ItemListRenderer;
