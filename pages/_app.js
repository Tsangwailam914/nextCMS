import Layout from '../components/layout'
// These styles apply to every route in the application
import '../styles/global.css'
 
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}