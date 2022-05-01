import mammalsEs from '../words/es/mammals.js';
import mammalsEn from '../words/en/mammals.js';

/**
 * Gets a ranom animal in a given language and category
 * @param {String} lang Language ('en' or 'es')
 * @param {String} category The animal category
 */
export default function getRandomAnimal(lang = 'en', category = 'mammals') {

  if (typeof lang != 'string') {
    console.error('first argument (lang) is not string');
    return void 0;
  }

  if (typeof category != 'string') {
    console.error('second argument (lang) is not string');
    return void 0;
  }

  let o = {};

  // english results
  lang === 'en' && (o = (function () {
    let randIndex = +(Math.random() * mammalsEn.length).toFixed();

    switch (category) {
      case 'mammals':
        return { index: randIndex, animals: mammalsEn };
    }
  })())

  // spanish results|
  lang === 'es' && (o = (function () {
    let randIndex = +(Math.random() * mammalsEs.length).toFixed();

    switch (category) {
      case 'mammals':
        return { index: randIndex, animals: mammalsEs };
    }
  })())

  return o.animals[o.index].toLowerCase();
}