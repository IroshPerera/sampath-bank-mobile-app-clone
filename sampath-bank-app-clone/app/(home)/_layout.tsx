import { router, Tabs } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <View style={{ flex: 1 }}>
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
              <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>
            ),
            
            
            
          }}
        />

        <Tabs.Screen
          name="next"
          options={{
            tabBarLabel: () => null, // Hide the text
            tabBarIcon: ({ color, focused }) => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ color: "#f6812a",fontWeight:"bold" }}>NEXT</Text>
                <Ionicons
                  name="arrow-forward-circle"
                  size={24}
                  color="#f6812a"
                  style={{ marginRight: 5 , marginLeft: 5}}
                />
              </View>
            ),
          }}
        />
      </Tabs>
    </View>
  );
}
