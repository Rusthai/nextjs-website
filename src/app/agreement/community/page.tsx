"use client"
import { useLanguage } from '@/context/language';
import { motion } from 'motion/react';
import Link from "next/link";

export default function Home() {
  const { language } = useLanguage();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative h-max overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute top-0 left-0 w-full h-[32rem] z-30"
      >
        <div className="absolute w-full h-full bg-gradient-to-t from-zinc-900 to-transparent left-0 bottom-0 z-10 flex justify-center items-end p-32 max-md:p-16">
          <div className='flex flex-col justify-end items-start text-start w-full max-w-3xl min-h-full'>
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.42 }}
              className="text-6xl font-bold text-white max-sm:text-4xl max-w-2xl"
            >{language.data.agreement.community.title}</motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.42 }}
              className="text-sm text-white/60 mt-4 max-w-2xl"
            >{language.data.agreement.community.description}</motion.p>
          </div>
        </div>
        <div className='max-w-full w-full h-full overflow-hidden absolute top-0 left-0'>
          <motion.div
            initial={{ scale: 1.2 }}
            animate={{ scale: 1.1 }}
            exit={{ scale: 0 }}
            style={{ transitionDuration: "0.64s" }}
            className="absolute top-0 left-0 overflow-hidden w-full h-full hero-animate"
          >
            <img className="w-full h-full object-cover" src='/rust_202409_ttk_heroimage.jpg' />
          </motion.div>
        </div>
        <div className="dark-bar-pattern absolute bottom-0 left-0 !bg-background translate-y-8 w-full !z-20" style={{top:'unset !important'}}></div>
        <div className="dark-bar-pattern absolute bottom-0 left-0 !bg-background translate-y-full w-full !z-30 rotate-180" style={{top:'unset !important'}}></div>
      </motion.div>
      <div className='mt-[32rem]'></div>
      <motion.div className='relative w-full min-h-96 text-white font-bold !pt-12 p-32 max-md:p-16'
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.42, delay: 0.6 }}>
        <div className='w-full max-w-3xl mx-auto flex flex-col min-h-24 gap-4'>
          <span>{language.data.agreement.last_updated.replace('$date', new Date("April 28, 2025").toLocaleDateString(language.code, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))}</span>
          {
            language.code === "th" ?
            <p className='text-lg text-gray-300/60 max-w-2xl max-sm:text-sm whitespace-break-spaces'>
              เป้าหมายหลักของเราคือการสร้างและรักษา ชุมชนผู้เล่น Rust ที่แข็งแกร่ง ดี และน่าอยู่สำหรับทุกคน
              <br/><br/>
              เราเชื่อว่าผู้เล่นทุกท่านคือส่วนสำคัญในการขับเคลื่อนชุมชนนี้ ทุกคนมีส่วนร่วมและความรับผิดชอบ ในการสร้างบรรยากาศที่เป็นมิตร ให้เกียรติซึ่งกันและกัน และส่งเสริมประสบการณ์การเล่นที่ดีสำหรับผู้เล่นคนอื่นๆ
              <br/><br/>
              การเคารพกฎ การสื่อสารอย่างสร้างสรรค์ และการมีน้ำใจนักกีฬา จะช่วยให้ชุมชนของเราเติบโตและเป็นพื้นที่ที่ทุกคนอยากใช้เวลาอยู่ด้วย
              <br/><br/>
              หากคุณพบเห็นพฤติกรรมใดๆ ที่ไม่เหมาะสม ไม่ว่าจะเป็นการทำผิดกฎ การกลั่นแกล้ง หรือการกระทำที่เป็นภัยต่อบรรยากาศที่ดีของชุมชน โปรดอย่าลังเลที่จะรายงานทีมงาน ข้อมูลและการแจ้งเตือนจากพวกคุณมีค่าอย่างยิ่งในการช่วยให้เราสามารถตรวจสอบ จัดการ และรักษาคุณภาพของชุมชนของเราไว้ได้
              <br/><br/>
              มาร่วมมือกันสร้างชุมชน Rust ที่ดีที่สุดด้วยกัน!
            </p> :
            <p className='text-lg text-gray-300/60 max-w-2xl max-sm:text-sm whitespace-break-spaces'>
              Our main goal is to build and maintain a strong, good, and welcoming Rust player community for everyone.
              <br/><br/>
              We believe that every player is an essential part of driving this community. Everyone has a role and responsibility in creating a friendly atmosphere, respecting one another, and promoting a good playing experience for other players.
              <br/><br/>
              Respecting the rules, communicating constructively, and having good sportsmanship will help our community grow and become a place everyone wants to spend time in.
              <br/><br/>
              If you witness any inappropriate behavior, whether it's breaking rules, bullying, or actions that are detrimental to the good atmosphere of the community, please do not hesitate to report it to the staff. Your information and alerts are invaluable in helping us investigate, manage, and maintain the quality of our community.
              <br/><br/>
              Let's work together to build the best Rust community!
            </p>
          }
        </div>
        <div className="dark-bar-pattern absolute bottom-0 left-0 !bg-background w-full !z-30 rotate-180" style={{top:'unset !important'}}></div>
      </motion.div>
      <motion.div className='relative w-full min-h-96 text-white font-bold px-4 py-6'
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.42, delay: 0.6 }}>
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1.1 }}
          exit={{ scale: 0 }}
          style={{ transitionDuration: "0.64s" }}
          className="absolute top-0 left-0 overflow-hidden w-screen h-full hero-animate -z-10"
        >
          <img className="w-full h-full object-cover" src='/rust_primupdate_teaser_armourset_01.jpg' />
          <div className='w-full h-full absolute top-0 left-0 bg-gradient-to-b from-transparent to-sky-900/40 z-10'></div>
          <div className='w-full h-full absolute top-0 left-0 bg-gradient-to-b from-transparent to-black/90 z-20'></div>
        </motion.div>
        <div className='w-full max-w-6xl mx-auto flex flex-col items-center text-center min-h-24 gap-4 p-24'>
          <h1 className='text-6xl font-bold uppercase'>{language.data.agreement.appeal.title}</h1>
          <p className='text-lg text-gray-300/60 max-w-2xl max-sm:text-sm'>{language.data.agreement.appeal.description}</p>
          <motion.div className="flex gap-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.42, delay: 0.6 }}
          >
            <Link href={'mailto:appeal@rust.ponlponl123.com'}>
              <motion.button
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.99 }}
                className="px-6 py-3 text-base font-semibold backdrop-blur-md text-blue-500 border-2 border-blue-500 bg-blue-500/10 rounded-2xl shadow-md hover:bg-blue-700/20 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >{language.data.agreement.contact_us}</motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
