
// i18n.ts
import { I18n } from 'i18n-js';
import en from './locales/en';
import ja from './locales/ja';

const i18n = new I18n({
  en,
  ja,
});

i18n.enableFallback = true;
i18n.defaultLocale = 'ja';
i18n.locale = 'en'; // or use device locale if desired

export default i18n;
