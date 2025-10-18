import React from "react";
import type { FlatListRendererProps } from "../../types/flatlistRendererInterface";
import { FlatList } from "react-native";

import styles from "./styles";

function FlatListRenderer({ dataList, renderListItem }: FlatListRendererProps) {
  return (
    <FlatList
      style={styles}
      data={dataList}
      renderItem={renderListItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}

export default FlatListRenderer;
