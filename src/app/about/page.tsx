"use client"
import { useLanguage } from '@/context/language';
import { motion } from 'motion/react';
import Link from "next/link";

export default function Home() {
  const { language } = useLanguage();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative h-max">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute top-0 left-0 overflow-hidden w-full h-[32rem] -z-10"
      >
        <div className="absolute w-full h-full bg-gradient-to-t from-background to-transparent left-0 bottom-0 z-10 flex flex-col justify-center items-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.42 }}
            className="text-6xl font-bold text-white max-sm:text-4xl"
          >{language.data.about.title}</motion.h1>
        </div>
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1.1 }}
          exit={{ scale: 0 }}
          style={{ transitionDuration: "0.64s" }}
          className="absolute top-0 left-0 overflow-hidden w-screen h-full hero-animate"
        >
          <img className="w-full h-full object-cover" src='/banner_about.jpg' />
        </motion.div>
      </motion.div>
      <div className='mt-[32rem]'></div>
      <motion.div className='relative w-full min-h-32 text-white font-bold z-50 px-4 py-6 my-18'
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.42, delay: 0.6 }}>
        <div className='w-full max-w-6xl mx-auto flex flex-col min-h-24 gap-4'>
          <h1 className='text-3xl font-bold'>{language.data.about.sections[1].title}</h1>
          <p className='text-lg text-gray-300/40 max-w-2xl max-sm:text-sm'>{language.data.about.sections[1].description}</p>  
        </div>
      </motion.div>
      <motion.div className='relative w-full min-h-32 text-white font-bold z-50 px-4 py-6 my-18 text-end'
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.42, delay: 0.6 }}>
        <div className='w-full max-w-6xl mx-auto flex flex-col items-end min-h-24 gap-4'>
          <h1 className='text-3xl font-bold'>{language.data.about.sections[2].title}</h1>
          <p className='text-lg text-gray-300/40 max-w-2xl max-sm:text-sm'>{language.data.about.sections[2].description}</p>  
        </div>
      </motion.div>
      <motion.div className='relative w-full min-h-32 bg-zinc-900 text-white font-bold z-50 px-4 py-12 my-18'
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.42, delay: 0.6 }}>
        <div className="dark-bar-pattern absolute top-0 left-0 !bg-zinc-900 -translate-y-8 w-full"></div>
        <div className='w-full max-w-6xl mx-auto flex flex-col justify-center items-center min-h-24 text-center gap-4'>
          <h1 className='text-3xl font-bold'>"{language.data.about.sections.ponlponl123}"</h1>
          <span>- Ponlponl123</span>
        </div>
        <div className="dark-bar-pattern absolute bottom-0 left-0 !bg-zinc-900 translate-y-8 rotate-180 w-full" style={{top:'unset !important'}}></div>
      </motion.div>
      <motion.div className='relative w-full min-h-32 text-white font-bold z-50 px-4 py-6 my-18'
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.42, delay: 0.6 }}>
        <div className='w-full max-w-6xl mx-auto flex flex-col min-h-24 gap-4'>
          <h1 className='text-3xl font-bold'>{language.data.about.sections[3].title}</h1>
          <p className='text-lg text-gray-300/40 max-w-2xl max-sm:text-sm'>{language.data.about.sections[3].description}</p>
          <p className='text-lg text-gray-300/40 max-w-2xl max-sm:text-sm'>{language.data.about.sections[3].buymeacoffee}</p>
          <div className="flex gap-4">
            <Link href={'https://www.buymeacoffee.com/ponlponl123'} target='_blank'>
              <motion.button
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.99 }}
                className="px-4 py-2 text-base font-semibold text-white bg-orange-600 rounded-lg shadow-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
              >Buy me a coffee!</motion.button>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
