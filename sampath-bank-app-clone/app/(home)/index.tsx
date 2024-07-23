import Dropdown from "@/assets/components/DropDown";
import { TabBarIcon } from "@/assets/components/navigation/TabBarIcon";
import { router } from "expo-router";
import { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const SendMoney = () => {
  const [selectedTab, setSelectedTab] = useState("Other Account");

  const bankNames = [
    { value: "AMANA BANK", label: "AMANA BANK" },
    { value: "BANK OF CEYLON", label: "BANK OF CEYLON" },
    { value: "BANK OF CHINA", label: "BANK OF CHINA" },
    { value: "CARGILLS BANK", label: "CARGILLS BANK" },
    { value: "CITIBANK", label: "CITIBANK" },
    { value: "COMMERCIAL BANK OF CEYLON", label: "COMMERCIAL BANK OF CEYLON" },
    { value: "DEUTSCHE BANK", label: "DEUTSCHE BANK" },
    { value: "DFCC BANK", label: "DFCC BANK" },
    { value: "HABIB BANK", label: "HABIB BANK" },
    { value: "HATTON NATIONAL BANK", label: "HATTON NATIONAL BANK" },
    { value: "INDIAN BANK", label: "INDIAN BANK" },
    { value: "INDIAN OVERSEAS BANK", label: "INDIAN OVERSEAS BANK" },
    { value: "MCB BANK", label: "MCB BANK" },
    { value: "NATIONAL DEVELOPMENT BANK", label: "NATIONAL DEVELOPMENT BANK" },
    { value: "NATIONS TRUST BANK", label: "NATIONS TRUST BANK" },
    { value: "PAN ASIA BANK", label: "PAN ASIA BANK" },
    { value: "PEOPLE'S BANK", label: "PEOPLE'S BANK" },
    { value: "PUBLIC BANK BERHAD", label: "PUBLIC BANK BERHAD" },
    { value: "SAMPATH BANK", label: "SAMPATH BANK" },
    { value: "SEYLAN BANK", label: "SEYLAN BANK" },
    { value: "STANDARD CHARTERED BANK", label: "STANDARD CHARTERED BANK" },
    { value: "STATE BANK OF INDIA", label: "STATE BANK OF INDIA" },
    {
      value: "HONG KONG AND SHANGHAI BANKING CORPORATION (HSBC)",
      label: "HONG KONG AND SHANGHAI BANKING CORPORATION (HSBC)",
    },
    { value: "UNION BANK OF COLOMBO", label: "UNION BANK OF COLOMBO" },
  ];

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.headerText}>Send Money</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TabBarIcon
            name="close-circle"
            color="black"
            style={{ marginLeft: 20 }}
            onPress={() => router.back()}
          />
        </View>
      </View>
      <View style={styles.accDetailsCard}>
        <TabBarIcon
          name="share-social"
          color="gray"
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            zIndex: 1,
            marginTop: 10,
            marginRight: 10,
          }}
        />
        <Image
          source={require("@/assets/images/detailsCradBg.png")}
          style={{
            width: "100%",
            height: 250,
            borderRadius: 15,
            opacity: 0.15,
            position: "absolute",
            top: 0,
            left: 220,
          }}
        />
        <View style={styles.accDetailsText}>
          <Text>xxxx xxxx xxxx</Text>
        </View>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 1,
          }}
        >
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              color: "black",
            }}
          >
            <View
              style={{
                position: "absolute",
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                }}
              >
                LKR
              </Text>
            </View>
            1,000,000.03
          </Text>
          <Text>Available</Text>
        </View>
      </View>

      <View
        style={{
          position: "relative",
          top: 260,
          zIndex: 0,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            padding: 15,
          }}
        >
          <View>
            <Text style={{ marginLeft: 15, marginTop: 15 }}>
              Quick Transfer
            </Text>
          </View>
          <View>
            <Text style={{ marginLeft: 15, marginTop: 15 }}>Saved Payees</Text>
          </View>

          <View>
            <Text style={{ marginLeft: 15, marginTop: 15 }}>Favourites</Text>
          </View>
        </View>

        <View style={styles.accTabs}>
          <TouchableOpacity
            style={[
              styles.accTab,
              selectedTab === "Own Account" && styles.selectedTab,
            ]}
            onPress={() => setSelectedTab("Own Account")}
          >
            <Text>Own Account</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.accTab,
              selectedTab === "Other Account" && styles.selectedTab,
            ]}
            onPress={() => setSelectedTab("Other Account")}
          >
            <Text>Other Account</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.accTab,
              selectedTab === "Other Card" && styles.selectedTab,
            ]}
            onPress={() => setSelectedTab("Other Card")}
          >
            <Text>Other Card</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          position: "relative",
          top: 260,
          zIndex: 0,
          height: "auto",
        }}
      >
        {selectedTab === "Other Account" && (
          <View style={styles.banckDetailsCard}>
            <Dropdown
              data={bankNames}
              onChange={console.log}
              placeholder="Select Bank"
            />
            <View>
              <TextInput style={styles.input} placeholder="Account Number" />
              <TextInput
                style={styles.input}
                placeholder="Account Holder Name"
              />
              <TextInput style={styles.input} placeholder="Amount" />
              <TextInput
                style={styles.input}
                placeholder="Beneficiary Remarks"
              />
              <TextInput style={styles.input} placeholder="Sender Remarks" />
            </View>
          </View>
        )}

        {selectedTab === "Own Account" && (
          <View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <Text>Own Account Transfer</Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 5,
              }}
            >
              <Text>Swipe to select your beneficiary account</Text>
            </View>

            <View style={styles.accDetailsCardMini}>
              <TabBarIcon
                name="share-social"
                color="gray"
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  zIndex: 1,
                  marginTop: 10,
                  marginRight: 10,
                }}
              />
              <Image
                source={require("@/assets/images/detailsCradBg.png")}
                style={{
                  width: "100%",
                  height: 250,
                  borderRadius: 15,
                  opacity: 0.15,
                  position: "absolute",
                  top: 0,
                  left: 220,
                }}
              />
              <View style={styles.accDetailsText}>
                <Text>xxxx xxxx xxxx</Text>
              </View>

              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                  zIndex: 1,
                }}
              >
                <Text
                  style={{
                    fontSize: 24,
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  <View
                    style={{
                      position: "absolute",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 12,
                      }}
                    >
                      LKR
                    </Text>
                  </View>
                  1,000,000.03
                </Text>
                <Text>Available</Text>
              </View>
            </View>

            <View
              style={{
                padding: 15,
              }}
            >
              <View>
                <TextInput style={styles.input} placeholder="Amount" />
                <TextInput
                  style={styles.input}
                  placeholder="Remarks (Optional)"
                />
              </View>
            </View>
          </View>
        )}

        {selectedTab === "Other Card" && (
          <View style={styles.banckDetailsCard}>
            <Dropdown
              data={bankNames}
              onChange={console.log}
              placeholder="Select Bank"
            />
            <View>
              <TextInput style={styles.input} placeholder="Card Number" />
              <TextInput style={styles.input} placeholder="Card Holder Name" />
              <TextInput style={styles.input} placeholder="Amount" />
              <TextInput
                style={styles.input}
                placeholder="Beneficiary Remarks"
              />
              <TextInput style={styles.input} placeholder="Sender Remarks" />
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};
export default SendMoney;

const styles = StyleSheet.create({
  accDetailsText: {
    marginLeft: 15,
    marginTop: 15,
  },
  accDetailsCard: {
    backgroundColor: "white",
    borderRadius: 15,
    margin: 10,
    height: 150,
    marginTop: 120,
    marginLeft: 20,
    marginRight: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    overflow: "hidden",
  },
  accDetailsCardMini: {
    backgroundColor: "white",
    borderRadius: 15,
    marginTop: 20,
    height: 150,
    marginLeft: 20,
    marginRight: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    position: "relative",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    overflow: "hidden",
  },
  header: {
    borderRadius: 15,
    margin: 10,
    height: 70,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  headerText: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },

  banckDetailsCard: {
    backgroundColor: "white",
    borderRadius: 15,
    margin: 10,
    height: "auto",
    marginLeft: 20,
    marginRight: 20,
    display: "flex",
    flexDirection: "column",
    position: "relative",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    borderBlockColor: "black",
    borderWidth: 0.5,
    padding: 15,
  },
  input: {
    height: 50,
    color: "black",
    marginTop: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "#E5E8E8",
  },
  accTabs: {
    display: "flex",
    flexDirection: "row",
  },
  accTab: {
    backgroundColor: "white",
    width: "33.33%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    padding: 15,
    textAlign: "center",
  },
  selectedTab: {
    backgroundColor: "#F5CBA7",
  },
});
