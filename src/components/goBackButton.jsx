'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

const GoBackButton = () => {

    const router = useRouter()

    return (
        <div>
            <button type="button" onClick={() => router.back()} class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                Go Back
            </button>
        </div>
    )
}

export default GoBackButton
