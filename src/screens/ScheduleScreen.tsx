import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text, TextInput, Button, ScrollView } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation';

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

type MyHealthScreenProps = {
  navigation: NavigationProp<RootStackParamList>;
};

const MyHealthScreen: React.FC<MyHealthScreenProps> = ({ navigation }) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  
  const [clinicSchedule, setClinicSchedule] = useState({
    date: '',
    time: '',
    day: '',
    month: '',
  });

  const handleInputChange = (name: string, value: string) => {
    setClinicSchedule({
      ...clinicSchedule,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log(clinicSchedule);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={imagePath} style={styles.logo} />
        
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

      <ScrollView contentContainerStyle={styles.scrollContainer}>
       
        <View style={styles.tableContainer}>
          <View style={styles.tableHeader}>
            <Text style={styles.tableHeaderText}>Day</Text>
            <Text style={styles.tableHeaderText}>Morning(10 am)</Text>
            <Text style={styles.tableHeaderText}>Afternoon (03 pm)</Text>
            <Text style={styles.tableHeaderText}>Evening (07 pm)</Text>
          </View>
          {/* Example row */}
          <View style={styles.tableRow}>
            <Text style={styles.tableText}>Monday</Text>
            <Text style={styles.tableText}>10:00</Text>
            <Text style={styles.tableText}>Data 1</Text>
            <Text style={styles.tableText}>Data 2</Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={styles.tableText}>Tuesday</Text>
            <Text style={styles.tableText}>10:00</Text>
            <Text style={styles.tableText}>Data 1</Text>
            <Text style={styles.tableText}>Data 2</Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={styles.tableText}>Wendsday</Text>
            <Text style={styles.tableText}>10:00</Text>
            <Text style={styles.tableText}>Data 1</Text>
            <Text style={styles.tableText}>Data 2</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableText}>Thursday</Text>
            <Text style={styles.tableText}>10:00</Text>
            <Text style={styles.tableText}>Data 1</Text>
            <Text style={styles.tableText}>Data 2</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableText}>Friday</Text>
            <Text style={styles.tableText}>10:00</Text>
            <Text style={styles.tableText}>Data 1</Text>
            <Text style={styles.tableText}>Data 2</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableText}>Saturday</Text>
            <Text style={styles.tableText}>10:00</Text>
            <Text style={styles.tableText}>Data 1</Text>
            <Text style={styles.tableText}>Data 2</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableText}>Sunday</Text>
            <Text style={styles.tableText}>10:00</Text>
            <Text style={styles.tableText}>Data 1</Text>
            <Text style={styles.tableText}>Data 2</Text>
          </View>
          {/* Add more rows as needed */}
        </View>
      </ScrollView>

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
  logo: {
    width: 40,
    height: 40,
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
  scrollContainer: {
    paddingTop: 80, // Space for header
    paddingBottom: 120, // Space for footer
    alignItems: 'center',
  },
  formContainer: {
    width: '90%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  tableContainer: {
    width: '90%',
    marginTop: 20,
  },
  tableHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
    marginBottom: 10,
    backgroundColor: 'green'
  },
  tableHeaderText: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
  },
  tableText: {
    flex: 1,
    textAlign: 'center',
  },
  logo1: {
    position: 'absolute',
    width: 40,
    height: 40,
  },
  logo5: {
    width: 25,
    height: 25,
  },
  rectangle1: {
    position: 'absolute',
    width: 320,
    height: 80,
    backgroundColor: '#e3e8e5',
    top: 100,
  },
  rectangle2: {
    position: 'absolute',
    width: 320,
    height: 80,
    backgroundColor: '#e3e8e5',
    top: 190,
  },
  rectangle3: {
    position: 'absolute',
    width: 320,
    height: 80,
    backgroundColor: '#e3e8e5',
    top: 280,
  },
  rectangle4: {
    position: 'absolute',
    width: 320,
    height: 80,
    backgroundColor: '#e3e8e5',
    top: 370,
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
});

export default MyHealthScreen;