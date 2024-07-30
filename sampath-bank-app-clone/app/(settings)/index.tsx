import DashboardCustomButton from "@/assets/components/DashboardCustomButton";
import CustomButton from "@/assets/components/button";
import { TabBarIcon } from "@/assets/components/navigation/TabBarIcon";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function HomeScreen() {
  return (
    <>
      <View style={styles.headerBanner}>
        <View style={styles.textContent}>
          <Text
            style={{
              color: "#f6812a",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            username
          </Text>
          <Text>Last login : 27/07/2024 11:58:32</Text>
        </View>
        <View style={styles.headerIconBanner}>
          <Image
            source={require("@/assets/images/sideNavBarHeaderIcon.png")}
            style={styles.headerIcon}
          />
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          position: "relative",
          backgroundColor: "white",
        }}
      >
        <View style={styles.sideNavBar}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              width: "100%",
              paddingBottom: 15,
              borderBottomColor: "#F2F3F4",
              borderBottomWidth: 1,
              marginBottom: 20,
            }}
          >
            <Text style={styles.nabBarText}>Account & Cards</Text>
            <TabBarIcon name="business-outline" />
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              width: "100%",
              paddingBottom: 15,
              borderBottomColor: "#F2F3F4",
              borderBottomWidth: 1,
              marginBottom: 20,
            }}
          >
            <Text style={styles.nabBarText}>Payee & Billers</Text>
            <TabBarIcon name="paper-plane" />
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              width: "100%",
              paddingBottom: 15,
              borderBottomColor: "#F2F3F4",
              borderBottomWidth: 1,
              marginBottom: 20,
            }}
          >
            <Text style={styles.nabBarText}>Manage Schedules</Text>
            <TabBarIcon name="calendar-outline" />
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              width: "100%",
              paddingBottom: 15,
              borderBottomColor: "#F2F3F4",
              borderBottomWidth: 1,
              marginBottom: 20,
            }}
          >
            <Text style={styles.nabBarText}>FAQ</Text>
            <TabBarIcon name="chatbox-ellipses-outline" />
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              width: "100%",
              paddingBottom: 15,
              borderBottomColor: "#F2F3F4",
              borderBottomWidth: 1,
              marginBottom: 20,
            }}
          >
            <Text style={styles.nabBarText}>Terms & Conditions</Text>
            <TabBarIcon name="document-text-outline" />
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              width: "100%",
              paddingBottom: 15,
              borderBottomColor: "#F2F3F4",
              borderBottomWidth: 1,
              marginBottom: 20,
            }}
          >
            <Text style={styles.nabBarText}>Contact Us</Text>
            <TabBarIcon name="phone-portrait-outline" />
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              width: "100%",
              paddingBottom: 15,
              borderBottomColor: "#F2F3F4",
              borderBottomWidth: 1,

            }}
          >
            <Text style={styles.nabBarText}>Settings</Text>
            <TabBarIcon name="settings-outline" />
          </View>
        </View>
        <View style={styles.footerIconBanner}>
          <Image
            source={require("@/assets/images/sideNavBarIcon01.png")}
            style={styles.footerIcon}
          />
          <Image
            source={require("@/assets/images/sideNavBarIcon02.jpg")}
            style={styles.footerIcon}
          />
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            width: "100%",
            padding: 10,
           

          }}
        >
          <Text
          style={{
            marginRight: 20,
            fontSize: 15,
            fontWeight: "semibold",
          }}
          >Sampath Vishwa Online Banking</Text>
                <Text
          style={{
            marginRight: 20,
            fontSize: 14,
            alignItems: "flex-end",
          }}
          >Version 4.1.0</Text>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  headerBanner: {
    backgroundColor: "#F2F3F4",
    height: 200,
    borderRadius: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    position: "relative",
  },
  textContent: {
    paddingHorizontal: 40,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: 20,
  },
  headerIconBanner: {
    paddingHorizontal: 40,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: 20,
  },
  headerIcon: {
    width: 60,
    height: 60,
  },
  sideNavBar: {
    height: "auto",
    width: "100%",
    position: "relative",
    top: 0,
    left: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    padding: 25,
  },
  nabBarText: {
    fontSize: 18,
    marginRight: 10,
    color: "#2C3E50",
  },
  divider: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: 0.5,
    backgroundColor: "#D5DBDB",
    marginTop: -3,
  },
  footerIconBanner: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  footerIcon: {
    width: 120,
    height: 50,
    marginRight: 30,
  },
});
