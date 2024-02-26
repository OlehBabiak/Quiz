import { IPageOptions } from './types';

const page2Options: IPageOptions[] = [
  { value: 'Female' },
  { value: 'Male' },
  { value: 'Other' },
];

const page3Options: IPageOptions[] = [
  { value: '18-19 years' },
  { value: '30-39 years' },
  { value: '40-49 years' },
  { value: '50+' },
];

const page4Options: IPageOptions[] = [
  { value: 'Lack of logic' },
  { value: 'A slow speed' },
  { value: 'Lack of humor' },
  { value: 'Way too generic ending' },
];

const page5Options: IPageOptions[] = [
  { value: 'Werewolf' },
  { value: 'Action' },
  { value: 'Royal Obsession' },
  { value: 'Billionaire' },
  { value: 'Romance' },
  { value: 'Young Adult' },
  { value: 'Bad Boy' },
];

export const en = {
  page1: {
    title: 'What is your preferred language?',
    text: 'Choose language',
  },
  page2: {
    title: 'What gender do you identify with?',
    text: 'Please share how do you identify yourself',
    options: JSON.stringify(page2Options),
  },
  page3: {
    title: 'What is your age?',
    options: JSON.stringify(page3Options),
  },
  page4: {
    title: 'What do you hate the most in a book?',
    options: JSON.stringify(page4Options),
    button: 'Next',
  },
  page5: {
    title: 'What are your favorite topics?',
    text: 'Choose up to 3 topics you like',
    options: JSON.stringify(page5Options),
    button: 'Next',
  },
  loadingPage: { text: 'Finding collections for you...' },
  emailPage: {
    title: 'Email',
    text: 'Enter your email to get full access',
    placeholder: 'Your email',
    privatePolicy:
      'By continuing I agree with Privacy policy and Terms of use.',
    button: 'Next',
  },
  resultPage: {
    title: 'Thank you for supporting us and passing quiz',
    text: 'Download my answers',
    button: 'Retake quiz',
  },
};
