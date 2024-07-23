import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

const imagePath = require('../../assets/mediFlowLogo.jpg');

type LoginScreenProps = {
  navigation: NavigationProp<any>;
};

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginPress = () => {
    console.log('Login button pressed');
    navigation.navigate('Dash');
  };

  const goToSignUp = () => {
    navigation.navigate('Registration');
  };

  const goToForgotPassword = () => {
    // Navigation logic for Forgot Password
  };

  return (
    <View style={styles.container}>
      <Image source={imagePath} style={styles.logo} />
      <Text style={styles.title}>Login to Your Account</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="gray"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="gray"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={goToForgotPassword}>
        <Text style={styles.linkTextV}>Forgot Password?</Text>
      </TouchableOpacity>
      <View style={styles.socialMediaContainer}>
        <Text style={styles.title}>
          <Text style={styles.facebook}>Facebook </Text>
          <Text style={styles.google}>Google </Text>
          <Text style={styles.twitter}>Twitter</Text>
        </Text>
      </View>
      <Text style={styles.linkTextM}>
        Don't have an account?{' '}
        <Text style={styles.linkText} onPress={goToSignUp}>Register here</Text>
      </Text>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 20,
    },
    logo: {
      width: 126,
      height: 81.3,
      marginBottom: 20,
    },
    title: {
      fontSize: 20,
      color: 'black',
      marginBottom: 20,
      textAlign: 'center',
    },
    input: {
      borderColor: 'gray',
      borderWidth: 1,
      height: 40,
      marginBottom: 20,
      paddingHorizontal: 10,
      width: '100%',
      borderRadius: 8,
    },
    button: {
      backgroundColor: '#007bff',
      borderRadius: 20,
      paddingHorizontal: 20,
      paddingVertical: 10,
      width: '100%',
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
    },
    linkText: {
      color: '#007bff',
      textDecorationLine: 'underline',
    },
    linkTextM: {
      fontSize: 15,
      marginTop: 30,
      textAlign: 'center',
    },
    linkTextV: {
      color: '#007bff',
      textDecorationLine: 'underline',
      marginTop: 15,
      marginBottom: 20,
    },
    socialMediaContainer: {
      marginTop: 20,
      marginBottom: 30,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    facebook: {
      fontSize: 15,
      color: '#1877F2', // Facebook blue
      marginHorizontal: 10, // Space of 10 pixels between elements
    },
    google: {
      fontSize: 15,
      color: '#DB4437', // Google red
      marginHorizontal: 10, // Space of 10 pixels between elements
    },
    twitter: {
      fontSize: 15,
      color: '#1DA1F2', // Twitter light blue
      marginHorizontal: 10, // Space of 10 pixels between elements
    },
  });
  