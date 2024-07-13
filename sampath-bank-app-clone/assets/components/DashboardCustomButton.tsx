import React, { useState } from "react";
import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";
import { TabBarIcon } from "./navigation/TabBarIcon";

const DashboardCustomButton = ({ color, icon }: any) => {
  const [shadow, setShadow] = useState(styles.shadow);

  const handleTouchStart = () => {
    setShadow(styles.activeShadow);
  };

  const handleTouchEnd = () => {
    setShadow(styles.shadow);
  };

  return (
    <TouchableWithoutFeedback
      onPressIn={handleTouchStart}
      onPressOut={handleTouchEnd}
    >
      <View style={[styles.dashboardBtn, shadow, { backgroundColor: color }]}>
        <TabBarIcon name={icon} color={"black"} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default DashboardCustomButton;

const styles = StyleSheet.create({
  dashboardBtn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    margin: 10,
    marginLeft: 20,
    marginRight: 20,
    height: 60,
    width: 60,
  },
  shadow: {
    // Box shadow for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Box shadow for Android
    elevation: 5,
  },
  activeShadow: {
    // Increased shadow for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 5.84,
    // Increased shadow for Android
    elevation: 10,
  },
});
