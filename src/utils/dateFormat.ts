export default function (date: string | Date, options?: Intl.DateTimeFormatOptions) {
  const dateFormatOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    day: 'numeric',
    month: 'short',
    timeZone: 'UTC',
    ...options,
  }

  if (!Date.parse(date as string)) return;
  return Intl.DateTimeFormat("en-GB", dateFormatOptions).format(new Date(date));
}