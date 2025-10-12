/**
 * Format a Date object into a custom string format.
 * Supported tokens: YYYY, MM, DD, HH, mm, ss
 */
export const formatDate = (date, formatStr) => {
    const isTypeofDate = typeof date === 'string';
    const isodate = new Date(date);
    if (!(isodate instanceof Date))
        throw new Error('The provided value is not a valid Date.');
    if (typeof formatStr !== 'string')
        throw new Error('Format must be a string.');
    const year = isodate.getFullYear();
    const month = isodate.getMonth() + 1; // Months are 0-indexed
    const day = isTypeofDate ? isodate.getUTCDate() : isodate.getDate();
    // Helper to pad numbers to 2 digits
    const pad = (num) => (num < 10 ? `0${num}` : num.toString());
    return formatStr
        .replace('YYYY', year.toString())
        .replace('MM', pad(month))
        .replace('DD', pad(day));
};
/**
 * Convert a Date or ISO string to 12-hour time format (HH:MM AM/PM)
 */
export const to12Hour = (isoTime) => {
    const date = new Date(isoTime);
    const isTypeofTime = typeof isoTime === 'string';
    if (!(date instanceof Date) || isNaN(date.getTime()))
        throw new Error('Invalid Date provided.');
    // Decide between UTC (if ISO string) or local time (if Date object)
    const hours = isTypeofTime ? date.getUTCHours() : date.getHours();
    const minutes = isTypeofTime ? date.getUTCMinutes() : date.getMinutes();
    // Convert to 12-hour format
    const hour12 = hours % 12 === 0 ? 12 : hours % 12;
    const minuteStr = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const period = hours >= 12 ? 'PM' : 'AM';
    return `${hour12}:${minuteStr} ${period}`;
};
/**
 * Convert a Date or ISO string to 24-hour time format (HH:MM AM/PM)
 */
export const to24Hour = (isoTime) => {
    const date = new Date(isoTime);
    const isTypeofTime = typeof isoTime === 'string';
    if (!(date instanceof Date) || isNaN(date.getTime()))
        throw new Error('Invalid Date provided.');
    // Decide between UTC (if ISO string) or local time (if Date object)
    const hours = isTypeofTime ? date.getUTCHours() : date.getHours();
    const minutes = isTypeofTime ? date.getUTCMinutes() : date.getMinutes();
    // Convert to 24-hour format
    const hour24 = hours < 10 ? parseInt(`0${hours}`) : parseInt(`${hours}`);
    const period = hours >= 12 ? 'PM' : 'AM';
    const minuteStr = minutes < 10 ? `0${minutes}` : `${minutes}`;
    return `${hour24}:${minuteStr} ${period}`;
};
/**
 * get current date
 */
export const now = () => new Date();
/**
 * get current time
 */
export const getTime = () => new Date().getTime();
//# sourceMappingURL=format.js.map