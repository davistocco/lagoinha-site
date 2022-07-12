import '../styles/globals.scss'
import Header from '../components/header/header.jsx';

function MyApp({ Component, pageProps }) {
  return <>
    <Header></Header>
    <div id='inicio' className='layout'>
      <Component {...pageProps} />
    </div>
  </>
}

export default MyApp
