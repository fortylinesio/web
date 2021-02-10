import en from './en';
import de from './de';
import ru from './ru';

export type Lang = 'en' | 'de' | 'ru' | string
export type Type = typeof en | typeof de | typeof ru

export {
  en,
  de,
  ru,
};
