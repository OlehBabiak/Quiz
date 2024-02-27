import { IPageOptions } from './types';

const page2Options: IPageOptions[] = [
  { value: 'Femenino' },
  { value: 'Masculino' },
  { value: 'Otro' },
];

const page3Options: IPageOptions[] = [
  { value: '18-19 años' },
  { value: '30-39 años' },
  { value: '40-49 años' },
  { value: '50+' },
];

const page4Options: IPageOptions[] = [
  { value: 'Falta de lógica' },
  { value: 'Baja velocidad' },
  { value: 'falta de humor' },
  { value: 'Final demasiado genérico' },
];

const page5Options: IPageOptions[] = [
  { value: 'Hombre lobo' },
  { value: 'Acción' },
  { value: 'Royal Obsession' },
  { value: 'Multimillonario' },
  { value: 'Romance' },
  { value: 'Adulto Joven' },
  { value: 'Chico Malo' },
];

export const sp = {
  page2: {
    title: '¿Con qué género te identificas',
    text: 'Por favor, comparta cómo se identifica',
    options: JSON.stringify(page2Options),
  },
  page3: {
    title: '¿Cuál es su edad?',
    options: JSON.stringify(page3Options),
  },
  page4: {
    title: '¿Qué es lo que más odias en un libro?',
    options: JSON.stringify(page4Options),
    button: 'Próximo',
  },
  page5: {
    title: '¿Cuáles son tus temas favoritos?',
    text: 'Elija hasta 3 temas que te gustan?',
    options: JSON.stringify(page5Options),
    button: 'Próximo',
  },
  loadingPage: { text: 'Encontrar colecciones para usted...' },
  emailPage: {
    title: 'Email',
    text: 'Ingrese su correo electrónico para obtener acceso completo',
    placeholder: 'Tu email',
    privatePolicy:
      'Al continuar estoy de acuerdo con la política de privacidad y los Términos de uso.',
    button: 'Próximo',
  },
  resultPage: {
    title: 'Gracias',
    subTitle: 'por apoyarnos y pasar el examen',
    text: 'Descargar mis respuestas',
    button: 'Repetir el cuestionario',
  },
};
