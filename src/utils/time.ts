export function getTargetDates() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();

  // Get the first day of this month
  let firstDayOfMonth = new Date(year, month, 1);

  // Find the first Thursday
  let firstThursday = new Date(firstDayOfMonth);
  while (firstThursday.getDay() !== 4) {
    firstThursday.setDate(firstThursday.getDate() + 1);
  }

  // If it's already past this month's first Thursday, go to next month's first Thursday
  if (now > firstThursday) {
    const nextMonth = month + 1;
    firstDayOfMonth = new Date(year, nextMonth, 1);
    firstThursday = new Date(firstDayOfMonth);
    while (firstThursday.getDay() !== 4) {
      firstThursday.setDate(firstThursday.getDate() + 1);
    }
  }

  // Get the middle date of the target month (same as firstThursday's month)
  const middleMonth = firstThursday.getMonth();
  const daysInMonth = new Date(firstThursday.getFullYear(), middleMonth + 1, 0).getDate();
  const middleDay = Math.ceil(daysInMonth / 2);
  const middleDate = new Date(firstThursday.getFullYear(), middleMonth, middleDay);

  return { firstThursday, middleDate };
}