import { Link } from 'expo-router';
import { View, StyleSheet, ImageBackground, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Link href="/login">
        <ImageBackground
          source={require('@/assets/images/logo.png')} // Adjust path if necessary
          style={styles.logo}
        >
         
        </ImageBackground>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayText: {
    color: 'white',
    fontSize: 18,
  },
});
