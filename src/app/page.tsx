"use client"
import Image from "next/image";
import { motion } from 'motion/react';
import Link from "next/link";
import { useLanguage } from "@/context/language";

export default function Home() {
  const { language } = useLanguage();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-24 max-sm:p-12 relative h-max">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute top-0 left-0 overflow-hidden w-full min-h-screen h-full -z-10"
      ><motion.div
        initial={{ scale: 2.4 }}
        animate={{ scale: 1.1 }}
        exit={{ scale: 0 }}
        style={{ transitionDuration: "0.64s" }}
        className="absolute top-0 left-0 overflow-hidden w-screen h-full hero-animate"
      ><div className="absolute w-full h-full bg-gradient-to-tr from-black/100 to-transparent"></div><Image alt="Rust Server" className="!w-screen !h-full object-cover" width={1920} height={1080} src={'/4dab83fab1c1.jpg'} /></motion.div></motion.div>
      <div className="w-full max-w-6xl mx-auto text-start">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.42 }}
          className="mb-4 gap-4 flex flex-wrap">
          <span className="px-4 py-2 rounded-full bg-green-800 tracking-wider text-xs">{language.data.tags.f2p}</span>
          <span className="px-4 py-2 rounded-full bg-blue-800 text-white tracking-wider text-xs">{language.data.tags.shared_bp}</span>
          <span className="px-4 py-2 rounded-full bg-yellow-100 text-black tracking-wider text-xs">{language.data.tags.vanilla}</span>
        </motion.div>
        {
          language.data.home.hero_words.map((word, index) => {
            return (
              <motion.h1
                key={index}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.42, delay: (index+2) * 0.2 }}
                className="text-9xl font-bold text-white max-sm:text-6xl"
              >
                {word}
              </motion.h1>
            );
          })
        }
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.42, delay: language.data.home.hero_words.length * 0.2 }}
          className="mt-4 text-lg text-gray-300/40 max-w-xl max-sm:text-sm">{language.data.home.description}</motion.p>
        <motion.div className="flex gap-4 mt-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.42, delay: 0.6 }}
        >
          <Link href={'/play'}>
            <motion.button
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.99 }}
              className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >{language.data.home.play_rusthai}</motion.button>
          </Link>
          <Link href={'https://rust.facepunch.com/buy/'} target='_blank'>
            <motion.button
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.99 }}
              className="px-6 py-3 text-lg font-semibold text-white bg-red-800 rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
            >{language.data.home.buy_rust}</motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
