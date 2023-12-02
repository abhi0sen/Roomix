import React from 'react';
import { View, Text, Image, StyleSheet, Pressable, Linking, Share, TouchableOpacity } from 'react-native';

const UserProfile = ({navigation}) => {
  const Subject = "Roomix Support"


  const handleShare = async () => {
    try {
      const result = await Share.share({
        message: 'Check out this awesome app!',
        // You can customize the message to be shared here
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // Shared successfully
          console.log('Shared with:', result.activityType);
        } else {
          // Shared
          console.log('Shared');
        }
      } else if (result.action === Share.dismissedAction) {
        // Dismissed
        console.log('Share dismissed');
      }
    } catch (error) {
      console.error('Error sharing:', error.message);
    }
  };


  return (
    <View style={styles.container}>
      <Image
        source={require('../../Images/logo.jpg')} // Replace with the path to the user's profile image
        style={styles.profileImage}
      />
      <Text style={styles.userName}>Hello, Roomix</Text>

      <Pressable onPress={() => {
        navigation.navigate("MyListing");
      }} style={styles.menuItem}>
        <Text>My Listings</Text>
      </Pressable>      

      <Pressable onPress={() => Linking.openURL(`mailto:abhisar.sen@avantika.edu.in?subject=${Subject}`) } style={styles.menuItem}>
        <Text>Contact Us</Text>
      </Pressable>

      <TouchableOpacity style={styles.menuItem} onPress={handleShare}>
        <Text>Share with your friends</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => {
        alert("Successfully Logged Out")
        navigation.navigate('Login')}}>
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => {
        alert("Account Deleted")
        navigation.navigate('Login')}}>
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
