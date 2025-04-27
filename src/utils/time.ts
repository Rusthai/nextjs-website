export function getTargetDates() {
    const now = new Date();
  
    let firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
    if (now > firstDay) {
      firstDay = new Date(now.getFullYear(), now.getMonth() + 1, 1);
    }
  
    const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
    const middleDay = Math.ceil(daysInMonth / 2);
    
    let middleDate = new Date(now.getFullYear(), now.getMonth(), middleDay);
    if (now > middleDate) {
      const nextMonthDays = new Date(now.getFullYear(), now.getMonth() + 2, 0).getDate();
      const nextMiddleDay = Math.ceil(nextMonthDays / 2);
      middleDate = new Date(now.getFullYear(), now.getMonth() + 1, nextMiddleDay);
    }
  
    return { firstDay, middleDate };
}

export function isDaytime(time: number): boolean {
    const normalizedTime = time % 24;
    return normalizedTime >= 6 && normalizedTime < 18;
}