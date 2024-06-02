'use client'
import { useState } from "react"
import { ChevronLeft } from "react-feather"
import { ChevronRight } from "react-feather"

export default function Carousal({ children: slides }) {

    var count = 1

    const prev = () => { count === 1 ? count = slides.length + 1 : count - 1 }
    const next = () => { count === slides.length + 1 ? count = 1 : count + 1 }

    return (
        <div className="overflow-hidden w-full flex justify-center align-center relative">
            <div className="w-full text-center transition-transform ease-out duration-500" style={{ transform: `translateX(-${curr * 100}%)` }}>
                {slides}
            </div>
            <div className="absolute inset-0 flex h-96 items-center justify-between p-4">
                <button onClick={prev} className="p-1 rounded-full shadow bg-white/50 text-gray-800 hover:bg-white">
                    <ChevronLeft size={40} />
                </button>
                <button onClick={next} className="p-1 rounded-full shadow bg-white/50 text-gray-800 hover:bg-white">
                    <ChevronRight size={40} />
                </button>
            </div>

        </div>
    )
}