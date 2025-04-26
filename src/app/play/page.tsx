"use client"
import { useLanguage } from '@/context/language';
import Link from 'next/link'
import React from 'react'

function Page() {
    const { language } = useLanguage();
    const [isLoading, setIsLoading] = React.useState(true);
    const [isError, setIsError] = React.useState(false);
    const [serverIp, setServerIp] = React.useState('');
    const [serverPort, setServerPort] = React.useState('');

    React.useEffect(() => {
        const fetchServerIp = async () => {
            try {
                const response = await fetch('/api/play');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setServerIp(data.ip);
                setServerPort(data.port);
                window.open('steam://connect/' + data.ip + ':'+ data.port +'?appid=252490');
            } catch (error) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        };
        fetchServerIp();
    }, []);
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-24 max-sm:p-12">
            <div className="w-full max-w-6xl mx-auto text-start">
                <h1 className="text-9xl font-bold text-white max-sm:text-6xl">{language.data.play.title}</h1>
                <h2 className="mt-4 text-lg text-gray-300/40 max-w-xl max-sm:text-sm">{language.data.play.description}</h2>
                <div className="flex gap-4 mt-8">
                    <Link href={`steam://rungameid/252490`}>
                        <button className="px-4 py-2 text-base font-semibold text-white bg-red-600 rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">{language.data.play.actions.open_rust}</button>
                    </Link>
                    {
                        isLoading ?
                            <button className="px-4 py-2 text-base font-semibold text-white bg-gray-600 rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">{language.data.play.actions.connecting}</button>
                        :
                        isError ?
                            <button className="px-4 py-2 text-base font-semibold text-white bg-red-600 rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">{language.data.play.actions.failed}</button>
                        :
                        <Link href={`steam://connect/${serverIp}:${serverPort}?appid=252490`}>
                            <button className="px-4 py-2 text-base font-semibold text-white bg-green-600 rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">{language.data.play.actions.connect}</button>
                        </Link>
                    }
                </div>
            </div>
        </div>
    )
}

export default Page