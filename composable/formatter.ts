export const useDateFormatter = (d: Date) => {
  const now = new Date() as any
  const inputDate = new Date(d) as any
  const diffInSeconds: number = Math.floor((now - inputDate) / 1000)
  const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' })

  if (diffInSeconds < 3600) {
    // less than an hour
    return rtf.format(-Math.floor(diffInSeconds / 60), 'minute')
  } else if (diffInSeconds < 86400) {
    // less than a day
    return rtf.format(-Math.floor(diffInSeconds / 3600), 'hour')
  } else if (diffInSeconds < 2592000) {
    // less than a month
    return rtf.format(-Math.floor(diffInSeconds / 86400), 'day')
  } else if (diffInSeconds < 31536000) {
    // less than a year
    return rtf.format(-Math.floor(diffInSeconds / 2592000), 'month')
  } else {
    return new Intl.DateTimeFormat('en').format(inputDate)
  }
}
