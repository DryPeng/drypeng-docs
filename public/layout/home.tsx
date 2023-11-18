// Thank you for cloudflare
export const runtime = 'edge';

import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

// components and styles
import Header from '@components/header'
// import Footer from '@components/Footer'

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
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description"/>
        <link rel="stylesheet" href="/app/home.css" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
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
