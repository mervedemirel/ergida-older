const withCSS = require('@zeit/next-css');
const withImages = require('next-images');
const withPlugins = require('next-compose-plugins');
const withFonts = require('next-fonts');
const SWPrecacheWebpackPlugin = require("sw-precache-webpack-plugin");


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
    [withCSS],
    [withImages],
    [withFonts]
], {
    webpack: config => {
        config.plugins.push(
            new SWPrecacheWebpackPlugin({
                verbose: true,
                staticFileGlobsIgnorePatterns: [/\.next\//],
                runtimeCaching: [
                    {
                        handler: "networkFirst",
                        urlPattern: /^https?.*/
                    }
                ]
            })
        );

        return config;
    }
});
