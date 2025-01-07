import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

// Modify DropdownProps to accept a generic type
interface DropdownProps<T> {
  label: string;
  options: T[];
  selected: T;
  onSelect: (value: T) => void;
  theme?: {
    background: string;
    text: string;
    header: string;
    footer: string;
    border: string;
  };
}
// Use generic <T> to make Dropdown more flexible
export const Dropdown = <T extends string>({
  label,
  options,
  selected,
  onSelect,
  theme,
}: DropdownProps<T>) => (
  <View style={{ marginVertical: 10 }}>
    <Text style={{ color: theme?.text }}>{label}</Text>
    <Picker
      selectedValue={selected}
      onValueChange={(itemValue) => onSelect(itemValue)}
    >
      {options.map((option) => (
        <Picker.Item label={option} value={option} key={option} />
      ))}
    </Picker>
  </View>
);
