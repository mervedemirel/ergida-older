const express = require("express");
const next = require("next");
const nextI18NextMiddleware = require('next-i18next/middleware').default;

const nextI18next = require("./i18n");

//const port = 5000;
const port = process.env.PORT || 5000;
const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handle = app.getRequestHandler();

(async () => {
    await app.prepare();
    const server = express();

    server.use(nextI18NextMiddleware(nextI18next));

    server.use('/public/locales', express.static(path.join(__dirname, 'public/locales')));

    //server.get('*', (req, res) => handle(req, res));
    server.get('*', (req, res) => {
        // Ensure that the locale is set based on the request
        req.i18n.changeLanguage(req.query.lang || 'tr');

        return handle(req, res);
    });

    //await server.listen(port);
    await server.listen(port, (err) => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`);
    });
})();
