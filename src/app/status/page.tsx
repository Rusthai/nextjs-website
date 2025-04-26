"use client"
import React from 'react';
import { motion } from 'motion/react';
import { HashLoader } from 'react-spinners';
import { useLanguage } from '@/context/language';

export default function Status() {
  const { language } = useLanguage();
  const [isLoading, setIsLoading] = React.useState(true);
  const [isError, setIsError] = React.useState(false);
  const [lastFetchTime, setLastFetchTime] = React.useState<Date | null>(null);
  const [data, setData] = React.useState<any | null>(null);
  const tags = [
    language.data.tags.auto_restart,
    language.data.tags.shared_bp,
    language.data.tags.vanilla
  ]

  const fetchStatus = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/status');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setIsError(false);
      setData(data);
    } catch (error) {
      setIsError(true);
    } finally {
      setLastFetchTime(new Date());
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    fetchStatus();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative h-max">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute top-0 left-0 overflow-hidden w-full h-[24rem]"
      >
        <div className="absolute w-full h-full bg-zinc-900 left-0 bottom-0 z-10 flex flex-col items-center justify-center p-6">
          <div className='flex flex-wrap gap-6 justify-between max-w-3xl w-full mt-8'>
            <div className='flex flex-col items-center gap-3'>
              <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.42 }}
                className="text-6xl font-bold text-white flex items-center gap-6 w-full"
              >
                {language.data.status.title}
                { isLoading ? <HashLoader color="#a0d3f1" size={32} /> : isError ? <span className="text-red-500">{language.data.status.state.down.key}</span> : <span className="bg-green-500 rounded-full p-3 mt-2"></span> }
              </motion.h1>
              <motion.span
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.42 }}
                className="text-lg font-bold text-white flex items-center gap-6 w-full"
              >{language.data.status.last_updated}: { lastFetchTime && lastFetchTime.toLocaleString() }</motion.span>
            </div>
            <div className='flex items-center gap-6'>
              <motion.button onClick={fetchStatus}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.99 }}
                className={
                  "mt-3 px-4 py-2 text-base font-semibold text-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-50 " +
                  (isLoading ? 'bg-zinc-600 hover:bg-zinc-700 focus:ring-zinc-500 pointer-events-none opacity-40' : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500')
                }
              >{isLoading?language.data.status.refreshing:language.data.status.actions.refresh}</motion.button>
            </div>
          </div>
        </div>
        <div className="dark-bar-pattern absolute bottom-0 left-0 !bg-background translate-y-8 w-full !z-20" style={{top:'unset !important'}}></div>
      </motion.div>
      <div className='mt-[24rem]'></div>
      <div className='w-full flex justify-center items-center'>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.42 }}
          className="my-4 gap-4 flex flex-wrap w-full max-w-3xl">
          {
            tags.map((tag, index) => {
              return (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.42, delay: (index+2) * 0.2 }}
                  className={"px-4 py-2 rounded-full tracking-wider text-xs " + (
                    tag === language.data.tags.shared_bp ? "bg-blue-800 text-white" :
                    tag === language.data.tags.vanilla ? "bg-yellow-100 text-black" :
                    "bg-stone-900 text-white"
                  )}
                >
                  {tag}
                </motion.span>
              );
            })
          }
        </motion.div>
      </div>
      {
        isError ?
        <motion.div className='relative w-full min-h-32 text-white font-bold z-50 px-4 py-12 my-18'
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.42, delay: 0.6 }}>
          <div className='w-full max-w-6xl mx-auto flex flex-col justify-center items-center min-h-24 text-center gap-4'>
            <h1 className='text-3xl font-bold'>{language.data.status.state.down.title}</h1>
            <p className='text-lg text-gray-300/40 max-w-2xl max-sm:text-sm'>{language.data.status.state.down.description}</p>
            <div className="flex gap-4">
              <motion.button onClick={fetchStatus}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.99 }}
                className={"px-4 py-2 text-base font-semibold text-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-50 " + 
                (isLoading ? 'bg-zinc-600 hover:bg-zinc-700 focus:ring-zinc-500 pointer-events-none opacity-40' : 'bg-orange-600 hover:bg-orange-700 focus:ring-orange-500')
                }
              >{language.data.status.actions.retry}</motion.button>
            </div>
          </div>
        </motion.div>
        :
        <motion.div className='relative w-full min-h-32 text-white font-bold z-50 px-4 py-12 my-18'
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.42, delay: 0.6 }}>
          <div className='w-full max-w-6xl mx-auto flex flex-col justify-center items-center min-h-24 text-center gap-4'>
            <h1 className='text-3xl font-bold'>{language.data.status.state.up.title}</h1>
            <p className='text-lg text-gray-300/40 max-w-2xl max-sm:text-sm'>{language.data.status.state.up.description}</p>
          </div>
        </motion.div>
      }
    </div>
  );
}
