import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <title>Empowering minds, transforming futures. | Educate Together Organization</title>
          <meta 
          name="description"
          content="A nonprofit organization that runs educational programs for people of all ages. Connecting the United States and other cultures."/>
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://use.typekit.net/lrx3ljs.css" />
        </Head>
        
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
