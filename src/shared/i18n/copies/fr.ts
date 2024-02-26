import { IPageOptions } from './types';

const page2Options: IPageOptions[] = [
  { value: 'Femelle' },
  { value: 'Mâle' },
  { value: 'Autre' },
];

const page3Options: IPageOptions[] = [
  { value: '18-19 ans' },
  { value: '30-39 ans' },
  { value: '40-49 ans' },
  { value: '50+' },
];

const page4Options: IPageOptions[] = [
  { value: 'Manque de logique' },
  { value: 'Une vitesse lente' },
  { value: 'Manque d’humour' },
  { value: 'Fin beaucoup trop générique' },
];

const page5Options: IPageOptions[] = [
  { value: 'Loup-garou' },
  { value: 'Action' },
  { value: 'Royal Obsession' },
  { value: 'Milliardaire' },
  { value: 'Romance' },
  { value: 'Jeune Adulte' },
  { value: 'Bad Boy' },
];

export const fr = {
  page2: {
    title: 'À quel genre vous identifiez-vous ?',
    text: 'Veuillez indiquer comment vous vous identifiez',
    options: JSON.stringify(page2Options),
  },
  page3: {
    title: 'Quel est votre âge?',
    options: JSON.stringify(page3Options),
  },
  page4: {
    title: 'Qu’est-ce que tu détestes le plus dans un livre ?',
    options: JSON.stringify(page4Options),
    button: 'Prochaine',
  },
  page5: {
    title: 'Quels sont vos sujets préférés ?',
    text: 'Choisissez jusqu’à 3 sujets que vous aimez',
    options: JSON.stringify(page5Options),
    button: 'Prochaine',
  },
  loadingPage: { text: 'Trouver des collections pour vous...' },
  emailPage: {
    title: 'Email',
    text: 'Entrez votre email pour obtenir un accès complet',
    placeholder: 'Votre email',
    privatePolicy:
      'En continuant, j’accepte la politique de confidentialité et les conditions d’utilisation.',
    button: 'Prochaine',
  },
  resultPage: {
    title: 'Merci de nous soutenir et de passer le quiz',
    text: 'Télécharger mes réponses',
    button: 'Reprendre le questionnaire',
  },
};
