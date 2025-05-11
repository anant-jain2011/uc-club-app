import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; // Expo icon library
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Navbar = () => {
  const [active, setActive] = useState(null);
  const navigation = useNavigation();
  const insets = useSafeAreaInsets(); // To handle safe areas (status bar & bottom nav)

  const navigationItems = [
    { name: 'Jackets', route: 'Screens/Jackets' },
    { name: 'Shawls', route: 'Screens/Shawls' },
    { name: 'Lohi', route: 'Screens/Lohi' },
    { name: 'Sweaters', route: 'Screens/Sweaters' },
    { name: 'Pullover', route: 'Screens/Pullover' },
    { name: 'Hoodies', route: 'Screens/Hoodies' },
    { name: 'Caps', route: 'Screens/Caps' },
    { name: 'Blankets', route: 'Screens/Blankets' },
  ];

  const handleNavigate = (route) => {
    setActive(route);
    navigation.navigate(route);
  };

  const handleLogout = () => {
    // Clear token and navigate to the home screen
    // localStorage.removeItem("token");
    navigation.navigate("HomeScreen");
  };

  useEffect(() => {
    // Handle token logic, if needed
    // const token = localStorage.getItem("token");
    // setActive(token ? "loggedIn" : "loggedOut");
  }, []);

  return (
    <View style={[styles.navbar, { paddingTop: insets.top }]}>
      <View style={styles.left}>
        <Text style={styles.logo} onPress={() => navigation.navigate("HomeScreen")}>
          UC Club
        </Text>
      </View>

      <View style={styles.center}>
        {navigationItems.map((item) => (
          <TouchableOpacity
            key={item.name}
            onPress={() => handleNavigate(item.route)}
            style={[
              styles.navItem,
              active === item.route ? styles.activeNavItem : null,
            ]}
          >
            <Text style={styles.navItemText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.right}>
        <TouchableOpacity style={styles.iconButton} onPress={() => alert("Notifications")}>
          <Ionicons name="ios-notifications-outline" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => navigation.navigate("ProfileScreen")}
        >
          <Image
            source={{ uri: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" }}
            style={styles.profilePic}
          />
        </TouchableOpacity>
      </View>

      {active === "loggedIn" && (
        <View style={styles.cartContainer}>
          <Text style={styles.cartText}>₹99</Text>
          <TouchableOpacity onPress={() => navigation.navigate("CartScreen")}>
            <Ionicons name="cart" size={30} color="white" />
          </TouchableOpacity>
        </View>
      )}

      {active === "loggedIn" && (
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#333',
    paddingHorizontal: 10,
    height: 60,
  },
  left: {
    flex: 1,
  },
  logo: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'serif',
  },
  center: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  navItem: {
    marginHorizontal: 10,
    paddingVertical: 5,
  },
  activeNavItem: {
    backgroundColor: '#444',
    borderRadius: 5,
  },
  navItemText: {
    fontSize: 14,
    color: 'white',
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginHorizontal: 10,
  },
  profilePic: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  cartContainer: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 10,
    borderRadius: 50,
  },
  cartText: {
    color: 'white',
    marginBottom: 5,
  },
  logoutButton: {
    position: 'absolute',
    bottom: 0,
    left: 10,
    backgroundColor: '#E4002B',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  logoutText: {
    color: 'white',
  },
});

export default Navbar;
