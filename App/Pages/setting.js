import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const [darkMode, setDarkMode] = useState(false);
  const navigation = useNavigation();

  const toggleDarkMode = () => {
    setDarkMode(previousState => !previousState);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.topBackground} />
        <View style={styles.headerContent}>
          <Image source={require('../Assets/Images/profile/avata.png')} style={styles.avatar} />
          <View style={styles.profileDetails}>
            <Text style={styles.name}>User name</Text>
            <Text style={styles.email}>email@gmail.com</Text>
          </View>
        </View>
      </View>
      
      <View style={styles.scrollGradient}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.menuContainer}>
            {/* Setting Section */}
            <Text style={styles.sectionTitle}>Setting</Text>
            <View style={styles.gridContainer }>
              <MenuItem icon={require('../Assets/Images/setting/home.png')} label="Home" />
              <MenuItem icon={require('../Assets/Images/setting/lock.png')} label="Security" />
              <MenuItem icon={require('../Assets/Images/setting/book.png')} label="My Course" />
              <MenuItem icon={require('../Assets/Images/setting/help.png')} label="Help Center" />
            </View>
            <View style={styles.gridContainer}>
              <MenuItem icon={require('../Assets/Images/setting/darkmood.png')} label="Dark Mood" onPress={toggleDarkMode} />
              <MenuItem icon={require('../Assets/Images/setting/bell.png')} label="Notification" />
              <MenuItem icon={require('../Assets/Images/setting/manual.png')} label="User manual" />
              <MenuItem icon={require('../Assets/Images/setting/globe.png')} label="Language" />
            </View>

            {/* Privacy Section */}
            <Text style={styles.sectionTitle}>Privacy</Text>
            <View style={styles.listContainer}>
              <MenuItem label="Information Security" fullWidth />
              <MenuItem label="User Rights" fullWidth />
              <MenuItem label="Cookies and Tracking Technologies" fullWidth />
              <MenuItem label="Changes to the Policy" fullWidth />
              <MenuItem label="Contact Information" fullWidth />
              <MenuItem label="Information Sharing" fullWidth />
              <MenuItem label="Data Retention and Deletion" fullWidth />
            </View>

          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const MenuItem = ({ icon, label, onPress, fullWidth }) => (
  <TouchableOpacity
    style={[styles.menuItem, fullWidth && styles.menuItemFullWidth]} 
    onPress={onPress}
  >
    {icon && <Image source={icon} style={styles.menuIcon} />}
    <Text style={styles.menuLabel}>{label}</Text>
  </TouchableOpacity>
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F8FC',
  },
  header: {
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    overflow: 'hidden',
  },
  topBackground: {
    position: 'absolute',
    width: 375,
    height: 123,
    borderRadius: 33,
    overflow: 'hidden',
    backgroundColor: '#E1F1FD',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%', 
  },
  avatar: {
    width: 60,
    height: 48.98,
    marginRight: 15, 
  },
  profileDetails: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  email: {
    fontSize: 14,
    color: '#fff',
  },
  scrollGradient: {
    flex: 1,
    borderTopLeftRadius: 33,
    borderTopRightRadius: 33,
    backgroundColor: '#F6F8FC',
    marginLeft: 10,
    marginRight: 10,
    marginTop: -30,
    paddingTop: 60,
  },
  scrollContainer: {
    paddingVertical: 20,
  },
  menuContainer: {
    marginTop: -30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    marginLeft: 15,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  listContainer: {
    marginTop: 10,
  },
  menuItem: {
    backgroundColor: '#E1F1FD',
    borderRadius: 16,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: 86,
    width: '48.7%', // Đảm bảo 2 mục sẽ vừa vặn trong một hàng
    marginLeft: '0%',  // Khoảng cách giữa các item
    marginRight: '0%', // Khoảng cách giữa các item
  },
  menuItemFullWidth: {
    width: '100%',
    height: 53, // Sử dụng cho các mục trong listContainer
    borderRadius: 6,
 
    
    paddingLeft: 10, // Thêm khoảng cách từ lề trái để chữ không sát cạnh
  },
  
  menuIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  menuLabel: {
    fontSize: 14,
    color: '#333',
  },
});

export default ProfileScreen;
