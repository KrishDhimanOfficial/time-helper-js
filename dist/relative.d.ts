export declare const timeAgo: (date: string) => string;
export declare const timeFromNow: (date: string) => string;
type TimeDiff = 'seconds' | 'minutes' | 'hours' | 'days' | 'weeks' | 'months' | 'years';
export declare const timeDiff: (d1: string, d2: string, diff: TimeDiff) => string;
export {};
