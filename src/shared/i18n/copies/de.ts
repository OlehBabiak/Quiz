import { IPageOptions } from './types';

const page2Options: IPageOptions[] = [
  { value: 'Weiblich' },
  { value: 'Männlich' },
  { value: 'Ander' },
];

const page3Options: IPageOptions[] = [
  { value: '18-19 jahren' },
  { value: '30-39 jahren' },
  { value: '40-49 jahren' },
  { value: '50+' },
];

const page4Options: IPageOptions[] = [
  { value: 'Mangel an Logik' },
  { value: 'Langsam' },
  { value: 'Mangel an Humor' },
  { value: 'Viel zu generische Endung' },
];
const page5Options: IPageOptions[] = [
  { value: 'Werwolf' },
  { value: 'Handeln' },
  { value: 'Royal Obsession' },
  { value: 'Handeln' },
  { value: 'Romantisch' },
  { value: 'Young Adult' },
  { value: 'Bad Boy' },
];

export const de = {
  page1: {
    title: 'Was ist Ihre bevorzugte Sprache?',
    text: 'Sprachauswahl',
  },
  page2: {
    title: 'Mit welchem Geschlecht identifizieren Sie sich?',
    text: 'Bitte teilen Sie mit, wie Sie sich identifizieren',
    options: JSON.stringify(page2Options),
  },
  page3: {
    title: 'Wie alt sind Sie?',
    options: JSON.stringify(page3Options),
  },
  page4: {
    title: 'Was hasst du am meisten in einem Buch?',
    options: JSON.stringify(page4Options),
    button: 'Nächst',
  },
  page5: {
    title: 'Was sind deine Lieblingsthemen?',
    text: 'Wählen Sie bis zu 3 Themen, die Sie mögen',
    options: JSON.stringify(page5Options),
    button: 'Nächst',
  },
  loadingPage: { text: 'Sammlungen für Sie finden...' },
  emailPage: {
    title: 'E-Mail-Adresse ',
    text: 'Geben Sie Ihre E-Mail-Adresse ein, um vollen Zugriff zu erhalten',
    placeholder: 'Ihre E-Mail',
    privatePolicy:
      'Mit dem Fortfahren stimme ich der Datenschutzerklärung und den Nutzungsbedingungen zu.',
    button: 'Nächst',
  },
  resultPage: {
    title: 'Danke für die Unterstützung und das Bestehen des Quiz',
    text: 'Meine Antworten herunterladen',
    button: 'Quiz wiederholen',
  },
};
