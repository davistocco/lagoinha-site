import '../styles/globals.scss'
import Header from '../components/header/header.jsx';
import Footer from '../components/footer/footer.jsx';
import Head from 'next/head';
import Script from 'next/script'; // Importação necessária
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Head para título, meta e adsense */}
      <Head>
        <title>Igreja Batista da Lagoinha em Ribeirão Preto</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script 
          async 
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID}`}
          crossOrigin="anonymous">
        </script>
      </Head>

      {/* GTM Script no <head> */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MH5KGF5T');
          `,
        }}
      />

      {/* GTM noscript logo após a tag <body> (equivalente) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-MH5KGF5T"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript>

      {/* Layout principal */}
      <div className="layout">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
