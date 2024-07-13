import { Tabs } from "expo-router";
import React, { useState } from "react";
import { useColorScheme } from "@/hooks/useColorScheme.web";
import { TabBarIcon } from "@/assets/components/navigation/TabBarIcon";
import CustomTabButton from "@/assets/components/CustomTabButton";
import { Alert, View } from "react-native";
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
          tabBarStyle: {
            backgroundColor: "#042146",
            borderRadius: 15,
            margin: 10,
            height: 70,
          },
          tabBarItemStyle: {
            borderRadius: 15,
            margin: 10,
            height: 50,
            width: 50,
          },
        }}
        initialRouteName="index"
      >
        <Tabs.Screen
          name="recent"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name="document" color="white" />
            ),
            tabBarItemStyle: {
              marginLeft: 0,
            },
          }}
        />

        <Tabs.Screen
          name="button"
          options={{
            tabBarButton: (props) => (
              <CustomTabButton
                {...props}
                onPress={handleButtonPress}
                title="Send | Pay"
              />
            ),
          }}
        />

        <Tabs.Screen
          name="navigation"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name="filter" color="white" />
            ),
            tabBarItemStyle: {
              marginLeft: 0,
            },
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
