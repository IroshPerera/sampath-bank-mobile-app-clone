import DashboardCustomButton from "@/assets/components/DashboardCustomButton";
import Dropdown from "@/assets/components/DropDown";
import CustomButton from "@/assets/components/button";
import { TabBarIcon } from "@/assets/components/navigation/TabBarIcon";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function HomeScreen() {
  const days = [
    { label: "Last 7 Days", value: "7" },
    { label: "Last 30 Days", value: "30" },
    { label: "Last 60 Days", value: "60" },
    { label: "Last 90 Days", value: "90" },
  ];

  return (
    <>
      <View style={styles.headerSection}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.headerText}>Vishwa Transaction History</Text>
          <TabBarIcon name="close-circle-outline" color={"#193a51"} size={30} />
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 15,
            width: "70%",
          }}
        >
          <View
          style={{
            width:"auto",
            height:"auto",
            padding:5,
            backgroundColor:"#F5CBA7",
            borderRadius:5,
          }}
          >
            <Text>Send Money</Text>
          </View>
          <View
          style={{
            width:"auto",
            height:"auto",
            padding:5,
            //backgroundColor:"#F5CBA7",
            borderRadius:5,
          }}
          >
            <Text>Bill Payments</Text>
          </View>
          <View
          style={{
            width:"auto",
            height:"auto",
            padding:5,
           // backgroundColor:"#F5CBA7",
            borderRadius:5,
          }}
          >
            <Text>Mobile Cash</Text>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 15,
          }}
        >
          <TextInput style={styles.input} placeholder="Search" />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 12,
              width: "35%",
            }}
          >
            <Dropdown
              data={days}
              onChange={console.log}
              placeholder="Select Days"
            />
          </View>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          position: "relative",
          backgroundColor: "white",
          padding: 20,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "#193a51",
            }}
          >
            No Transactions Found
          </Text>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  headerSection: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    padding: 25,
    marginTop: 30,
    backgroundColor: "white",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  input: {
    height: 50,
    color: "black",
    width: "60%",
    marginTop: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "#E5E8E8",
  },
});
