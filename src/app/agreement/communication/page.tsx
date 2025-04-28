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
            >{language.data.agreement.communication.title}</motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.42 }}
              className="text-sm text-white/60 mt-4 max-w-2xl"
            >{language.data.agreement.communication.description}</motion.p>
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
            <img className="w-full h-full object-cover" src='/ss_1c2d0d1eefee54f0c67626c74eb21699bbb0ef52.1920x1080.jpg' />
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
          <div className='text-lg text-gray-300/60 max-w-2xl max-sm:text-sm whitespace-break-spaces'>
          การสื่อสารเป็นส่วนสำคัญของการเล่น Rust ในชุมชนของเรา เพื่อสร้างบรรยากาศที่ดีและน่าอยู่สำหรับทุกคน โปรดปฏิบัติตามแนวทางดังนี้:
          <br/><br/>
          <ul className='list-disc pl-8 mb-6'>
            <li className='mb-4'>
              <strong>ใช้คำพูดที่สุภาพและให้เกียรติ</strong>
              <p>ปฏิบัติต่อผู้เล่นทุกคนด้วยความเคารพ หลีกเลี่ยงการใช้คำหยาบคาย offensive language หรือการดูถูก เหยียดหยาม ไม่ว่าจะเป็นในช่องทางข้อความ (Chat) หรือการสื่อสารด้วยเสียง (Voice Chat)</p>
            </li>
            <li className='mb-4'>
              <strong>หลีกเลี่ยงการก่อกวนและการสร้างความขัดแย้ง</strong>
              <p>งดเว้นการกระทำหรือคำพูดที่มีเจตนาในการยั่วยุ ก่อกวน หรือสร้างความไม่พอใจให้กับผู้เล่นคนอื่นๆ โดยไม่จำเป็น การโต้เถียงที่ไม่สร้างสรรค์ การสแปมข้อความ หรือการใช้เสียงดังรบกวนผู้อื่นถือเป็นการกระทำที่ไม่เหมาะสม</p>
            </li>
            <li className='mb-4'>
              <strong>รักษาบรรยากาศที่เป็นมิตร</strong>
              <p>แม้ Rust จะเป็นเกมที่มีการแข่งขันสูง แต่เรายังคงส่งเสริมให้ผู้เล่นมีปฏิสัมพันธ์ที่ดีต่อกัน สามารถพูดคุย แลกเปลี่ยน หรือช่วยเหลือกันได้ตามสมควร</p>
            </li>
            <li className='mb-4'>
              <strong>การสื่อสารนอกเกม</strong>
              <p>กฎและแนวทางการสื่อสารนี้ครอบคลุมถึงช่องทางการสื่อสารนอกเกมที่เกี่ยวข้องกับชุมชนเซิร์ฟเวอร์ของเราด้วย (เช่น Discord หรือกลุ่มต่างๆ ที่จัดตั้งขึ้นสำหรับเซิร์ฟเวอร์นี้) โปรดรักษาบรรยากาศที่ดีและให้เกียรติซึ่งกันและกันเช่นเดียวกับการสื่อสารภายในเกม</p>
            </li>
            <li className='mb-4'>
              <strong>การรายงานปัญหาการสื่อสาร</strong>
              <p>หากคุณพบเจอการสื่อสารที่ไม่เหมาะสม การคุกคาม หรือการก่อกวน โปรดใช้ระบบการรายงานหรือติดต่อทีมงานพร้อมหลักฐาน</p>
            </li>
          </ul>
          การไม่ปฏิบัติตามนโยบายการสื่อสารนี้อาจนำไปสู่บทลงโทษ ตั้งแต่การตักเตือน การปิดเสียง (Mute) ชั่วคราว ไปจนถึงการแบนออกจากเซิร์ฟเวอร์ ขึ้นอยู่กับความรุนแรงและพฤติกรรมที่เกิดขึ้น
          <br/><br/>
          ทั้งนี้ เราขอสงวนสิทธิ์ในการรับผิดชอบต่อการพูดหรือการกระทำใดๆ ที่เกิดขึ้นการผู้เล่นกันเอง
          </div>
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
