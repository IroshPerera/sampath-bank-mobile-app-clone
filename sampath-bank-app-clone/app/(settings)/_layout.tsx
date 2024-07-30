import { router, Tabs } from "expo-router";
import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { TabBarIcon } from "@/assets/components/navigation/TabBarIcon";
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
    <View style={{ 
      flex: 1, 
      backgroundColor: "white", 
      }}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#193a51",
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
          name="index"
          options={{
            tabBarButton: () => null,
          }}
        />
      </Tabs>
      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 25,
          left: 40,
          backgroundColor: '#E74C3C',
          borderRadius: 100,
          padding: 5,
        }}
        onPress={() => router.back()}
      >
        <TabBarIcon name="power" color="white"  size={25}  />
        
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 20,
          right: 40,
          backgroundColor: '#193a51',
          borderRadius: 25,
          padding: 10,
        }}
        onPress={() => router.back()}
      >
        <TabBarIcon name="close" color="white" />
      </TouchableOpacity>

      <ModalPopup visible={modalVisible} onClose={handleCloseModal} />
    </View>
  );
}
