import { router, Tabs } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <View style={{ 
      flex: 1,
      backgroundColor: "white",
       }}>
      <Tabs
        screenOptions={{
          headerShown: false,
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
            tabBarLabel: () => null, // Hide the text
            tabBarIcon: () => (
              <Image
                source={require("@/assets/images/sendMoney.png")}
                style={{ width: 60, height: 45 }}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="back"
          options={{
            tabBarLabel: () => null, // Hide the text
            tabBarIcon: ({ color, focused }) => (
              <TouchableOpacity onPress={() => router.push("(tab)")}>
              <Ionicons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>
            ),
            
            
            
          }}
        />

      </Tabs>
    </View>
  );
}
