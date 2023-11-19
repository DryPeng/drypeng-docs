// homepage

import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

// layout and styles
import layouts from '@layouts/'
import styles from './app/home.module.css'

function IndexPage() {
    return (
      <div>

        <h1 className="{style.leading}">Welcome to DryPeng</h1>
        <p className="{style.subTitle">Explore guides and tutorials to start use<br/>DryPeng&apos;s product</p>

      </div>
    )
  }
   
  export default IndexPage