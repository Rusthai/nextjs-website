export function getTargetDates() {
  const now = new Date();

  // Calculate the first Thursday of the current or next month
  let month = now.getMonth();
  let year = now.getFullYear();

  // If today is after the first Thursday of this month, use next month
  const firstOfMonth = new Date(year, month, 1);
  const firstThursday = new Date(firstOfMonth);
  const dayOfWeek = firstThursday.getDay(); // 0 = Sun, 1 = Mon, ..., 4 = Thu

  const diffToThursday = (4 - dayOfWeek + 7) % 7;
  firstThursday.setDate(firstThursday.getDate() + diffToThursday);

  if (now > firstThursday) {
    // Move to next month
    month += 1;
    if (month > 11) {
      month = 0;
      year += 1;
    }
    const nextMonthFirst = new Date(year, month, 1);
    const nextFirstThursday = new Date(nextMonthFirst);
    const dow = nextFirstThursday.getDay();
    const delta = (4 - dow + 7) % 7;
    nextFirstThursday.setDate(nextFirstThursday.getDate() + delta);
    firstThursday.setTime(nextFirstThursday.getTime());
  }
  
  const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
  const middleDay = Math.ceil(daysInMonth / 2);
  
  let middleDate = new Date(now.getFullYear(), now.getMonth(), middleDay);
  if (now > middleDate) {
    const nextMonthDays = new Date(now.getFullYear(), now.getMonth() + 2, 0).getDate();
    const nextMiddleDay = Math.ceil(nextMonthDays / 2);
    middleDate = new Date(now.getFullYear(), now.getMonth() + 1, nextMiddleDay);
  }

  return { firstThursday, middleDate };
}

export function isDaytime(time: number): boolean {
    const normalizedTime = time % 24;
    return normalizedTime >= 6 && normalizedTime < 18;
}