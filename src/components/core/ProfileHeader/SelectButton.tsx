import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

type Select = "all" | "media" | "diaries";

interface Props {
  onSelect: (select: Select) => void;
  selected: Select;
  property: Select;
}

const SelectButton = ({ onSelect, selected, property }: Props) => {
  return (
    <Pressable
      onPress={() => onSelect(selected)}
      style={[
        styles.contentButton,
        selected === property && styles.selectedButton,
      ]}
    >
      <Text
        style={[
          styles.textButton,
          selected === property && styles.selectedText,
        ]}
      >
        {property}
      </Text>
    </Pressable>
  );
};

export default SelectButton;

const styles = StyleSheet.create({
  contentButton: {
    width: 100,
    height: 33,
    borderRadius: 17,
    justifyContent: "center",
    alignItems: "center",
  },
  selectedButton: { backgroundColor: "#027546" },
  selectedText: { color: "white" },
  textButton: {
    color: "#027546",
    fontWeight: "600",
  },
});
