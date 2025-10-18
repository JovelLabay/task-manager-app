import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";

function Button({
  title,
  onPress,
  isDisabled,
}: {
  title: string;
  onPress: () => void;
  isDisabled?: boolean;
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, isDisabled && styles.buttonDisabled]}
      disabled={isDisabled}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

export default Button;
