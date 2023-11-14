const NextI18Next = require('next-i18next').default;
//const i18nextNodeFsBackend = require('i18next-node-fs-backend');


const localeSubpathVariations = {
    none: {},
    foreign: {
        en: 'en',
    },
    all: {
        tr: 'tr',
        en: 'en',
    },
};

module.exports = new NextI18Next({
    defaultLanguage: 'tr',
    otherLanguages: ['en'],
    localePath: typeof window === 'undefined' ? 'public/locales' : 'locales',
    localeSubpaths: {
        en: 'en'
    },
  backend: {
    loadPath: 'public/locales/{{lng}}/{{ns}}.json',
  },
});

// module.exports = new NextI18Next(({
//     otherLanguages: ['en'],
//     localeSubpaths: localeSubpathVariations[localeSubpaths]
// }))
