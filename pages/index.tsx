// index.tsx

import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import styles from '@styles/topbar.module.css'

const Topbar = () => {
  return (
    <div className={styles.topbar}>
      <div className={styles.searchbar}>
        <Image src="" alt="Search icon" width={20} height={20} />
        <input type="text" placeholder="Search DryPeng Docs" />
      </div>
      <button className={styles.directory}>
        <Image src="" alt="Directory icon" width={20} height={20} />
      </button>
    </div>
  )
}

const Page = () => {
  return (
    <div>
      <Head>
        <title>DryPeng Docs</title>
      </Head>
      <Topbar />
      <div>
        <Image src="" alt="Background image" layout="fill" objectFit="cover" />
      </div>
      <div>
        <h1>Welcome to DryPeng Docs</h1>
      </div>
    </div>
  )
}

export default Page
