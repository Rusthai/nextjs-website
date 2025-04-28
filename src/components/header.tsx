"use client"
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLanguage } from '@/context/language'

function Header() {
    const { language } = useLanguage();
    const [navActive, setNavActive] = React.useState(false);
    // const pathname = usePathname();
    const closeNav = () => setNavActive(false);
    return (
        <header className={'header w-full flex justify-between h-24 text-white font-bold absolute top-0 left-0 z-50 px-6 max-lg:z-[90] ' +
            (navActive ? " max-lg:bg-zinc-950 max-lg:fixed max-lg:h-full" : ''
                // (pathname === "/" ?' bg-transparent':' bg-gradient-to-b from-black/40 to-transparent')
            )
        }>
            <nav className={"w-full max-w-6xl mx-auto flex justify-between items-start max-lg:flex-col max-lg:gap-4 my-6"}>
                <div className="text-lg max-lg:w-full flex justify-between space-x-2">
                    <Link href="/" className="flex items-center space-x-2" onClick={closeNav}>
                        <motion.div
                            initial={{ scale: 1 }}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.99 }}
                        ><Image width={48} height={48} className='rounded-lg' src={'/icon.png'} alt='Rusthai'/></motion.div>
                    </Link>
                    <motion.button
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.06 }}
                        whileTap={{ scale: 0.94 }}
                        className="lg:hidden" onClick={() => setNavActive(!navActive)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </motion.button>
                </div>
                <ul className={"flex items-center space-x-8 max-lg:w-full max-lg:h-full max-lg:flex-col max-lg:gap-8 max-lg:pt-12 " + (navActive ? "" : " max-lg:opacity-0 max-lg:pointer-events-none")}>
                    <li><LinkButton onClick={closeNav} href="/news">{language.data.header.navigate.news}</LinkButton></li>
                    <li><LinkButton onClick={closeNav} href="/agreement">{language.data.header.navigate.agreement}</LinkButton></li>
                    <li><LinkButton onClick={closeNav} href="/about">{language.data.header.navigate.about}</LinkButton></li>
                    <li><LinkButton onClick={closeNav} href="/status">{language.data.header.navigate.status}</LinkButton></li>
                    <li className='navlink max-md:hidden'>
                        <Link href={'/play'}>
                            <motion.button
                                initial={{ scale: 1 }}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.99 }}
                                className="navlink px-4 py-2 text-base font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                            >{language.data.header.action.play_rusthai}</motion.button>
                        </Link>
                    </li>
                    <li className='navlink'>
                        <Link href={'https://rust.facepunch.com/buy/'} target='_blank'>
                            <motion.button
                                initial={{ scale: 1 }}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.99 }}
                                className="navlink px-4 py-2 text-base font-semibold text-white bg-red-600 rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 lg:-ml-4"
                            >{language.data.header.action.buy_rust}</motion.button>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

function LinkButton({ href, children, onClick }: { href: string, children: React.ReactNode, onClick?: () => void }) {
    const pathname = usePathname();
    const isActive = pathname === href;
    return (
        <Link href={href} onClick={onClick} className={
            "navlink px-4 py-2 text-base font-semibold text-white border-2 border-solid border-transparent " +
            (isActive ? " border-b-blue-600" : "")
        }>
            {children}
        </Link>
    );
}

export default Header