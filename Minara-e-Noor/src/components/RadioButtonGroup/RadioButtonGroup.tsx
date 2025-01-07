import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

interface RadioButtonGroupProps {
  label: string;
  options: string[];
  selected: string;
  onSelect: (option: string) => void;
}

export const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({
  label,
  options,
  selected,
  onSelect,
}) => {
  return (
    <View style={{ marginVertical: 8 }}>
      <Text>{label}</Text>
      <View style={{ flexDirection: "row" }}>
        {options.map((option) => (
          <TouchableOpacity key={option} onPress={() => onSelect(option)}>
            <Text
              style={{
                marginHorizontal: 8,
                color: selected === option ? "blue" : "black",
              }}
            >
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
