import Head from 'next/head'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from '../component/Navbar/Navbar'
import Footer from '../component/Footer/Footer'
import {urlApi} from '../Helpers/database'

function MyApp({ Component, pageProps, productData}) {
  return (
    <div>
        <Head>
        <title>1000shapes</title>
        <link rel="icon" href="/logo.jpg" />
        </Head>
        <Navbar productData={productData}/>
          <Component {...pageProps} productData={productData}/>
        <Footer/>
    </div>
  )
  
}

MyApp.getInitialProps = async (ctx) => {
  const res = await fetch(`${urlApi}/produkte-and-services`)
  const json = await res.json()
  return { productData: json }
}

export default MyApp
