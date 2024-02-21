const page2Options = [
  { value: 'Female' },
  { value: 'Male' },
  { value: 'Other' },
];

const page3Options = [
  { 1: '18-19 years' },
  { 2: '30-39 years' },
  { 3: '40-49 years' },
  { 4: '50+' },
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
    options: [
      { 1: 'Lack of logic' },
      { 2: 'A slow speed' },
      { 3: 'Lack of humor' },
      { 4: 'Way too generic ending' },
    ],
    button: 'Next',
  },
  page5: {
    title: 'What are your favorite topics?',
    text: 'Choose up to 3 topics you like',
    options: [
      { 1: 'Werewolf' },
      { 2: 'Action' },
      { 3: 'Royal Obsession' },
      { 4: 'Billionaire' },
      { 5: 'Romance' },
      { 6: 'Young Adult' },
      { 7: 'Bad Boy' },
    ],
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
