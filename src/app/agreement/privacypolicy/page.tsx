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
            >{language.data.agreement.privacy_policy}</motion.h1>
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
          {
            language.code === "th" ?
            <div className='text-lg text-gray-300/60 max-w-2xl max-sm:text-sm whitespace-break-spaces'>
              นโยบายความเป็นส่วนตัวนี้อธิบายถึงข้อมูลที่เราอาจมีการจัดเก็บและวิธีที่เราใช้ข้อมูลดังกล่าว ในฐานะเซิร์ฟเวอร์ชุมชนแบบโอเพนซอร์ส เรามุ่งมั่นที่จะจัดการข้อมูลของท่านเท่าที่จำเป็นและเหมาะสม
              <br/><br/>
              ข้อมูลที่อาจมีการจัดเก็บ: ในการดำเนินงานเซิร์ฟเวอร์ อาจมีการจัดเก็บข้อมูลบางส่วนของท่าน ซึ่งโดยทั่วไปจะจำกัดอยู่เพียงข้อมูลที่จำเป็นสำหรับการเชื่อมต่อ การระบุตัวตนในเกม และการดูแลเซิร์ฟเวอร์ เช่น:
              <br/><br/>
              <ul className='list-disc pl-8 mb-6'>
                <li className='mb-4'>SteamID ของท่าน</li>
                <li className='mb-4'>ชื่อตัวละคร (In-game name) ของท่าน</li>
                <li className='mb-4'>ที่อยู่ IP (IP Address) ที่ใช้ในการเชื่อมต่อ (สำหรับการรักษาความปลอดภัยและการป้องกันการเข้าถึงที่ไม่ได้รับอนุญาต)</li>
                <li className='mb-4'>ข้อมูลบันทึกการเล่น (Server Logs) ที่เกี่ยวข้องกับกิจกรรมภายในเกมเพื่อวัตถุประสงค์ในการดูแลและแก้ไขปัญหา</li>
              </ul>
              การใช้ข้อมูล: ข้อมูลที่จัดเก็บจะถูกนำไปใช้เพื่อวัตถุประสงค์ดังต่อไปนี้เท่านั้น:
              <br/><br/>
              <ul className='list-disc pl-8 mb-6'>
                <li className='mb-4'>อนุญาตให้ท่านเชื่อมต่อและเล่นบนเซิร์ฟเวอร์ได้</li>
                <li className='mb-4'>ระบุตัวตนและจัดการบัญชีผู้เล่นของท่านภายในเซิร์ฟเวอร์</li>
                <li className='mb-4'>บังคับใช้กฎของเซิร์ฟเวอร์และทำการดูแล (Moderation)</li>
                <li className='mb-4'>แก้ไขปัญหาทางเทคนิคและปรับปรุงประสิทธิภาพของเซิร์ฟเวอร์</li>
                <li className='mb-4'>รักษาความปลอดภัยและป้องกันการโกงหรือการเข้าถึงที่ไม่ได้รับอนุญาต</li>
              </ul>
              การแบ่งปันข้อมูล: เราจะไม่เปิดเผย แบ่งปัน หรือขายข้อมูลส่วนบุคคลของท่านให้กับบุคคลที่สามใดๆ เว้นแต่จะถูกร้องขอโดยชอบด้วยกฎหมายจากหน่วยงานราชการ
              <br/><br/>
              การปฏิเสธความรับผิดชอบด้านความปลอดภัยของข้อมูล: แม้เราจะใช้ความพยายามตามสมควรในการปกป้องข้อมูลที่จัดเก็บ แต่เนื่องจากข้อจำกัดของทรัพยากรในฐานะเซิร์ฟเวอร์ชุมชนแบบโอเพนซอร์ส เราไม่สามารถรับประกันความปลอดภัยของข้อมูลได้อย่างสมบูรณ์ และขอปฏิเสธความรับผิดชอบต่อความเสียหายที่อาจเกิดขึ้นจากเหตุการณ์ข้อมูลรั่วไหล (Data Breach) หรือการเข้าถึงข้อมูลโดยไม่ได้รับอนุญาตที่อยู่นอกเหนือการควบคุมโดยตรงของเรา การให้ข้อมูลของท่านถือว่าท่านยอมรับความเสี่ยงดังกล่าว
              <br/><br/>
              การยอมรับนโยบาย: การใช้งานเซิร์ฟเวอร์นี้ถือว่าท่านได้อ่านและยอมรับนโยบายความเป็นส่วนตัวนี้แล้ว
              <br/><br/>
              การเปลี่ยนแปลงนโยบาย: เราขอสงวนสิทธิ์ในการเปลี่ยนแปลง แก้ไข หรือปรับปรุงนโยบายความเป็นส่วนตัวนี้ได้ตลอดเวลา การใช้งานเซิร์ฟเวอร์อย่างต่อเนื่องหลังจากมีการเปลี่ยนแปลงถือว่าท่านยอมรับนโยบายที่ได้รับการแก้ไขแล้ว
            </div> :
            <div className='text-lg text-gray-300/60 max-w-2xl max-sm:text-sm whitespace-break-spaces'>
              This privacy policy explains the data we may collect and how we use it. As an open-source community server, we are committed to handling your data only as necessary and appropriate.
              <br/><br/>
              Data That May Be Collected: In operating the server, certain data about you may be collected. This is generally limited to information necessary for connection, in-game identification, and server administration, such as:
              <br/><br/>
              <ul className='list-disc pl-8 mb-6'>
                <li className='mb-4'>Your SteamID</li>
                <li className='mb-4'>Your in-game name</li>
                <li className='mb-4'>The IP Address used to connect (for security and preventing unauthorized access)</li>
                <li className='mb-4'>Server Logs related to in-game activity for administration and troubleshooting purposes</li>
              </ul>
              Use of Data: Collected data will be used solely for the following purposes:
              <br/><br/>
              <ul className='list-disc pl-8 mb-6'>
                <li className='mb-4'>To allow you to connect and play on the server</li>
                <li className='mb-4'>To identify and manage your player account within the server</li>
                <li className='mb-4'>To enforce server rules and perform moderation</li>
                <li className='mb-4'>To troubleshoot technical issues and improve server performance</li>
                <li className='mb-4'>To maintain security and prevent cheating or unauthorized access</li>
              </ul>
              Data Sharing: We will not disclose, share, or sell your personal data to any third parties, unless legally required by a government authority.
              <br/><br/>
              Data Security Disclaimer: Although we make reasonable efforts to protect the data collected, due to resource limitations as an open-source community server, we cannot guarantee complete data security and disclaim responsibility for damages that may arise from data breaches or unauthorized data access beyond our direct control. By providing your information, you acknowledge these risks.
              <br/><br/>
              Policy Acceptance: Your use of this server signifies that you have read and accepted this privacy policy.
              <br/><br/>
              Changes to Policy: We reserve the right to change, modify, or update this privacy policy at any time. Your continued use of the server after changes signifies your acceptance of the revised policy.
            </div>
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
