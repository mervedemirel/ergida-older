const NextI18Next = require('next-i18next').default;


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
    }
});

// module.exports = new NextI18Next(({
//     otherLanguages: ['en'],
//     localeSubpaths: localeSubpathVariations[localeSubpaths]
// }))
