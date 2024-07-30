import { router, Tabs } from "expo-router";
import React, { useState } from "react";
import { useColorScheme } from "@/hooks/useColorScheme.web";
import { TabBarIcon } from "@/assets/components/navigation/TabBarIcon";
import CustomTabButton from "@/assets/components/CustomTabButton";
import { Alert, TouchableOpacity, View, StyleSheet } from "react-native";
import ModalPopup from "@/assets/components/ModalPopUp";

export default function TabLayout() {
  const [modalVisible, setModalVisible] = useState(false);

  const handleButtonPress = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBarStyle,
        }}
        initialRouteName="index"
      >
        <Tabs.Screen
          name="recent"
          options={{
            tabBarButton: (props) => (
              <View style={styles.leftTab}>
                <TouchableOpacity
                  {...props}
                  onPress={() => router.push("(recent)")} // Replace 'targetRoute' with the desired route name
                  style={styles.tabButton}
                >
                  <TabBarIcon name="document" color="white" />
                </TouchableOpacity>
              </View>
            ),
          }}
        />

        <Tabs.Screen
          name="button"
          options={{
            tabBarButton: (props) => (
              <View style={styles.middleTab}>
                <TouchableOpacity>
                  <CustomTabButton
                    {...props}
                    onPress={handleButtonPress}
                    title="Send | Pay"
                  />
                </TouchableOpacity>
              </View>
            ),
          }}
        />

        <Tabs.Screen
          name="navigation"
          options={{
            tabBarButton: (props) => (
              <View style={styles.rightTab}>
                <TouchableOpacity
                  {...props}
                  onPress={() => router.push("(settings)")} // Replace 'targetRoute' with the desired route name
                  style={styles.tabButton}
                >
                  <TabBarIcon name="filter" color="white" />
                </TouchableOpacity>
              </View>
            ),
          }}
        />

        <Tabs.Screen
          name="index"
          options={{
            tabBarButton: () => null,
          }}
        />
      </Tabs>

      <ModalPopup visible={modalVisible} onClose={handleCloseModal} />
    </View>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: "#193a51",
    borderRadius: 15,
    margin: 10,
    height: 70,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  tabButton: {
    borderRadius: 15,
    margin: 20,
    height: 50,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  leftTab: {
    flex: 1,
    alignItems: "flex-start",
  },
  middleTab: {
    flex: 1,
    alignItems: "center",
  },
  rightTab: {
    flex: 1,
    alignItems: "flex-end",
  },
});
