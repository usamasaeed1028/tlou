import Layout2 from '@/components/layout2/layout2'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return  <Layout2>
  <Component {...pageProps} />
  </Layout2> 
}
