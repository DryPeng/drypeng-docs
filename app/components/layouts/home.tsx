// for pages/index.tsx


import { ReactNode } from "react";
import Header from '@modules/header'
// import Footer from '@modules/footer'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
    <head>
        <title>DryPeng Docs</title>
        <meta name="DryPeng&apos;s product Docs"/>
        <link rel="icon" href="/favicon.ico" />
    </head>

      <Header />
      <main>{children}</main>
      {/* <Footer /> */}

    </div>
  )
}