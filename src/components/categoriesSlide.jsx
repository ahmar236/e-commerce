import React from 'react'
import Image from 'next/image';

async function getData() {
  try {
    const res = await fetch('http://localhost:3000/api/categories');
    return res.json();

    console.log(res.json)
  } catch (error) {

    console.log(error)
  }
}

const CategoriesSlide = async () => {

  const data = await getData()

  return (
    <div className='p-2 '>
      <div className='p-6 grid md:grid-cols-3 lg:grid-cols-4 gap-2'>

        {data?.message.map((v, i) => {
          return (
            <>

              <div href="#" class="flex flex-col max-w-sm p-2 justify-center align-middle bg-blue-100 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <img className='w-full rounded-lg' src={`/images/${v.title}.jpg`}></img>
                <h5 class="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">{v.title}</h5>
                {/* <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p> */}
              </div >

            </>
          )
        })}

      </div>
    </div >
  )
}

export default CategoriesSlide
