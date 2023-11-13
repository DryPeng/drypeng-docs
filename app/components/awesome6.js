import { config } from './pubilc/FA6'
import './pubilc/FA6/css/styles.css'
config.autoAddCss = false

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
