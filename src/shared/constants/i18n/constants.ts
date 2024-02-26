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
  { lang: LANGUAGES_NAMES.ENGLISH, iso: ISO_CODES.EN },
  { lang: LANGUAGES_NAMES.GERMAN, iso: ISO_CODES.DE },
  { lang: LANGUAGES_NAMES.SPANISH, iso: ISO_CODES.SP },
  { lang: LANGUAGES_NAMES.FRENCH, iso: ISO_CODES.FR },
];

export const DEFAULT_LANGUAGE = ISO_CODES.EN;
