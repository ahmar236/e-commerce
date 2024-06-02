"use client"
import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Sidebar from './Sidebar'
import { usePathname } from 'next/navigation'

const Layout = ({children}) => {

    var pathname = usePathname()

  return (
    <div>

        {
            pathname.startsWith("/admin") ?
            <div className='border flex h-screen'>
                <div className='border w-56 p-4 bg-gray-200'>
                    <Sidebar />
                </div>

                <div className='flex-1 overflow-auto shadow-inner shadow-slate-600 p-4'>
                    {children}
                </div>
            </div>

            :
            <div>
                <Navbar />
                {children}
                <Footer />
            </div>
        }
        
    </div>
  )
}

export default Layout
