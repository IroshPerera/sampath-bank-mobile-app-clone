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
      <View>
        <Image
          source={require("@/assets/images/dashboard-bg.jpg")}
          style={styles.headerImg}
        />
      </View>
      <View style={styles.header}>
        <Text style={styles.headerText}>irosh2002</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TabBarIcon
            name="settings-outline"
            color="white"
            style={{ marginLeft: 20 }}
          />
          <TabBarIcon
            name="mail-outline"
            color="white"
            style={{ marginLeft: 20 }}
          />
          <TabBarIcon
            name="notifications-outline"
            color="white"
            style={{ marginLeft: 20 }}
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
          <Text style={{ fontSize: 12 }}>DOUBLE S SAVINGS-PERSONAL</Text>
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

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "50%",
              marginTop: 20,
            }}
          >
            <View>
              <Text>0.00</Text>
              <Text>Lien</Text>
            </View>

            <View>
              <Text>0.00</Text>
              <Text>Float</Text>
            </View>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              left: 10,
              position: "absolute",
              bottom: 10,
            }}
          >
            <View>
              <View
                style={{
                  position: "relative",
                  width: 100,
                }}
              >
                <Text
                  style={{
                    color: "green",
                  }}
                >
                  <TabBarIcon
                    name="arrow-down"
                    color="green"
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      zIndex: 1,
                      marginTop: 10,
                      marginRight: 10,
                    }}
                  />
                  1,230.00
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 10,
                }}
              >
                Recent Transaction
              </Text>
            </View>

            <View>
              <View
                style={{
                  position: "relative",
                  width: 100,
                }}
              >
                <Text
                  style={{
                    color: "red",
                  }}
                >
                  <TabBarIcon
                    name="arrow-up"
                    color="red"
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      zIndex: 1,
                      marginTop: 10,
                      marginRight: 10,
                    }}
                  />
                  1,230.00
                </Text>
              </View>
            </View>

            <View>
              <View
                style={{
                  position: "relative",
                  width: 100,
                }}
              >
                <Text
                  style={{
                    color: "red",
                  }}
                >
                  <TabBarIcon
                    name="arrow-up"
                    color="red"
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      zIndex: 1,
                      marginTop: 10,
                      marginRight: 10,
                    }}
                  />
                  1,230.00
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          position: "relative",
          top: 100,
        }}
      >
        <View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              margin: 20,
              marginBottom: 0,
              padding: 10,
              paddingTop: 0,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
              }}
            >
              Favorite Payees
            </Text>
            <Text
              style={{
                color: "#f6812a",
                fontWeight: "bold",
              }}
            >
              Saved Payees
            </Text>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View>
              <DashboardCustomButton color="#FAE5D3" icon="add" />
              <Text
                style={{
                  color: "black",
                  position: "relative",
                  bottom: 10,
                  left: 0,
                  right: 0,
                  textAlign: "center",
                  fontSize: 12,
                }}
              >
                Add New
              </Text>
            </View>
            <Text
              style={{
                color: "gray",
                marginTop: 20,
                paddingRight: 120,
                fontSize: 12,
              }}
            >
              Create your own favorite payee collection for faster fund
              transfers
            </Text>
          </View>
        </View>

        <View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              margin: 20,
              marginBottom: 0,
              padding: 10,
              paddingTop: 0,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
              }}
            >
              Favorite Billers
            </Text>
            <Text
              style={{
                color: "#f6812a",
                fontWeight: "bold",
              }}
            >
              Saved Billers
            </Text>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View>
              <DashboardCustomButton color="#F9E79F" icon="add" />
              <Text
                style={{
                  color: "black",
                  position: "relative",
                  bottom: 10,
                  left: 0,
                  right: 0,
                  textAlign: "center",
                  fontSize: 12,
                }}
              >
                Add New
              </Text>
            </View>
            <Text
              style={{
                color: "gray",
                marginTop: 20,
                paddingRight: 120,
                fontSize: 12,
              }}
            >
              Create your own favorite biller collection for faster payments
            </Text>
          </View>
        </View>

        <View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              margin: 20,
              marginBottom: 0,
              padding: 10,
              paddingTop: 0,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
              }}
            >
              Quick Actions
            </Text>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={styles.row}>
              <View style={styles.item}>
                <DashboardCustomButton color="white" icon="document-outline" />
                <Text style={styles.label}>Open Acc</Text>
              </View>
              <View style={styles.item}>
                <DashboardCustomButton color="white" icon="cash-outline" />
                <Text style={styles.label}>New Loan</Text>
              </View>
              <View style={styles.item}>
                <DashboardCustomButton
                  color="white"
                  icon="phone-portrait-outline"
                />
                <Text style={styles.label}>Mobile Cash</Text>
              </View>
              <View style={styles.item}>
                <DashboardCustomButton color="white" icon="documents-outline" />
                <Text style={styles.label}>Stop Cheque</Text>
              </View>
              <View style={styles.item}>
                <DashboardCustomButton color="white" icon="card-outline" />
                <Text style={styles.label}>Web Card</Text>
              </View>
            </View>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={styles.row}>
              <View style={styles.item}>
                <DashboardCustomButton color="white" icon="newspaper-outline" />
                <Text style={styles.label}>Slipless</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={{ marginBottom: 120 }}></View>
    </>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  logoText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  languageText: {
    color: "gray",
    fontSize: 18,
    fontWeight: "bold",
  },
  textContainer: {
    width: "80%",
    marginTop: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "gray",
    marginBottom: 20,
  },
  btnContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  footer: {
    position: "absolute",
    bottom: 20,
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
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },
  headerImg: {
    width: "100%",
    height: 250,
  },
  accDetailsCard: {
    backgroundColor: "white",
    borderRadius: 15,
    margin: 10,
    height: 230,
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
  accDetailsText: {
    marginLeft: 15,
    marginTop: 15,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginLeft: 20,
    marginRight: 20,
  },
  item: {
    alignItems: "center",
  },
  label: {
    color: "black",
    position: "relative",
    bottom: 10,
    left: 0,
    right: 0,
    textAlign: "center",
    fontSize: 12,
  },
});
