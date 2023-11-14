import { Router, useRouter } from 'next/router'
import React from 'react'

function error() {

    const router = useRouter();
    const getBack = () => router.push('/')

  return (
    <div className='flex flex-col justify-center items-center h-screen text-black-600'>
        <p className='text-4xl mb-4'>ASP.NET server is off</p>
        <button onClick={getBack}
            className='border-2 bg-red-400 rounded-full border-none px-4 py-2'>Get back</button>
    </div>
  )
}

export default error