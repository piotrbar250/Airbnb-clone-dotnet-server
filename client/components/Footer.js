import React from 'react'

function Footer() {
  return (
    // <div className='grid grid-cols-1 md:grid-cols-4 space-y-10 px-32 bg-gray-100'>
    <div className='grid grid-cols-1 md:grid-cols-4 md:place-items-center px-32 py-10 bg-gray-100'>

      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>ABOUT</h5>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>
      
      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>SUPPORT</h5>
        <p>Help Center</p>
        <p>AirCover</p>
        <p>Anti-discrimination</p>
        <p>Disability support</p>
        <p>Cancellation options</p>
      </div>

      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>Hosting</h5>
        <p>Airbnb your home</p>
        <p>AirCover for Hosts</p>
        <p>Hosting resources</p>
        <p>Community forum</p>
        <p>Hosting responsibly</p>
      </div>

      <div className='space-y-4 text-xs text-gray-800 place-item-center - this doesnt work'>
        <h5 className='font-bold'>Hosting</h5>
        <p>Airbnb your home</p>
        <p>AirCover for Hosts</p>
        <p>Hosting resources</p>
        <p>Community forum</p>
        <p>Hosting responsibly</p>
      </div>
    </div>
  )
}

export default Footer