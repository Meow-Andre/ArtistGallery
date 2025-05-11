import i18n from '../i18n';
import { Text, Button, View } from 'react-native';
import { useState } from 'react';

export default function LanguageSwitch() {
  const [locale, setLocale] = useState('en');

  const toggleLanguage = () => {
    const next = locale === 'en' ? 'ja' : 'en';
    i18n.locale = next;
    setLocale(next);
  };

  return (
    <View>
      {/* <Text>{i18n.t('welcome')}</Text> */}
      <Button title={i18n.t('switch_language')} onPress={toggleLanguage} />
    </View>
  );
}
