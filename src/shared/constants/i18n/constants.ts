import { Language } from '../../types/types';

export const enum ISO_CODES {
  EN = 'en',
  DE = 'de',
  SP = 'sp',
  FR = 'fr',
}

export const enum LANGUAGES_NAMES {
  ENGLISH = 'English',
  GERMAN = 'German',
  SPANISH = 'Spanish',
  FRENCH = 'French',
}

export const AVAILABLE_LANGUAGES: Language[] = [
  { lang: LANGUAGES_NAMES.ENGLISH },
  { lang: LANGUAGES_NAMES.GERMAN },
  { lang: LANGUAGES_NAMES.SPANISH },
  { lang: LANGUAGES_NAMES.FRENCH },
];

export const DEFAULT_LANGUAGE = ISO_CODES.EN;
