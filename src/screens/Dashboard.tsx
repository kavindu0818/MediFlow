import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text, ScrollView, TextInput } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation';

// Importing images
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
const calanderImg = require('../../assets/Calander.png');
const map = require('../../assets/map.jpg');
const hospital1 = require('../../assets/hospital1.jpg');
const hospital2 = require('../../assets/hospital2.jpg');
const hospital3 = require('../../assets/hospital3.jpg');
const hospital4 = require('../../assets/hospital4.jpg');

type MyHealthScreenProps = {
  navigation: NavigationProp<RootStackParamList>;
};

const MyHealthScreen: React.FC<MyHealthScreenProps> = ({ navigation }) => {
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    console.log('Task added:', task);
    setTask(''); // Clear input after adding
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image source={imagePath} style={styles.logo} />
          <Text style={styles.logoText}>MediFlow</Text>
        </View>
        <View style={styles.iconContainer}>
          <View style={styles.iconBackground}>
            <Image source={imagePathMessge} style={styles.icon} />
          </View>
          <View style={styles.iconBackground}>
            <Image source={imagePathBell} style={styles.icon} />
          </View>
          <TouchableOpacity style={styles.iconBackground} onPress={() => navigation.navigate('Profile')}>
            <Image source={imagePathUser} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.infoContainer}>
          <View style={styles.infoBox}>
            <Image source={imagePathBlood} style={styles.iconLarge} />
            <Text style={styles.infoText}>Blood Pressure</Text>
          </View>
          <View style={styles.infoBox}>
            <Image source={imagePathHeight} style={styles.iconLarge} />
            <Text style={styles.infoText}>Height</Text>
          </View>
          <View style={styles.infoBox}>
            <Image source={imagePathHart} style={styles.iconLarge} />
            <Text style={styles.infoText}>Heart Rate</Text>
          </View>
          <View style={styles.infoBox}>
            <Image source={imagePathWeight} style={styles.iconLarge} />
            <Text style={styles.infoText}>Weight</Text>
          </View>
        </View>

        <View style={styles.greeting}>
          <Text style={styles.greetingText}>Hi, Kavindu{'\n'}Check Your Health</Text>
        </View>

        <View style={styles.calendar}>
          <View style={styles.calendarHeader}>
            <Text style={styles.calendarTitle}>Calendar</Text>
            <Text style={styles.calendarShowAll}>Show all</Text>
          </View>
          <Image source={calanderImg} style={styles.calendarImg} />
        </View>

        <View style={styles.recentDoctorContainer}>
          <Text style={styles.recentDoctorTitle}>Recent Doctor</Text>
          <View style={styles.recentDoctorImageContainer}>
            <Image source={imagePathUser} style={styles.recentDoctorImage} />
          </View>
        </View>

        <View style={styles.hospitalContainer}>
          <Text style={styles.hospitalTitle}>Hospitals</Text>
          <View style={styles.hospitalImages}>
            <Image source={hospital1} style={styles.hospitalImage} />
            <Image source={hospital2} style={styles.hospitalImage} />
            <Image source={hospital3} style={styles.hospitalImage} />
            <Image source={hospital4} style={styles.hospitalImage} />
          </View>
          <View style={styles.radioButtonsContainer}>
            <TouchableOpacity style={styles.radioButton} />
            <TouchableOpacity style={styles.radioButton} />
            <TouchableOpacity style={styles.radioButton} />
            <TouchableOpacity style={styles.radioButton} />
          </View>
        </View>

        <View style={styles.mapContainer}>
          <Image source={map} style={styles.mapImg} />
        </View>

        <View style={styles.todoContainer}>
          <Text style={styles.todoTitle}>To Do List</Text>
          <Text style={styles.showAll}>Show all</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter task"
            value={task}
            onChangeText={setTask}
          />
          <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
          <View style={styles.radioButtonsContainer}>
            <TouchableOpacity style={styles.radioButton} />
            <Text style={styles.radioButtonText}>Short task goes there</Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.navset}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Dash')}>
          <Image source={imagePathDash} style={styles.navIcon} />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Report')}>
          <Image source={imagePathReport} style={styles.navIcon} />
          <Text style={styles.navText}>Report</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Order')}>
          <Image source={imagePathOrder} style={styles.navIcon} />
          <Text style={styles.navText}>Order</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Doctor')}>
          <Image source={imagePathDoctor} style={styles.navIcon} />
          <Text style={styles.navText}>Doctor</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Schedule')}>
          <Image source={imagePathSchedul} style={styles.navIcon} />
          <Text style={styles.navText}>Schedule</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f9',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 1,
    height: 70
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
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
  scrollContainer: {
    paddingTop: 80,
    paddingBottom: 100,
    alignItems: 'center',
  },
  infoContainer: {
    width: '90%',
    marginTop: 20,
  },
  infoBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  iconLarge: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  infoText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  greeting: {
    marginVertical: 20,
    alignItems: 'center',
  },
  greetingText: {
    fontSize: 24,
    textAlign: 'center',
    color: '#333333',
  },
  calendar: {
    width: '90%',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    padding: 15,
    marginTop: 20,
  },
  calendarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  calendarTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
  calendarShowAll: {
    fontSize: 14,
    color: '#0066cc',
  },
  calendarImg: {
    width: '100%',
    height: 170,
    marginTop: 10,
    borderRadius: 10,
  },
  recentDoctorContainer: {
    marginTop: 20,
    width: '90%',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  recentDoctorTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 10,
  },
  recentDoctorImageContainer: {
    width: 100,
    height: 100,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#f4f4f9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  recentDoctorImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  hospitalContainer: {
    width: '90%',
    marginTop: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  hospitalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 10,
  },
  hospitalImages: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    flexWrap: 'wrap',
  },
  hospitalImage: {
    width: '23%',
    height: 100,
    margin: '1%',
    borderRadius: 10,
  },
  radioButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginTop: 20,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderColor: '#333333',
    borderWidth: 1,
  },
  radioButtonText: {
    fontSize: 16,
    color: '#333333',
  },
  todoContainer: {
    width: '90%',
    marginTop: 20,
    padding: 15,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  todoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 10,
  },
  showAll: {
    fontSize: 14,
    color: '#0066cc',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#0066cc',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  addButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  navset: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#e3e8e5',
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    zIndex: 1,
  },
  navItem: {
    alignItems: 'center',
  },
  navIcon: {
    width: 25,
    height: 25,
  },
  navText: {
    marginTop: 5,
    color: '#333333',
  },
  mapContainer: {
    width: '90%',
    height: 200,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    marginTop: 20,
    overflow: 'hidden',
  },
  mapImg: {
    width: '100%',
    height: '100%',
  },
});

export default MyHealthScreen;
