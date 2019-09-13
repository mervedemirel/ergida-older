// const withPlugins = require('next-compose-plugins');
const withCSS = require('@zeit/next-css');
const withImages = require('next-images');
const optimizedImages = require('next-optimized-images');
const withPlugins = require('next-compose-plugins');

const publicRuntimeConfig = {
    localeSubpaths: typeof process.env.LOCALE_SUBPATHS === 'string'
        ? process.env.LOCALE_SUBPATHS
        : 'none',
};
//
// module.exports = withCSS(withImages({
//     localeSubpaths: typeof process.env.LOCALE_SUBPATHS === 'string'
//         ? process.env.LOCALE_SUBPATHS
//         : 'none',
// }));

module.exports = withPlugins([
    [optimizedImages, {optimizeImagesInDev: true}],
    [withCSS],
    [withImages, {
        localeSubpaths: typeof process.env.LOCALE_SUBPATHS === 'string'
            ? process.env.LOCALE_SUBPATHS
            : 'none',
    }]
]);
