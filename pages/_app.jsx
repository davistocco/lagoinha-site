import '../styles/globals.scss'
import Header from '../components/header/header.jsx';
import Footer from '../components/footer/footer.jsx';

function MyApp({ Component, pageProps }) {
  return <>
    <div className='layout'>
      <Header></Header>
      <Component {...pageProps} />
      <Footer />
    </div>
  </>
}

export default MyApp
