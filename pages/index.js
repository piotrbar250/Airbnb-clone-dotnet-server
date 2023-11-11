import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Header from '@/components/Header'
import Banner from '@/components/Banner'

const inter = Inter({ subsets: ['latin'] })

export default function Home({exploreData}) {
  return (
    <div>
      <Head>
        <title>Airbnb</title>
      </Head>

      {/* Header */}
      <Header/>
      {/* Banner */}
      <Banner/>

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>


          {/*  */}
          {exploreData.map(item => <p>{item.title}</p>)}
        </section>
      </main>
    </div>
  )
}

export async function getStaticProps()
{
  console.log("hello");
  const exploreData = await fetch('http://localhost:5000/api/activities').then(
    // res => {return res.json()}
    (res) => {
      console.log("pa na to 2")
      // console.log(res)
      // console.log(res)
      return res.json()
    },
    (error) => {

      console.error(error)
    }
  );

  return{
    props: {
      exploreData
    }
  }
}