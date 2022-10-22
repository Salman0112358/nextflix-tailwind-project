import React from 'react'
import Head from 'next/head'
import Image from "next/image";

const login = () => {
  return (
    <div className='relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent'>
        <Head>
        <title>Salman's Flix</title>
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <Image
        src="https://cdn.wallpapersafari.com/43/24/owPJtp.jpg"
        layout='fill'
        objectFit='cover'
        className='-z-10 !hidden opacity-60 sm:!inline'
        
        />
    </div>
  )
}

export default login