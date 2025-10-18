import { forwardRef } from "react";
import { Text, TextInput, View } from "react-native";

import inputFieldsStyles from "./styles";

const InputField = forwardRef<
  TextInput,
  {
    title: string;
    isMultiLine: boolean;
    value?: string;
    onChangeText?: (text: string) => void;
    onSubmitEditing?: () => void;
    returnKeyType?: "done" | "go" | "next" | "search" | "send";
  }
>(
  (
    { title, isMultiLine, value, onChangeText, onSubmitEditing, returnKeyType },
    ref
  ) => {
    return (
      <View style={inputFieldsStyles.container}>
        <Text style={inputFieldsStyles.label}>{title}</Text>
        <TextInput
          ref={ref}
          style={[
            inputFieldsStyles.input,
            isMultiLine && inputFieldsStyles.textArea,
          ]}
          multiline={isMultiLine}
          numberOfLines={isMultiLine ? 4 : 1}
          value={value}
          onChangeText={onChangeText}
          placeholder={`Enter ${title.toLowerCase()}`}
          returnKeyType={returnKeyType || (isMultiLine ? "done" : "next")}
          onSubmitEditing={onSubmitEditing}
          blurOnSubmit={isMultiLine}
        />
      </View>
    );
  }
);

InputField.displayName = "InputField";

export default InputField;
``;
