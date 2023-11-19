// homepage

import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

// components and styles
import Header from '@components/header'
import styles from '/app/home.css'

function IndexPage() {
    return (
      <div>
       <Head>
        <title>DryPeng Docs</title>
        <meta name="description"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Header /> */}
      <div>

        <h1 class="leading">Welcome to DryPeng</h1>
        <p class="subTitle">Explore guides and tutorials to start use<br/>DryPeng's product</p>

      </div>
      {/* <Footer /> */}
      </div>
    )
  }
   
  export default IndexPage