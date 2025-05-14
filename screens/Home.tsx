import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useLanguage } from '../components/LanguageContext';
import LanguageSwitch from '../components/language';
export default function Home() {
  const { locale } = useLanguage();

return (
    <View style={styles.container}>
      {/* Left Pane - Image */}
      <View style={styles.leftPane}>
        <Image source={require('../assets/forest.jpg')} style={styles.image} />
        <Text style={styles.leftVerticalText}></Text>
      </View>

      {/* Right Pane - Content */}
      <View style={styles.rightPane}>
        <Text style={styles.rightVerticalText}>Creative Studio Roche</Text>
        <Text style={styles.author}>by Andre Meow and Danny Takushi</Text>

        <Text style={styles.paragraph}>
          Great Art and Cat Pictures
        </Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Concept</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  leftPane: {
    flex: 1,
    backgroundColor: '#3e3e3e',
    position: 'relative',
  },
  rightPane: {
    flex: 1,
    backgroundColor: '#d7cfc2',
    padding: 30,
    justifyContent: 'center',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  leftVerticalText: {
    position: 'absolute',
    bottom: 40,
    left: -50,
    transform: [{ rotate: '#fff' }],
    fontSize: 12,
    color: '#888',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  rightVerticalText: {
    transform: [{ rotate: '-90deg' }],
    position: 'absolute',
    top: 150,
    left: -80,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textTransform: 'uppercase',
  },
  author: {
    fontSize: 12,
    color: '#555',
    marginBottom: 15,
  },
  paragraph: {
    fontSize: 14,
    color: '#333',
    marginBottom: 25,
    lineHeight: 20,
  },
  button: {
    borderWidth: 1,
    borderColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'flex-start',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 12,
  },
});
