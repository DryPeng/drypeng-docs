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

        <Header>
            <h1 className="style.leading">Welcome to DryPeng</h1>
            <p className="style.subTitle">Explore guides and tutorials to start use<br/>DryPeng&apos;s product</p>
        </Header>

      {children}

      {/* <Footer /> */}

    </div>
  )
}