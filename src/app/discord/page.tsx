"use client"
import { useLanguage } from '@/context/language';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { use, useEffect } from 'react'

function Page() {
    const router = useRouter();
    const { language } = useLanguage();
    const discordInviteLink = 'https://discord.gg/WyNya4C9AE'
    
    useEffect(() => {
        router.replace(discordInviteLink)
    })

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-24 max-sm:p-12">
            <div className="w-full max-w-6xl mx-auto text-start">
                <h1 className="text-9xl font-bold text-white max-sm:text-6xl">{language.data.discord.title}</h1>
                <h2 className="mt-4 text-lg text-gray-300/40 max-w-2xl max-sm:text-sm">{language.data.discord.description}</h2>
                <div className="flex gap-4 mt-8">
                    <Link href={discordInviteLink}>
                        <button className="px-4 py-2 text-base font-semibold text-white bg-sky-600 rounded-lg shadow-md hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50">{language.data.discord.action}</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Page