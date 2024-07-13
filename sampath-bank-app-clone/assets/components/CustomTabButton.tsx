// CustomTabButton.js
import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { TabBarIcon } from "@/assets/components/navigation/TabBarIcon";

const CustomTabButton = ({ onPress,title }:any) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <TabBarIcon name="arrow-up-circle-sharp" color="white" />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 65,
    width: 65,
    borderRadius: 100,
    backgroundColor: '#f6812a',
    position:"relative",
    bottom:20
  },
  title: {
    position:"absolute",
    bottom:-15,
    color: 'white',
    marginTop: 5,
    fontSize: 12,
  },
});

export default CustomTabButton;
