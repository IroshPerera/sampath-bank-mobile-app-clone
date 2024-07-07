import CustomButton from "@/assets/components/button";
import { Link } from "@react-navigation/native";
import { Alert, Image, StyleSheet, Text, TextInput, View } from "react-native";

const Register = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.languageText}>English</Text>
      <Image source={require("@/assets/images/logo.png")} style={styles.logo} />
      <Text style={styles.logoText}>Reset Password</Text>
      <Text
        style={{
          color: "gray",
          marginBottom: 20,
          marginRight: 10,
          marginLeft: 10,
          textAlign: "center",
        }}
      >
        Please follow the next steps reset your Sampath Vishwa account password
      </Text>
      <View style={styles.textContainer}>
        <TextInput style={styles.input} placeholder="Enter Username" />
      </View>

      <View style={styles.btnContainer}>
        <CustomButton
          title="Next"
          onPress={() => {
            Alert.alert("Next", "Next button pressed");
          }}
          width={170}
          height={45}
          color="#f6812a"
        />
        <Link to="/register" style={{ marginTop: 80 }}>
          <Text style={{ color: "black", fontSize: 14 }}>
            Need Support?{"       "}
            <Text style={{ color: "#f6812a", fontSize: 16, fontWeight: "600" }}>
              Contact Us
            </Text>
          </Text>
        </Link>
      </View>

      <View style={styles.footer}>
        <Text style={{ color: "gray" }}>Version 4.0.2</Text>
        <Text style={{ color: "gray" }}>Powered by Sampath Bank PLC</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  logoText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    marginBottom: 20,
  },
  input: {
    height: 50,
    color: "black",
    marginTop: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "#E5E8E8",
  },
  textContainer: {
    width: "85%",
    marginBottom: 20,
  },
  btnContainer: {
    width: "90%",
    alignItems: "center",
    marginBottom: 80,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    alignItems: "center",
    width: "100%",
    paddingVertical: 20,
  },
  languageText: {
    position: "absolute",
    top: 50,
    right: 50,
    color: "black",
    fontSize: 15,
  },
});

export default Register;
