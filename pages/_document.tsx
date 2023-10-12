import Document, { Html, Head, Main, NextScript } from 'next/document';
import { isDev } from 'config/index';

class AppDocument extends Document {
  render = () => (
    <Html lang='en-GB'>
      <Head>
        <meta name='keywords' content='B² Network' />
        <meta name='description' content='B² Network' />
        <link rel='icon' href='/logo.svg' />
        {isDev && (
          <>
            <script src="https://cdn.bootcdn.net/ajax/libs/vConsole/3.9.0/vconsole.min.js"></script>
            <script dangerouslySetInnerHTML={{
              __html: `
                // init vConsole
                var vConsole = new VConsole();
              `
            }}>
            </script>
          </>
        )}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default AppDocument;
