"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


function Sidebar() {

  var pathname = usePathname()

  var sidebarLinks = [
    {
      label: "Dashboard",
      href: "/admin",
      icon1: "bx bx-home",
      icon2: "bx bxs-home"
    },
    {
      label: "Orders",
      href: "/admin/orders",
      icon1: "bx bx-cart",
      icon2: "bx bxs-cart"
    },
    {
      label: "Products",
      href: "/admin/products",
      icon1: "bx bx-label",
      icon2: "bx bxs-label"
    },
    {
      label: "Categories",
      href: "/admin/categories",
      icon1: "bx bx-category-alt",
      icon2: "bx bxs-category-alt"
    },
    {
      label: "Suppliers",
      href: "/admin/suppliers",
      icon1: "bx bx-group",
      icon2: "bx bxs-group"
    },
    {
      label: "Analytics",
      href: "/admin/analytics",
      icon1: "bx bx-chart",
      icon2: "bx bxs-chart"
    }

  ]

  return (
    <div className='flex flex-col '>
      <Link href='/'><img src="/logo.png" alt="" className='w-24 text-center' /></Link>
      <div className='mt-4 space-y-2'>
        {sidebarLinks.map((v, i) => {
          return (
            <Link className={`flex items-center gap-2 border border-gray-50 p-2 rounded-md ${pathname == v.href ? "bg-orange-200 shadow-md" : null}`} href={v.href}>
              <i className={`text-xl ${pathname == v.href ? v.icon2 : v.icon1}`}></i>
              <div>
                {v.label}
              </div>
            </Link>
          )
        })}
      </div>
    </div>

  )
}

export default Sidebar
