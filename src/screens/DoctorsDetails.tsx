import React from 'react';
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
const imageDoc1 = require('../../assets/doc.png');
const imageDoc2 = require('../../assets/doc.png');
const imageDoc3 = require('../../assets/doc.png');
const imageDoc4 = require('../../assets/doc.png');

type MyHealthScreenProps = {
  navigation: NavigationProp<RootStackParamList>;
};

const doctors = [
  {
    id: '1',
    name: 'Dr. Kavindu Madhuranga',
    position: 'Cardiologist',
    rating: '⭐⭐⭐⭐',
    description: 'Dr. Kavindu Madhuranga is a renowned cardiologist with over 15 years of experience. He specializes in heart diseases and offers comprehensive care.',
    contactNumber: '(123) 456-7890',
    email: 'dr.kavindu@example.com',
    image: imageDoc1,
  },
  {
    id: '2',
    name: 'Dr. Randika Smith',
    position: 'Neurologist',
    rating: '⭐⭐⭐⭐⭐',
    description: 'Dr. Randika Smith is an expert in neurology with a focus on neurodegenerative disorders. She has been practicing for over 20 years.',
    contactNumber: '(987) 654-3210',
    email: 'dr.randika@example.com',
    image: imageDoc2,
  },
  {
    id: '3',
    name: 'Dr. Omesh Johnson',
    position: 'Dermatologist',
    rating: '⭐⭐⭐⭐',
    description: 'Dr. Omesh Johnson provides exceptional care in dermatology. He has experience in treating a wide range of skin conditions.',
    contactNumber: '(456) 789-0123',
    email: 'dr.omesh@example.com',
    image: imageDoc3,
  },
  {
    id: '4',
    name: 'Dr. Charutha Brown',
    position: 'Pediatrician',
    rating: '⭐⭐⭐⭐⭐',
    description: 'Dr. Charutha Brown is a dedicated pediatrician with expertise in child healthcare. He has a gentle approach and extensive experience.',
    contactNumber: '(321) 654-9870',
    email: 'dr.charutha@example.com',
    image: imageDoc4,
  },
];

const MyHealthScreen: React.FC<MyHealthScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.logoWrapper}>
          <Image source={imagePath} style={styles.logo} />
          <Text style={styles.logoText}>MediFlow</Text>
        </View>

        <View style={styles.circleGroup}>
          <View style={styles.circle}>
            <Image source={imagePathMessge} style={styles.circleImage} />
          </View>
          <View style={styles.circle}>
            <Image source={imagePathBell} style={styles.circleImage} />
          </View>
          <TouchableOpacity style={styles.circle} onPress={() => navigation.navigate('Profile')}>
            <Image source={imagePathUser} style={styles.circleImage} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {doctors.map((doctor) => (
          <View key={doctor.id} style={styles.doctorProfileContainer}>
            <Image source={doctor.image} style={styles.doctorImage} />
            <Text style={styles.doctorName}>{doctor.name}</Text>
            <Text style={styles.doctorPosition}>{doctor.position}</Text>
            <Text style={styles.doctorRating}>Rating: {doctor.rating}</Text>
            <Text style={styles.doctorDescription}>{doctor.description}</Text>
            <View style={styles.contactInfo}>
              <Text style={styles.contactText}>Contact Number: {doctor.contactNumber}</Text>
              <Text style={styles.contactText}>Email: {doctor.email}</Text>
            </View>
          </View>
        ))}
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
          <Text style={styles.nav1Text}>Doctor</Text>
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
    flexDirection: 'row',
    alignItems: 'center',
   
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 5,
  },
  logoText: {
    fontSize: 20, // Adjust font size as needed
    fontWeight: 'bold',
    color: '#333333',
  },
  circleGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 25,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginHorizontal: 5,
    elevation: 3,
  },
  circleImage: {
    width: 24,
    height: 24,
    borderRadius: 20,
  },
  scrollContainer: {
    paddingTop: 80, // Adjust to leave space for the header
    paddingBottom: 100, // Adjust to leave space for the navbar
    alignItems: 'center',
  },
  doctorProfileContainer: {
    width: '80%',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    padding: 20,
    marginVertical: 20,
    alignItems: 'center',
  },
  doctorImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  doctorName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333333',
  },
  doctorPosition: {
    fontSize: 18,
    color: '#555555',
  },
  doctorRating: {
    fontSize: 16,
    color: '#f1c40f',
    marginVertical: 5,
  },
  doctorDescription: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
    color: '#333333',
  },
  contactInfo: {
    marginTop: 10,
  },
  contactText: {
    fontSize: 14,
    color: '#555555',
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