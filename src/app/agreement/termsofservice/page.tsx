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
            >{language.data.agreement.terms_of_service}</motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.42 }}
              className="text-sm text-white/60 mt-4 max-w-2xl"
            >{language.data.agreement.our_policies.description}</motion.p>
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
            <img className="w-full h-full object-cover" src='/gesture-header.jpg' />
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
          การเข้าถึงและใช้งานเซิร์ฟเวอร์ Rust ของเรา ถือว่าท่านได้ยอมรับและตกลงที่จะปฏิบัติตามข้อกำหนดในการให้บริการนี้ รวมถึงกฎของเซิร์ฟเวอร์ทั้งหมดที่ได้ระบุไว้
          <br/><br/>
          ลักษณะของเซิร์ฟเวอร์: เซิร์ฟเวอร์นี้ดำเนินการในรูปแบบของเซิร์ฟเวอร์ชุมชนแบบโอเพนซอร์ส (open-source community server) โดยมีวัตถุประสงค์เพื่อให้ผู้เล่นได้เข้ามามีปฏิสัมพันธ์และเพลิดเพลินกับเกม Rust ร่วมกัน ทีมงานผู้ดูแลเซิร์ฟเวอร์ประกอบด้วยสมาชิกในชุมชนที่สละเวลาและทรัพยากรส่วนตัวในการดูแลและพัฒนา
          <br/><br/>
          การปฏิเสธความรับผิดชอบ: เนื่องจากลักษณะของเซิร์ฟเวอร์ที่เป็นโครงการชุมชนและไม่ได้ดำเนินการในเชิงพาณิชย์ เราขอปฏิเสธความรับผิดชอบในความเสียหาย การสูญเสีย หรือปัญหาต่างๆ ที่อาจเกิดขึ้นจากการใช้งานเซิร์ฟเวอร์ในทุกกรณี รวมถึงแต่ไม่จำกัดเพียง:
          <br/><br/>
          <ul className='list-disc pl-8 mb-6'>
            <li className='mb-4'>การสูญหายของไอเท็ม ทรัพยากร หรือความคืบหน้าในเกมไม่ว่าด้วยสาเหตุใดๆ (เช่น ข้อผิดพลาดของเซิร์ฟเวอร์, บัคในเกม, การกระทำของผู้เล่นอื่น)</li>
            <li className='mb-4'>การหยุดทำงาน (Downtime) หรือความไม่เสถียรของเซิร์ฟเวอร์</li>
            <li className='mb-4'>ปัญหาที่เกิดจากการปฏิสัมพันธ์ระหว่างผู้เล่น (Player Interaction)</li>
            <li className='mb-4'>ความเสียหายต่ออุปกรณ์หรือซอฟต์แวร์ของท่านอันเนื่องมาจากการเชื่อมต่อหรือเล่นบนเซิร์ฟเวอร์นี้</li>
            <li className='mb-4'>ท่านยอมรับความเสี่ยงทั้งหมดที่เกี่ยวข้องกับการเล่นบนเซิร์ฟเวอร์ชุมชนแบบโอเพนซอร์สนี้</li>
          </ul>
          การเปลี่ยนแปลงข้อกำหนด: เราขอสงวนสิทธิ์ในการเปลี่ยนแปลง แก้ไข หรือปรับปรุงข้อกำหนดในการให้บริการนี้ได้ตลอดเวลา การใช้งานเซิร์ฟเวอร์อย่างต่อเนื่องหลังจากมีการเปลี่ยนแปลงถือว่าท่านยอมรับข้อกำหนดที่ได้รับการแก้ไขแล้ว
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
