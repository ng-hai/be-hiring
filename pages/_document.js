import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            key="title"
            name="title"
            content="beHiring - 👋🏼 Join us today"
          />
          <meta
            key="description"
            name="description"
            content="A place to grow, prove, and build a legacy for any hungry talented people."
          />

          {/* Open Graph / Facebook */}
          <meta key="og:type" property="og:type" content="website" />
          <meta
            key="og:url"
            property="og:url"
            content="https://careers.be.xyz/"
          />
          <meta
            key="og:title"
            property="og:title"
            content="beHiring - 👋🏼 Join us today"
          />
          <meta
            key="og:description"
            property="og:description"
            content="A place to grow, prove, and build a legacy for any hungry talented people."
          />
          <meta
            key="og:image"
            property="og:image"
            content="https://careers.be.xyz/images/banner.png"
          />

          {/* Twitter */}
          <meta
            key="twitter:card"
            property="twitter:card"
            content="summary_large_image"
          />
          <meta key="twitter:url" content="https://careers.be.xyz/" />
          <meta
            key="twitter:title"
            property="twitter:title"
            content="beHiring - 👋🏼 Join us today"
          />
          <meta
            key="twitter:description"
            property="twitter:description"
            content="A place to grow, prove, and build a legacy for any hungry talented people."
          />
          <meta
            key="twitter:image"
            property="twitter:image"
            content="https://careers.be.xyz/images/banner.png"
          />

          <link
            key="apple-touch"
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            key="favicon32"
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            key="favicon16"
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link key="manifest" rel="manifest" href="/site.webmanifest" />
          <link
            key="mask-icon"
            rel="mask-icon"
            href="/safari-pinned-tab.svg"
            color="#00003b"
          />
          <meta
            key="msapplication"
            name="msapplication-TileColor"
            content="#00003b"
          />
          <meta key="them-color" name="theme-color" content="#ffffff" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
