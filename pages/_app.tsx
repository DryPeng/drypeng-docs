import type { AppProps } from 'next/app'
 
export default function MyApp({ components, pageProps }: AppProps) {
  return <Component {...pageProps} />
}