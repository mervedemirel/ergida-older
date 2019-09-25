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
    fallbackLng: 'tr',
    lng: 'tr',
    otherLanguages: ['en'],
    localeSubpaths: {
        en: 'en'
    }
});

// module.exports = new NextI18Next(({
//     otherLanguages: ['en'],
//     localeSubpaths: localeSubpathVariations[localeSubpaths]
// }))
