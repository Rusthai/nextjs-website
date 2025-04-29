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
            >{language.data.agreement.game_rule.title}</motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.42 }}
              className="text-sm text-white/60 mt-4 max-w-2xl"
            >{language.data.agreement.game_rule.description}</motion.p>
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
            <img className="w-full h-full object-cover" src='/DevastationUnleashed_HeroImage_1920x1080.jpg' />
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
              เพื่อให้แน่ใจว่าผู้เล่นทุกคนจะได้รับประสบการณ์การเล่น Rusthai ที่สนุกสนานและเป็นธรรม โปรดอ่านและทำความเข้าใจกฎเหล่านี้อย่างละเอียด การไม่ปฏิบัติตามกฎอาจนำไปสู่บทลงโทษตั้งแต่การตักเตือนไปจนถึงการแบนถาวร
              <br/><br/>
              1. ขีดจำกัดจำนวนผู้เล่นในกลุ่ม (Group Limit)
              <br/>
              จำกัดจำนวนผู้เล่นสูงสุด 8 คนต่อกลุ่ม (Team/Group) เท่านั้น
              การรวมกลุ่มผู้เล่นเกินกว่า 8 คน ไม่ว่าจะเป็นการรวม Team ในเกม, การเป็นพันธมิตร (Associating) หรือการกระทำอื่นใดที่มีเจตนาเล่นร่วมกันเป็นกลุ่มเกินกว่าที่กำหนด จะถือเป็นการทำผิดกฎ
              บทลงโทษ: แบน 1 สัปดาห์ สำหรับผู้ที่ทำการรวมกลุ่มหรือเป็นพันธมิตรเกินกว่าที่กำหนด
              คำอธิบายเพิ่มเติม: การนับจำนวนผู้เล่นในกลุ่มจะพิจารณาจากหลายปัจจัย รวมถึงแต่ไม่จำกัดเพียงสมาชิกในทีม, การแชร์โค้ดล็อก, การอาศัยอยู่ในฐานเดียวกันหรือใกล้เคียงกัน, การออกปล้น (Raid) ร่วมกัน หรือการเดินทางและทำกิจกรรมอื่นๆ ร่วมกันเป็นกลุ่มใหญ่ การเปลี่ยนสมาชิกในกลุ่มบ่อยครั้งเพื่อหลีกเลี่ยงกฎจะถูกพิจารณาว่าเป็นการเอาเปรียบและอาจถูกลงโทษได้
              <br/><br/>
              2. การโกงและการใช้โปรแกรมช่วยเล่น (Cheating & Exploiting)
              <br/>
              ห้ามใช้โปรแกรมโกง (Cheats) หรือโปรแกรมช่วยเล่น (Hacks) ทุกชนิด รวมถึงการใช้ประโยชน์จากบัค (Exploits) ของเกมเพื่อเอาเปรียบผู้เล่นอื่นอย่างไม่เป็นธรรม
              บทลงโทษ: แบนถาวร (Permanent Ban) สำหรับผู้ที่ถูกตรวจพบว่าใช้โปรแกรมโกงหรือใช้ประโยชน์จากบัคอย่างร้ายแรง และการแบนนี้จะมีผลกับเซิร์ฟเวอร์ Rusthai และ KonThaiTum ทั้งหมด
              คำอธิบายเพิ่มเติม: เรามีระบบและมาตรการในการตรวจจับผู้เล่นที่ใช้โปรแกรมโกง การพยายามหลีกเลี่ยงการตรวจจับจะยิ่งทำให้บทลงโทษรุนแรงขึ้น การกล่าวหาผู้เล่นอื่นว่าโกงโดยไม่มีหลักฐานที่ชัดเจนในช่องทางสาธารณะอาจเข้าข่ายการก่อกวนและอาจได้รับบทลงโทษเช่นกัน หากคุณสงสัยว่ามีผู้เล่นคนใดโกง โปรดแจ้งทีมงานพร้อมหลักฐานให้มากที่สุด
              <br/><br/>
              3. กฎทั่วไปและข้อพึงปฏิบัติ
              <br/>
              เคารพผู้เล่นอื่น: ห้ามใช้ถ้อยคำหยาบคาย เหยียดหยาม คุกคาม หรือแสดงพฤติกรรมที่ไม่เหมาะสมต่อผู้เล่นอื่น ไม่ว่าจะเป็นในช่องทางข้อความเสียงหรือข้อความตัวอักษร
              ห้ามก่อกวน (Griefing): ห้ามกระทำการใดๆ ที่มีเจตนาก่อกวนหรือทำให้ผู้เล่นอื่นไม่สามารถเล่นเกมได้อย่างปกติสุข เช่น การสแปมสิ่งก่อสร้างในพื้นที่สำคัญ การปิดกั้นทางเข้าออกฐานโดยไม่มีเหตุผลอันสมควร หรือการทำลายทรัพย์สินของผู้เล่นอื่นซ้ำๆ นอกเหนือจากการปล้นตามปกติ
              ห้ามซื้อขายไอเท็มในเกมด้วยเงินจริง: การซื้อขายไอเท็มหรือบัญชีผู้เล่นด้วยเงินจริงไม่ได้รับอนุญาต
              ห้ามโฆษณา: ห้ามโฆษณาเซิร์ฟเวอร์ Rust อื่นๆ หรือเนื้อหาที่ไม่เกี่ยวข้องในช่องทางของเซิร์ฟเวอร์นี้
              การตัดสินใจของแอดมินถือเป็นที่สิ้นสุด: การตีความและบังคับใช้กฎอยู่ในดุลยพินิจของทีมงาน แอดมินมีสิทธิ์ในการตัดสินใจและลงโทษตามความเหมาะสมของสถานการณ์ต่างๆ ที่ไม่ได้ระบุไว้ในกฎอย่างชัดเจน
              <br/><br/>
              4. การรายงานปัญหาและการอุทธรณ์
              <br/>
              หากพบเห็นผู้เล่นที่ทำผิดกฎ โปรดรายงานทีมงานพร้อมหลักฐาน (วิดีโอ ภาพ screenshot หรือข้อมูลที่เกี่ยวข้อง) เพื่อให้ทีมงานทำการตรวจสอบ
              หากคุณไม่เห็นด้วยกับการตัดสินใจของทีมงาน หรือต้องการอุทธรณ์บทลงโทษ โปรดติดต่อทีมงานผ่านช่องทางที่กำหนดไว้
              <br/><br/>
              ทีมงานขอสงวนสิทธิ์ในการเปลี่ยนแปลงหรือแก้ไขกฎเหล่านี้ได้ตลอดเวลาโดยไม่ต้องแจ้งให้ทราบล่วงหน้า
              <br/><br/>
              โปรดติดตามประกาศและการอัปเดตกฎจากทีมงานอย่างสม่ำเสมอ
              <br/><br/>
              ขอให้ทุกท่านสนุกกับการเล่นใน Rusthai Server ของเรา!
            </p> :
            <p className='text-lg text-gray-300/60 max-w-2xl max-sm:text-sm whitespace-break-spaces'>
              To ensure that all players have an enjoyable and fair experience playing Rusthai, please read and understand these rules thoroughly. Failure to comply with the rules may result in penalties ranging from a warning to a permanent ban.
              <br/><br/>
              1. Group Limit
              <br/>
              The maximum number of players per group (Team/Group) is limited to 8.
              Forming a group of more than 8 players, whether by forming an in-game Team, Associating, or performing any other action with the intention of playing together as a group exceeding the limit, will be considered a violation of the rules.
              Penalty: 1-week ban for those who form or associate in a group exceeding the limit.
              Further Explanation: The counting of players in a group will consider multiple factors, including but not limited to team members, sharing code locks, living in the same or nearby bases, raiding together, or traveling and engaging in other activities together as a large group. Frequently changing group members to evade the rules will be considered exploiting and may result in penalties.
              <br/><br/>
              2. Cheating & Exploiting
              <br/>
              The use of any kind of cheats or hacks is prohibited, including exploiting game bugs to unfairly gain an advantage over other players.
              Penalty: Permanent Ban for those detected using cheats or severely exploiting bugs, and this ban will apply to all Rusthai and KonThaiTum servers.
              Further Explanation: We have systems and measures in place to detect players using cheats. Attempting to evade detection will result in a harsher penalty. Baselessly accusing other players of cheating in public channels may be considered harassment and could also result in penalties. If you suspect a player is cheating, please report them to the staff with as much evidence as possible.
              <br/><br/>
              3. General Rules and Conduct
              <br/>
              Respect Other Players: Do not use abusive, derogatory, threatening language, or display inappropriate behavior towards other players, whether in voice or text chat.
              No Griefing: Do not engage in any actions intended to grief or prevent other players from enjoying the game normally, such as spamming builds in important areas, blocking base entrances/exits without valid reason, or repeatedly destroying other players' property outside of normal raiding.
              No Real Money Trading (RMT): Buying or selling in-game items or player accounts for real money is not permitted.
              No Advertising: Do not advertise other Rust servers or unrelated content in the server's channels.
              Admin Decision is Final: The interpretation and enforcement of these rules are at the discretion of the staff. Admins have the right to make decisions and apply penalties as deemed appropriate for situations not explicitly covered in the rules.
              <br/><br/>
              4. Reporting Issues and Appeals
              <br/>
              If you witness a player violating the rules, please report it to the staff with evidence (video, screenshots, or relevant information) for investigation.
              If you disagree with a staff decision or wish to appeal a penalty, please contact the staff through the designated channels.
              <br/><br/>
              The staff reserves the right to change or modify these rules at any time without prior notice.
              <br/><br/>
              Please regularly follow announcements and rule updates from the staff.
              <br/><br/>
              We hope you all have fun playing on our Rusthai Server!
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
