import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text, ScrollView } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation';

const imagePath = require('../../assets/logo2.png');
const imagePathMessge = require('../../assets/message.png');
const imagePathBell = require('../../assets/bell.png');
const imagePathUser = require('../../assets/userMobile.png');
const imagePathDash = require('../../assets/dashHome.png');
const imagePathReport = require('../../assets/report.png');
const imagePathOrder = require('../../assets/order.png');
const imagePathDoctor = require('../../assets/doctor.png');
const imagePathSchedul = require('../../assets/shedul.png');
const imageNurse = require('../../assets/nurse.png');
const imageDoc = require('../../assets/doc.png');

type MyHealthScreenProps = {
  navigation: NavigationProp<RootStackParamList>;
};

const MyHealthScreen: React.FC<MyHealthScreenProps> = ({ navigation }) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.logoWrapper}>
          <Image source={imagePath} style={styles.logo} />
          <Text style={styles.logoText}>MediFlow</Text>
        </View>
        <View style={styles.iconGroup}>
          <View style={styles.iconWrapper}>
            <Image source={imagePathMessge} style={styles.icon} />
          </View>
          <View style={styles.iconWrapper}>
            <Image source={imagePathBell} style={styles.icon} />
          </View>
          <TouchableOpacity style={styles.iconBackground} onPress={() => navigation.navigate('Profile')}>
            <Image source={imagePathUser} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.rectangle1}>
          <Image source={imageDoc} style={styles.logo1} />
          <Text style={styles.divText}>Doctor</Text>
          <Text style={styles.divSubText}>Obtain Your Recommended Doctors</Text>
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => navigation.navigate('Doca')} // Navigate to Docs page
          >
            <Text style={styles.buttonText}>Click here</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rectangle2}>
          <Image source={imageNurse} style={styles.logo1} />
          <Text style={styles.divText}>Nurse</Text>
          <Text style={styles.divSubText}>Obtain Your Recommended Nurse</Text>
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => navigation.navigate('Nurse')} // Assuming you have a Nurse page
          >
            <Text style={styles.buttonText}>Click here</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Navigation Bar */}
      <View style={styles.navset}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Dash')}>
          <Image source={imagePathDash} style={styles.logo5} />
          <Text style={styles.nav1Text}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Report')}>
          <Image source={imagePathReport} style={styles.logo5} />
          <Text style={styles.nav1Text}>Report</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Order')}>
          <Image source={imagePathOrder} style={styles.logo5} />
          <Text style={styles.nav1Text}>Order</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Doctor')}>
          <Image source={imagePathDoctor} style={styles.logo5} />
          <Text style={styles.nav1Text}>MyHealth</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Schedule')}>
          <Image source={imagePathSchedul} style={styles.logo5} />
          <Text style={styles.nav1Text}>Schedule</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 70,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    zIndex: 1, // Ensure header is on top of other content
  },
  logoWrapper: {
    flexDirection: 'row', // Arrange logo and text in a row
    alignItems: 'center',
  },
  iconGroup: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flex: 1,
  },
  iconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ffffff', // White background for circular icons
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    elevation: 3,
  },
  iconBackground: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    elevation: 3, // Add shadow for elevation effect
  },
  icon: {
    width: 24,
    height: 24,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10, // Add space between logo and text
  },
  logoText: {
    fontSize: 20, // Adjust font size as needed
    fontWeight: 'bold',
    color: '#333333',
  },
  scrollContainer: {
    paddingTop: 80, // Adjust to leave space for the header
    paddingBottom: 100, // Adjust to leave space for the navbar
    alignItems: 'center',
  },
  rectangle1: {
    width: '80%',
    height: 220,
    backgroundColor: '#e3e8e5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: '#000',         // Shadow color for iOS
    shadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS
    shadowOpacity: 0.2,           // Shadow opacity for iOS
    shadowRadius: 5,              // Shadow radius for iOS
    elevation: 5,                 // Elevation for Android
    marginVertical: 20,
    padding: 10,                  // Add padding for inner content
  },
  rectangle2: {
    width: '80%',
    height: 220,
    backgroundColor: '#e3e8e5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    marginVertical: 20,
    padding: 10,
  },
  logo1: {
    width: 70,
    height: 70,
    marginBottom: 10,
  },
  divText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  divSubText: {
    fontSize: 14,
    marginTop: 5,
    textAlign: 'center',
  },
  button: {
    marginTop: 10,
    backgroundColor: 'black',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color:'white',
    borderRadius: 20,
  },
  navset: {
    position: 'absolute',
    width: '100%',
    height: 65,
    backgroundColor: '#e3e8e5',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    zIndex: 1, // Ensure navbar is on top of other content
  },
  navItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  nav1Text: {
    marginTop: 5,
  },
  logo5: {
    width: 25,
    height: 25,
  },
});

export default MyHealthScreen;
