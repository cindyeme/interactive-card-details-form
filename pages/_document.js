import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <title>Frontend Mentor | Interactive card details form</title>
        <meta name="description" content="Interactive card details form" />
        <link rel="icon" href="/favicon-32x32.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className='font-space'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}