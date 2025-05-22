import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LanguageSwitch from './language';
import { useNavigation } from '@react-navigation/native';



export default function Header() {
    const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      

      <View style={styles.rightSection}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text style={styles.menuItem}>HOME</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Gallery")}>
          <Text style={styles.menuItem}>GALLERY</Text>
        </TouchableOpacity>

<LanguageSwitch />

        <TouchableOpacity>
          <Text style={styles.menuItem}>☰</Text> {/* Hamburger icon for future use */}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    paddingHorizontal: 16,
    paddingTop: 12,
    backgroundColor: '#f4f1eb',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  menuItem: {
    fontSize: 14,
    marginHorizontal: 8,
  },
});
