import Document, { Head, Main, NextScript } from "next/document";

class ErgidaDocument extends Document {
    render() {
        return (
            <html>
                <Head>
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
