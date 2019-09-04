import Document, { Head, Main, NextScript } from "next/document";

class ErgidaDocument extends Document {
    render() {
        return (
            <html>
                <Head>
                    <meta charSet="UTF-8"/>
                        <meta name="viewport"
                              content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
                            <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
                    <link
                        href="https://fonts.googleapis.com/css?family=Open+Sans:300, 400,600&amp;subset=latin-ext"
                        rel="stylesheet"
                    />
                    </Head>
                    <body>
                        <Main />
                        <NextScript />
                    </body>
            </html>
        )
    }
}

export default ErgidaDocument;
