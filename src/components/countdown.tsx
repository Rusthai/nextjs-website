"use client"
import { useLanguage } from '@/context/language';
import { useCountdown } from '@/hooks/useCountdown';

type CountdownProps = {
  targetDate: Date;
  template: string; // e.g. language.data.status.info.wipe.timeleft
};

export default function Countdown({ targetDate, template }: CountdownProps) {
  const { language } = useLanguage();
  const timeLeft = useCountdown(targetDate);

  if (!timeLeft) {
    return <span>Expired</span>;
  }

  let timeString = '';
  if (timeLeft.days > 0) {
    timeString = `${timeLeft.days} ${language.data.utils.date.days}`;
  } else if (timeLeft.hours > 0) {
    timeString = `${timeLeft.hours} ${language.data.utils.time.hours}`;
  } else if (timeLeft.minutes > 0) {
    timeString = `${timeLeft.minutes} ${language.data.utils.time.minutes}`;
  } else {
    timeString = `${timeLeft.seconds} ${language.data.utils.time.seconds}`;
  }

  return <span>{template.replace('$timeleft', timeString)}</span>;
}
