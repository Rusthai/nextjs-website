"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { motion } from 'motion/react'
import { Dropdown } from 'primereact/dropdown'
import { ChevronDownIcon } from 'primereact/icons/chevrondown'
import { ChevronRightIcon } from 'primereact/icons/chevronright'
import { useLanguage } from '@/context/language'
import { languages } from '@/utils/i18n'

function Footer() {
    const { language, setLanguage } = useLanguage();
    const [selectedCountry, setSelectedCountry] = useState<CountryOption>({
        code: language.code,
        name: language.name,
        flag: language.data.flag
    });
    const countries = languages.map(lang => ({
        code: lang.code,
        name: lang.name,
        flag: lang.data.flag
    }));

    React.useEffect(() => {
        const findLanguage = languages.find(lang => lang.code === selectedCountry?.code);
        setLanguage(findLanguage!);
    }, [selectedCountry])

    interface CountryOption {
        name: string;
        code: string;
        flag: string;
    }

    const selectedCountryTemplate = (option: CountryOption | null, props: { placeholder?: string }) => {
        const placeholder = props.placeholder ?? language.data.footer.actions.change_language;
        if (option) {
            return (
                <div className="flex align-items-center !text-sm">
                    <img alt={option.name} src={"https://flagcdn.com/w80/"+option.flag.toLowerCase()+".webp"} className={`mr-2 rounded-md object-cover`} style={{ width: '28px', height: '20px' }} />
                    <div>{option.name}</div>
                </div>
            );
        }
        return <span className='!text-sm'>{placeholder}</span>;
    };

    const countryOptionTemplate = (option: CountryOption) => {
        return (
            <div className="flex align-items-center">
                <img alt={option.name} src={"https://flagcdn.com/w80/"+option.flag.toLowerCase()+".webp"} className={`mr-2 rounded-md object-cover`} style={{ width: '28px', height: '20px' }} />
                <div>{option.name}</div>
            </div>
        );
    };

    return (
        <>
        <footer className='relative w-full min-h-64 bg-stone-950 text-white font-bold z-50 px-4 py-2 mt-8'>
            <div className="dark-bar-pattern absolute top-0 left-0 !bg-stone-950 -translate-y-8 w-full"></div>
            <div className='w-full max-w-6xl mx-auto flex max-md:flex-col md:justify-between md:items-center min-h-24 gap-6'>
                <div className="flex flex-col space-y-2">
                    <div className="flex items-center space-x-2">
                        <img width={48} height={48} className='rounded-lg' src={'/icon.png'} alt='Rusthai'/>
                        <span className='text-5xl'>{language.data.footer.brand}</span>
                    </div>
                    <div>
                        <p className='text-xs font-light opacity-40 max-w-lg mt-2'>{language.data.footer.description}<br/><br/>{language.data.footer.support}</p>
                        <div className="flex gap-4">
                            <Link href={'https://www.buymeacoffee.com/ponlponl123'} target='_blank'>
                            <motion.button
                                initial={{ scale: 1 }}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.99 }}
                                className="mt-3 px-3 py-2 text-xs font-semibold text-white bg-orange-600 rounded-lg shadow-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
                            >Buy me a coffee!</motion.button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-4 min-w-max'>
                    <ul className="flex justify-end items-center text-end space-x-8 max-md:hidden">
                        <li><a href="/news">{language.data.footer.navigate.news}</a></li>
                        <li><a href="/about">{language.data.footer.navigate.about}</a></li>
                        <li><a href="/status">{language.data.footer.navigate.status}</a></li>
                        <li><Link href={'/play'}>
                            <motion.button
                                initial={{ scale: 1 }}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.99 }}
                                className="px-4 py-2 text-base font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                            >{language.data.footer.actions.play_rusthai}</motion.button>
                        </Link></li>
                    </ul>
                    <ul className="flex md:justify-end items-center md:text-end space-x-8">
                        <li><a href="/agreement/termsofservice" className='text-xs'>{language.data.agreement.terms_of_service}</a></li>
                        <li><a href="/agreement/privacypolicy" className='text-xs'>{language.data.agreement.privacy_policy}</a></li>
                    </ul>
                </div>
            </div>
            <div className='w-full max-w-6xl mx-auto flex justify-between items-center min-h-24 gap-6'>
                <div className="flex flex-col" id="statusgator-container">
                    <span className='text-xs font-light opacity-40'>{language.data.footer.service_status}</span>
                    <Link href="https://status.ponlponl123.com/" className='text-blue-800/60 text-sm' target="_blank" rel="noopener noreferrer">status.ponlponl123.com</Link>
                </div>
                <div className="flex flex-wrap items-center justify-end gap-6">
                    <ul className="flex items-center space-x-8">
                        <li>
                            <a href="/discord" target='_blank' rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-discord" viewBox="0 0 16 16">
                                    <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"></path>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/Rusthai" target='_blank' rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"></path>
                                </svg>
                            </a>
                        </li>
                    </ul>
                    <Dropdown value={{
                            code: language.code,
                            name: language.name,
                            flag: language.data.flag
                        }} onChange={(e) => setSelectedCountry(e.value)} options={countries} variant="outlined" optionLabel="name" placeholder={language.data.footer.actions.change_language}
                        valueTemplate={selectedCountryTemplate} itemTemplate={countryOptionTemplate} panelClassName='!text-xs !rounded-2xl' className="w-max md:w-14rem !rounded-2xl"
                        dropdownIcon={(opts) => {
                            return (opts.iconProps as { 'data-pr-overlay-visible'?: boolean })['data-pr-overlay-visible'] ? <ChevronRightIcon /> : <ChevronDownIcon />;
                        }} 
                    />
                </div>
            </div>
        </footer>
        <footer className='w-full flex flex-col justify-center items-center h-16 bg-stone-950 brightness-75 text-white font-bold z-50 px-4'>
            <span className='opacity-10 text-xs'>© 2025 Rusthai. {language.data.footer.copyright}</span>
            <span className='opacity-10 text-xs'>{language.data.footer.disclaim}</span>
        </footer>
        </>
    )
}

export default Footer