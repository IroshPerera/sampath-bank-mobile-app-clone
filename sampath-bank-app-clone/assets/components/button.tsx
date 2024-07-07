import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  TouchableOpacityProps,
} from "react-native";

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  width?: number; // Ensure width is a number
  height?: number; // Ensure height is a number
  color?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  width = 100,
  height = 50,
  color = "#f6812a",
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { width, height, backgroundColor: color }]}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  } as ViewStyle,
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  } as TextStyle,
});

export default CustomButton;
