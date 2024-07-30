import '../styles/globals.scss'
import Header from '../components/header/header.jsx';
import Footer from '../components/footer/footer.jsx';
import Head from 'next/head';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  return <>
    <div className='layout'>
      <Head>
        <title>Igreja Batista da Lagoinha em Ribeirão Preto</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script 
          async 
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID}`}
          crossOrigin="anonymous">
        </script>
      </Head>
      <Header></Header>
      <Component {...pageProps} />
      <Footer />
    </div>
  </>
}

export default MyApp
