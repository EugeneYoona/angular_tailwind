import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Raleway:wght@500;600;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="bg-body">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
