import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const UserProfile = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../Images/logo.jpg')} // Replace with the path to the user's profile image
        style={styles.profileImage}
      />
      <Text style={styles.userName}>Hello, UserName</Text>

      <View style={styles.menuItem}>
        <Text>My Listings</Text>
      </View>

      <View style={styles.menuItem}>
        <Text>About Us</Text>
      </View>

      <View style={styles.menuItem}>
        <Text>Contact Us</Text>
      </View>

      <View style={styles.menuItem}>
        <Text>Share with your friends</Text>
      </View>

      <TouchableOpacity style={styles.menuItem} onPress={() => {}}>
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => {}}>
        <Text style={styles.deleteAccountText}>Delete Account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  userName: {
    fontSize: 20,
    marginVertical: 10,
  },
  menuItem: {
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: 'grey',
    width: '100%',
  },
  logoutText: {
    color: 'red',
    // textAlign: 'center',
  },
  deleteAccountText: {
    color: 'red',
    // textAlign: 'center',
  },
});

export default UserProfile;
