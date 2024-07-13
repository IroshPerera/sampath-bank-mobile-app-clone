import CustomButton from "@/assets/components/button";
import { Link } from "@react-navigation/native";
import { router } from "expo-router";
import {
  Alert,
  Image,
  ProgressBarAndroid,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.languageText}>English</Text>
      <Image source={require("@/assets/images/logo.png")} style={styles.logo} />
      <Text style={styles.logoText}>Welcome to Sampath Vishwa</Text>
      <View style={styles.textContainer}>
        <TextInput style={styles.input} placeholder="Username" />
        <TextInput style={styles.input} placeholder="Password" />
      </View>

      <View style={styles.btnContainer}>
       
          <CustomButton
            title="Log in"
            onPress={() => {router.push("(tab)")}}
            width={170}
            height={45}
            color="#f6812a"
          />
      
        <Link to="/forgotPassword" style={{ marginTop: 20 }}>
          <Text style={{ color: "gray" }}>Forgot Password?</Text>
        </Link>
        <Link to="/register" style={{ marginTop: 20 }}>
          <Text style={{ color: "black", fontSize: 18 }}>Create Account</Text>
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

export default Login;
