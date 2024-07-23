import React, { useRef } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text, Linking, Animated, ImageBackground } from 'react-native';

// Import your images
const imagePath = require('../../assets/logo2.png');
const LogoImage = require('../../assets/mediFlowLogo.jpg');
const introBack = require('../../assets/introBack.jpg');

interface LoginProps {
  navigation: any;
}

const IntroPage: React.FC<LoginProps> = ({ navigation }) => {
  // Initialize an animated value (opacity)
  const fadeAnim = useRef(new Animated.Value(0)).current;

  // Function to animate the image when component mounts
  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000, // Animation duration in milliseconds
      useNativeDriver: true, // Use native driver for better performance
    }).start();
  };

  return (
    <ImageBackground source={introBack} style={styles.backgroundImage}>
      {/* Low-light effect */}
      <View style={styles.overlay} />

      <View style={styles.container}>
        {/* Animated View for fading effect */}
        <Animated.View style={[styles.imageContainer, { opacity: fadeAnim }]}>
          {/* Image with fade-in effect */}
          {/* <Image source={imagePath} style={styles.image} onLoad={fadeIn} /> */}
        </Animated.View>

        {/* Buttons for navigation or actions */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.secondaryButton]}
            onPress={() => Linking.openURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')}
          >
            <Text style={styles.buttonText1}>Watch Video</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Low-light effect
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 400,
    height: 400,
    marginBottom: 20,
  },
  image: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
  buttonContainer: {
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#007bff',
    borderRadius: 50,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginBottom: 15,
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'center',
  },
  secondaryButton: {
    backgroundColor: 'white',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  buttonText1: {
    color: 'black',
  },
});

export default IntroPage;
