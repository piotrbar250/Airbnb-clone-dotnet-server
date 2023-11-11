import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Header from '@/components/Header'
import Banner from '@/components/Banner'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Airbnb</title>
      </Head>

      {/* Header */}
      <Header/>
      {/* Banner */}
      <Banner/>
    </div>
  )
}
