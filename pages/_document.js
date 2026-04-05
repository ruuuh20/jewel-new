import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
       
          <meta 
          name="description"
          content="A nonprofit organization that runs educational programs for people of all ages. Connecting the United States and other cultures."/>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
          <script async src="https://tally.so/widgets/embed.js"></script>
        </Head>
        
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
