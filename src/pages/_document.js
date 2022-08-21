import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html>
      <Head />
      <body className="bg-slate-100 dark:bg-[#202D36] dark:text-white">
        <Main />
        <NextScript />
        <Script
          strategy="beforeInteractive"
          src="/assets/js/darkmode.js"
          onLoad={() => {
            console.log('script loaded successfully');
          }}
          onError={(e) => {
            console.error('Script failed to load', e);
          }}
        />
      </body>
    </Html>
  );
}
