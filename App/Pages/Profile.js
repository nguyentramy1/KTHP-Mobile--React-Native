import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const [darkMode, setDarkMode] = useState(false);
  const navigation = useNavigation();

  const toggleDarkMode = () => {
    setDarkMode(previousState => !previousState);
  };

  const navigateToSetting = () => {
    navigation.navigate('Setting');
  };

  const handleLogout = () => {
    // Thêm logic để xử lý đăng xuất ở đây nếu cần
    navigation.navigate('Login'); // Chuyển hướng về màn hình Login
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.topBackground} />        
      </View>
      <Image source={require('../Assets/Images/profile/avata.png')} style={styles.avatar} />
      <View style={styles.scrollGradient}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.profileHeader}>
            <Text style={styles.name}>User name</Text>
            <Text style={styles.email}>email@gmail.com</Text>
          </View>
          <View style={styles.menuContainer}>
            <MenuItem icon={require('../Assets/Images/profile/persondetail.png')} label="Personal Details" />
            <MenuItem icon={require('../Assets/Images/profile/address.png')} label="Address" />
            <MenuItem icon={require('../Assets/Images/profile/history.png')} label="History" />
            <MenuItem icon={require('../Assets/Images/profile/about.png')} label="About" />
            <MenuItem 
              icon={require('../Assets/Images/profile/setting.png')} 
              label="Setting & Privacy" 
              onPress={navigateToSetting} 
            />
          </View>
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Image source={require('../Assets/Images/profile/logout.png')} style={styles.logoutIcon} />
            <Text style={styles.logoutText}>Log Out</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};


const MenuItem = ({ icon, label, onPress }) => (
  <TouchableOpacity style={styles.menuItem} onPress={onPress}>
    <Image source={icon} style={styles.menuIcon} />
    <Text style={styles.menuLabel}>{label}</Text>
    <Image source={require('../Assets/Images/profile/arrow.png')} style={styles.arrowIcon} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  header: {
    height: 123,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  topBackground: {
    position: 'absolute',
    width: '100%',
    height: 123,
    borderRadius: 33,
    overflow: 'hidden',
    backgroundColor: '#E1F1FD',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 40,
    alignSelf: 'center',
    marginTop: -65, // Adjust the margin to overlap the ScrollView
    zIndex: 1,
  },
  scrollGradient: {
    flex: 1,
borderTopLeftRadius: 33,
    borderTopRightRadius: 33,
    marginTop: -50,
    paddingTop: 75,
    backgroundColor: '#E1F1FD',
    height: 375,
    marginLeft: 10,
    marginRight: 10,
  },
  scrollContainer: {
    paddingVertical: 20,
  },
  profileHeader: {
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    color: '#888',
  },
  menuContainer: {
    marginTop: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  menuIcon: {
    width: 24,
    height: 24,
    marginRight: 20,
  },
  menuLabel: {
    fontSize: 16,
    flex: 1, // To ensure the label takes up available space
  },
  arrowIcon: {
    width: 16,
    height: 16,
  },
  logoutButton: {
    flexDirection: 'row',
    backgroundColor: '#1D92FF',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 7,
    height: 55,
    width: 341,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  logoutIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ProfileScreen;