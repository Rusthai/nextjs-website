"use client"
import { useLanguage } from '@/context/language';
import Link from 'next/link';
import React from 'react'

function NotFound() {
  const { language } = useLanguage();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-24 max-sm:p-12">
        <div className="w-full max-w-6xl mx-auto text-start">
            <h1 className="text-9xl font-bold text-white max-sm:text-6xl">404</h1>
            <h2 className="mt-4 text-lg text-gray-300/40 max-w-xl max-sm:text-sm">{language.data.not_found.title}</h2>
            <p className="mt-4 text-lg text-gray-300/40 max-w-xl max-sm:text-sm">{language.data.not_found.description}</p>
            <div className="flex gap-4 mt-8">
                <Link href={'/'}>
                    <button className="px-4 py-2 text-base font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">{language.data.not_found.actions.go_home}</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default NotFound