import type { ListRenderItem } from "react-native";

/**
 * FOR REAL APPS WE USUALLY USE TYPE MODULES ON THESE INTERFACES
 * FOR REAL APPS THIS SHOULD BE FLEXIBLE AND GENERIC TO BE ABLE TO USED ON OTHER LISTING COMPONENTS
 */

interface TaskItem {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
  isDeleted: boolean;
}

interface FlatListRendererProps {
  dataList: TaskItem[];
  renderListItem: ListRenderItem<TaskItem>;
}
