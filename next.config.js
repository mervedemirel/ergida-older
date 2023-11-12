//const withCSS = require('@zeit/next-css');
const withImages = require('next-images');
const withPlugins = require('next-compose-plugins');
const withFonts = require('next-fonts');


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

// module.exports = withPlugins([
//     [optimizedImages, {optimizeImagesInDev: true}],
//     [withCSS],
//     [withImages, {
//         localeSubpaths: typeof process.env.LOCALE_SUBPATHS === 'string'
//             ? process.env.LOCALE_SUBPATHS
//             : 'none',
//     }]
// ]);

module.exports = withPlugins([
    [withImages],
    [withFonts]
],
{
    webpack(config, options) {
      // Custom webpack configurations go here
      config.module.rules.push({
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      });
      return config;
    }
});
