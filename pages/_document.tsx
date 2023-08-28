import Document, { Html, Head, Main, NextScript } from "next/document"
import Script from "next/script"

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Scope+One&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <Script
            src="https://www.paypalobjects.com/donate/sdk/donate-sdk.js"
            strategy="beforeInteractive"
          />
        </body>
      </Html>
    )
  }
}
