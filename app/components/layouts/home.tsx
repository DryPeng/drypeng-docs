// for pages/index.tsx

import Header from '@modules/header'
// import Footer from '@modules/footer'

export default function Layout( { children }) {
  return (
    <div>
    <Head>
        <title>DryPeng Docs</title>
        <meta name="DryPeng&apos;s product Docs"/>
        <link rel="icon" href="/favicon.ico" />
    </Head>

      <Header />

      {children}

      {/* <Footer /> */}

    </div>
  )
}
