/**
 * Format a Date object into a custom string format.
 * Supported tokens: YYYY, MM, DD, HH, mm, ss
 */
export declare const formatDate: (date: Date | string, formatStr: string) => string;
/**
 * Convert a Date or ISO string to 12-hour time format (HH:MM AM/PM)
 */
export declare const to12Hour: (isoTime: Date | string) => string;
/**
 * Convert a Date or ISO string to 24-hour time format (HH:MM AM/PM)
 */
export declare const to24Hour: (isoTime: Date | string) => string;
/**
 * get current date
 */
export declare const now: () => Date;
/**
 * get current time
 */
export declare const getTime: () => number;
/**
 * get date from  milliseconds
 */
export declare const msToDate: (milliseconds: number) => Date;
