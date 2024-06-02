import React from 'react'
// import Carousal from '@/components/carousal1'
// import Image from 'next/image'
import CategoriesSlide from '../components/categoriesSlide'

const slides = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
]

const page = () => {
  return (
    <div>
      <div className='text-center m-4 mt-20 p-4'>
        <h1 className='text-3xl font-bold text-gray-500 drop-shadow-lg'>Your Online Shopping Mall</h1>
      </div>
      <div className='px-6 mx-auto max-w-full h-96 overflow-hidden'>
        {/* <Carousal>
          {slides.map(() => (
            <img src={'/${count}'} ></img>
          ))}
        </Carousal> */}
      </div>
      <div className='mb-10'>
        <CategoriesSlide />
      </div>
    </div>
  )
}

export default page
