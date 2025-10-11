/**
 * Format a Date object into a custom string format.
 * Supported tokens: YYYY, MM, DD, HH, mm, ss
 */

export const formatDate = (date: Date, formatStr: string): string => {
    if (!(date instanceof Date) || isNaN(date.getTime())) throw new Error('The provided value is not a valid Date.')

    if (typeof formatStr !== 'string') {
        throw new Error('Format must be a string.')
    }

    const year = date.getFullYear()
    const month = date.getMonth() + 1 // Months are 0-indexed
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    // Helper to pad numbers to 2 digits
    const pad = (num: number) => (num < 10 ? `0${num}` : num.toString())

    return formatStr
        .replace('YYYY', year.toString())
        .replace('MM', pad(month))
        .replace('DD', pad(day))
        .replace('HH', pad(hour))
        .replace('mm', pad(minute))
        .replace('ss', pad(second))
}

/**
 * Convert a Date or ISO string to 12-hour time format (HH:MM AM/PM)
 */
export const to12Hour = (isoTime: Date | string): string => {
    const date = new Date(isoTime)

    if (!(date instanceof Date) || isNaN(date.getTime())) throw new Error('Invalid Date provided.')

    // Decide between UTC (if ISO string) or local time (if Date object)
    const hours = typeof isoTime === 'string' ? date.getUTCHours() : date.getHours()
    const minutes = typeof isoTime === 'string' ? date.getUTCMinutes() : date.getMinutes()

    // Convert to 12-hour format
    const hour12 = hours % 12 === 0 ? 12 : hours % 12
    const minuteStr = minutes < 10 ? `0${minutes}` : `${minutes}`
    const period = hours >= 12 ? 'PM' : 'AM'

    return `${hour12}:${minuteStr} ${period}`
}
