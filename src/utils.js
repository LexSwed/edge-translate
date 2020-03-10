import axios from 'axios';

axios.defaults.baseURL =
  __buildEnv__ === 'production' ? 'https://edge-translate.lexswed.now.sh/' : 'http://localhost:3000/';

export const getLanguages = () => axios('/api/languages').then(res => res.data);

export const translate = params => axios('/api/translate', { params }).then(res => res.data);

export const userLang = window.navigator.language.slice(0, 2) || window.navigator.languages[0].slice(0, 2);

export const getTranslatorLink = ({ to, text }) => `https://www.bing.com/translator?to=${to}&text=${text}`;