import i18n from '../i18n';
import { Text, TouchableOpacity, View } from 'react-native';
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
      <TouchableOpacity onPress={toggleLanguage}>
        <Text style={{ fontSize: 24 }}>
          {locale === 'en' ? '🇬🇧' : '🇯🇵'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}