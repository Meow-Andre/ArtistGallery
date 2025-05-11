import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useLanguage } from '../components/LanguageContext';
import LanguageSwitch from '../components/language';
export default function Home() {
  const { locale } = useLanguage();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {locale=== 'en' ? 'Home' : 'ホーム'}
      </Text>
        <LanguageSwitch />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3e3e3e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#e8e5e5',
    fontSize: 24,
    marginBottom: 20,
  },
});
