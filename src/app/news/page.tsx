"use client"
import { useLanguage } from '@/context/language';
import { News } from '@/utils/makeMd';
import { motion } from 'motion/react';
import Link from "next/link";
import React from 'react';
import { HashLoader } from 'react-spinners';
import { NewsResponse } from '../api/news/route';

export interface LatestNews {
  latest: NewsResponse;
  news: NewsResponse[];
}

export default function Home() {
  const { language } = useLanguage();
  const [ latestNews, setLatestNews] = React.useState<LatestNews | null>(null);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    const fetchLatestNews = async () => {
      try {
        const response = await fetch('/api/news');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
        const data = await response.json();
        setLatestNews(data);
      } catch (error) {
        console.error('Error fetching latest news:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchLatestNews();
  }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative h-max">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute top-0 left-0 overflow-hidden w-full h-[42rem] z-10"
      >
        <div className="absolute w-full h-full bg-gradient-to-t from-zinc-900 to-transparent left-0 bottom-0 z-10 flex flex-col gap-6 justify-center items-center">
          {
            (!loading && latestNews && latestNews.latest) ? <>
              <motion.h1
                initial={{ opacity: 0, y: -32 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -32 }}
                transition={{ duration: 0.42 }}
                className="text-sm text-white py-1 px-3 bg-black/40 tracking-wider flex justify-center items-center gap-3 rounded-full"
              ><span className="material-symbols-rounded !text-base opacity-60">schedule</span> {new Date(latestNews?.latest.content.createdAt).toLocaleDateString(language.code, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</motion.h1>
              <Link href={'/news/'+latestNews.latest.id}>
                <motion.h1
                  initial={{ opacity: 0, y: -32 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -32 }}
                  transition={{ duration: 0.42, delay: 0.16 }}
                  className="text-7xl my-6 font-bold text-white max-sm:text-4xl uppercase text-center max-w-4xl"
                >{latestNews.latest.content.title}</motion.h1>
              </Link>
              <motion.p
                initial={{ opacity: 0, y: -32 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -32 }}
                transition={{ duration: 0.42, delay: 0.32 }}
                className="text-base text-white/60 text-center"
              >{latestNews.latest.content.description}</motion.p>
              <Link href={'/news/'+latestNews.latest.id}>
                <motion.button
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ duration: 0.64, delay: 0.48 }}
                  className="px-6 py-3 mt-2 text-xs font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >{language.data.news.actions.read_more}</motion.button>
              </Link>
            </>:<HashLoader color="#a0d3f1" size={32} />
          }
        </div>
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1.1 }}
          exit={{ scale: 0 }}
          style={{ transitionDuration: "0.64s" }}
          className="absolute top-0 left-0 overflow-hidden w-screen h-full hero-animate"
        >
          {
            !loading && latestNews?.latest.content.banner &&
            <motion.img
              initial={{ scale: 1.3, opacity: 0 }}
              animate={{scale: 1.1, opacity: 1 }}
              transition={{ duration: 0.24, delay: 0.24 }}
              className="w-full h-full object-cover" src={latestNews?.latest.content.banner} />
          }
        </motion.div>
        <div className="dark-bar-pattern absolute bottom-0 left-0 !bg-background translate-y-8 w-full !z-20" style={{top:'unset !important'}}></div>
      </motion.div>
      <div className='mt-[48rem]'></div>
      <div className='w-full flex justify-center items-center p-4'>
        <div className='w-full max-w-4xl mx-auto flex justify-start items-start gap-2 overflow-y-hidden overflow-x-auto' style={{scrollbarWidth:'thin'}}>
          <button className="min-w-max px-6 py-3 text-base font-semibold text-white bg-blue-800 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">{language.data.news.category.recent}</button>
          <button className="pointer-events-none opacity-40 min-w-max px-6 py-3 text-base font-semibold text-white bg-zinc-800 rounded-lg shadow-md hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-opacity-50">{language.data.news.category.tags.update}</button>
          <button className="pointer-events-none opacity-40 min-w-max px-6 py-3 text-base font-semibold text-white bg-zinc-800 rounded-lg shadow-md hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-opacity-50">{language.data.news.category.tags.community}</button>
          <button className="pointer-events-none opacity-40 min-w-max px-6 py-3 text-base font-semibold text-white bg-zinc-800 rounded-lg shadow-md hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-opacity-50">{language.data.news.category.tags.event}</button>
          <button className="pointer-events-none opacity-40 min-w-max px-6 py-3 text-base font-semibold text-white bg-zinc-800 rounded-lg shadow-md hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-opacity-50">{language.data.news.category.tags.general}</button>
        </div>
      </div>
      <motion.div className='relative w-full min-h-32 text-white font-bold z-50 px-4 pb-12 mb-18'
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.42, delay: 0.6 }}>
        <div className='w-full max-w-4xl mx-auto flex flex-wrap justify-start items-start min-h-24 text-center gap-8 max-md:gap-24'>
        {
          (!loading && latestNews && latestNews.news) ? latestNews.news.map((news, index) => (
            <Link key={index} href={'/news/'+news.id}>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.42, delay: index * 0.16 }}
                className="w-64 flex flex-col justify-start items-start min-h-24 text-start gap-4 max-md:w-full"
              >
                {
                  news.content.banner &&
                  <div className='rounded-xl overflow-hidden'><motion.img initial={{ scale: 1.3, opacity: 0 }} whileHover={{ scale: 1.2, opacity: 1 }} whileTap={{ scale: 1.1, opacity: 0.9 }} animate={{scale: 1.1, opacity: 0.8}} transition={{ duration: 0.24 }} src={news.content.banner} className='object-cover' /></div>
                }
                <h1 className="text-xs text-white py-1 px-3 bg-black/40 tracking-wider flex justify-center items-center gap-3 rounded-full"><span className="material-symbols-rounded !text-base opacity-60">schedule</span> {new Date(news.content.createdAt).toLocaleDateString(language.code, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</h1>
                <h1 className='text-2xl font-bold w-full'>{news.content.title}</h1>
                <p className='text-base text-white/60 w-full'>{news.content.description}</p>
              </motion.div>
            </Link>
          )) : <HashLoader color="#a0d3f1" size={32} />
        }
        </div>
      </motion.div>
      <motion.div className='relative w-full min-h-32 text-white bg-zinc-900 font-bold z-50 px-4 py-12 my-32'
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.42, delay: 0.6 }}>
        <div className="dark-bar-pattern absolute top-0 left-0 !bg-zinc-900 -translate-y-8 w-full !z-20"></div>
        <div className='w-full max-w-6xl mx-auto flex flex-col justify-center items-center min-h-24 text-center gap-4'>
          <h1 className='text-3xl font-bold'>{language.data.news.stayuptodate}</h1>
          <Link href={'/discord'} target='_blank'>
            <motion.button
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.64, delay: 0.48 }}
              className="px-6 py-3 mt-2 text-xs font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >{language.data.news.actions.join_discord}</motion.button>
          </Link>
        </div>
        <div className="dark-bar-pattern absolute bottom-0 left-0 !bg-zinc-900 translate-y-8 rotate-180 w-full !z-20" style={{top:'unset !important'}}></div>
      </motion.div>
    </div>
  );
}
