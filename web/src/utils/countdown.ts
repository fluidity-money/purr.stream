export function getTimeUntilNextFriday() {
  const now = new Date();
  const currentDay = now.getUTCDay();
  const currentHour = now.getUTCHours();
  const currentMinute = now.getUTCMinutes();
  // const currentSecond = now.getUTCSeconds();

  // Calculate days until next Friday
  let daysUntilFriday = (5 - currentDay + 7) % 7;
  if (
    daysUntilFriday === 0 &&
    (currentHour > 7 || (currentHour === 7 && currentMinute >= 0))
  ) {
    // If today is Friday and it's already past 7 AM GMT+0, set countdown to next week
    daysUntilFriday = 7;
  }

  // Calculate the target time in UTC (Friday 7 AM GMT+0)
  const targetTime = new Date(
    Date.UTC(
      now.getUTCFullYear(),
      now.getUTCMonth(),
      now.getUTCDate() + daysUntilFriday,
      7,
      0,
      0,
    ),
  );

  const diff = targetTime.getTime() - now.getTime();

  return {
    days: String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, "0"),
    hours: String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
    minutes: String(Math.floor((diff / 1000 / 60) % 60)).padStart(2, "0"),
    seconds: String(Math.floor((diff / 1000) % 60)).padStart(2, "0"),
  };
}
