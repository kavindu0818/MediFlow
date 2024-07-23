import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text, FlatList } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation';

// Import images
const imagePath = require('../../assets/logo2.png');
const imagePathMessge = require('../../assets/message.png');
const imagePathBell = require('../../assets/bell.png');
const imagePathUser = require('../../assets/userMobile.png');
const imagePathBlood = require('../../assets/blood.png');
const imagePathHeight = require('../../assets/height.png');
const imagePathHart = require('../../assets/hart.png');
const imagePathWeight = require('../../assets/weight.png');

const imagePathDash = require('../../assets/dashHome.png');
const imagePathReport = require('../../assets/report.png');
const imagePathOrder = require('../../assets/order.png');
const imagePathDoctor = require('../../assets/doctor.png');
const imagePathSchedul = require('../../assets/shedul.png');
const imagePathNurse = require('../../assets/nurse.png'); // Ensure you have this image

// Example nurse data
const nurses = [
  {
    id: '1',
    name: 'Nurse Alice',
    age: 30,
    image: require('../../assets/nurse.png'),
    rating: 4.5,
    contact: '123-456-7890',
    email: 'alice@example.com',
    description: 'Experienced nurse specializing in cardiology.',
  },
  {
    id: '2',
    name: 'Nurse Bob',
    age: 45,
    image: require('../../assets/nurse.png'),
    rating: 4.7,
    contact: '123-456-7891',
    email: 'bob@example.com',
    description: 'Expert in pediatric care with 20 years of experience.',
  },
  {
    id: '3',
    name: 'Nurse Carol',
    age: 32,
    image: require('../../assets/nurse.png'),
    rating: 4.8,
    contact: '123-456-7892',
    email: 'carol@example.com',
    description: 'Skilled in emergency care with excellent patient feedback.',
  },
  {
    id: '4',
    name: 'Nurse Dave',
    age: 40,
    image: require('../../assets/nurse.png'),
    rating: 4.6,
    contact: '123-456-7893',
    email: 'dave@example.com',
    description: 'Dedicated nurse with a focus on geriatric care.',
  },
];

type MyHealthScreenProps = {
  navigation: NavigationProp<RootStackParamList>;
};

const MyHealthScreen: React.FC<MyHealthScreenProps> = ({ navigation }) => {
  const renderNurse = ({ item }: { item: typeof nurses[0] }) => (
    <View style={styles.nurseCard}>
      <Image source={item.image} style={styles.nurseImage} />
      <View style={styles.nurseInfo}>
        <Text style={styles.nurseName}>{item.name}</Text>
        <Text>Age: {item.age}</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>Rating: {item.rating.toFixed(1)}</Text>
          <Text style={styles.ratingStars}>{'★'.repeat(Math.floor(item.rating))} {'☆'.repeat(5 - Math.floor(item.rating))}</Text>
        </View>
        <Text>Contact: {item.contact}</Text>
        <Text>Email: {item.email}</Text>
        <Text>Description: {item.description}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoWrapper}>
          <Image source={imagePath} style={styles.logo} />
          <Text style={styles.logoText}>MediFlow</Text>
        </View>
        <View style={styles.iconContainer}>
          <View style={styles.iconWrapper}>
            <Image source={imagePathMessge} style={styles.icon} />
          </View>
          <View style={styles.iconWrapper}>
            <Image source={imagePathBell} style={styles.icon} />
          </View>
          <TouchableOpacity style={styles.iconWrapper} onPress={() => navigation.navigate('Profile')}>
            <Image source={imagePathUser} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.nurseListContainer}>
        <FlatList
          data={nurses}
          renderItem={renderNurse}
          keyExtractor={(item) => item.id}
          style={styles.nurseList}
        />
      </View>

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
    justifyContent: 'center',
    alignItems: 'center',
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
  logo5: {
    width: 25,
    height: 25,
  },
  logoText: {
    fontSize: 20, // Adjust font size as needed
    fontWeight: 'bold',
    color: '#333333',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
   
    elevation: 3,
  },
  icon: {
    width: 24,
    height: 24,
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
  },
  navItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  nav1Text: {
    marginTop: 5,
  },
  nurseListContainer: {
    flex: 1,
    marginTop: 80, // Adjust based on your layout
    width: '100%',
    paddingHorizontal: 10,
  },
  nurseList: {
    flex: 1,
  },
  nurseCard: {
    flexDirection: 'row',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
  },
  nurseImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  nurseInfo: {
    flex: 1,
  },
  nurseName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  ratingText: {
    fontSize: 16,
    marginRight: 10,
  },
  ratingStars: {
    fontSize: 16,
    color: '#FFD700', // Gold color for stars
  },
});

export default MyHealthScreen;
