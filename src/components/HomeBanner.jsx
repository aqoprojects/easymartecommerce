import React, { useState } from 'react'
import Banner from '../assets/images/special1.jpg'
const HomeBanner = () => {
  const [isLoaded, setIsloaded] = useState(false)
  
  return (
    <article className='hidden lg:flex items-center-safe justify-center-safe mt-15 md:px-5'>
      {!isLoaded && (
        <div className="container h-64 bg-gray-300 animate-pulse rounded-lg"></div>
      )}
      <img src={Banner}  className={`aspect-auto h-120  container bg-gray-200 ${isLoaded ? 'block' : 'hidden'} `} onLoad={()=> setIsloaded(true)} />
    </article>
  )
}

export default HomeBanner