// Thank you for cloudflare


import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

// components and styles
import Header from '@components/header'
// import Footer from '@components/Footer'
import styles from '@components/home.css'

// Define the props type for the homepage component
type HomeProps = {
  title: string
  description: string
  products: Product[]
}

// Define the product type for the products array
type Product = {
  name: string
  url: string
  logo: string
  alt: string
}

// Export the homepage component as a default function
export default function Home({ title, description, products }: HomeProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          {products.map((product) => (
            <Link href={product.url} key={product.name}>
              <a className={styles.card}>
                <Image
                  src={product.logo}
                  alt={product.alt}
                  width={64}
                  height={64}
                />
                <h2>{product.name}</h2>
              </a>
            </Link>
          ))}
        </div>
      </main>

      {/* <Footer /> */}
    </div>
  )
}

// Fetch the data for the homepage props from the API
// export async function getStaticProps() {
//   // Replace this with your own API endpoint
//   const res = await fetch('https://example.com/api/home')
//   const data = await res.json()

//   return {
//     props: data,
//   }
// }
