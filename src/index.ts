import { formatDate, to12Hour, to24Hour, now, getTime } from './format.js'
import { timeAgo, timeFromNow, timeDiff } from './relative.js'
import { } from './duration.js'
import { isLeapYear, daysInMonth, isToday } from './date.utiils.js'
import { log } from 'node:console';

console.log(formatDate('2025-10-12T19:30:00.000+00:00', 'DD/MM/YYYY'))
console.log(formatDate(new Date(), 'DD/MM/YYYY'))
console.log(to12Hour(new Date()))
console.log(to24Hour('2025-10-03T18:30:00.000+00:00'))
console.log(now());
console.log(getTime());
console.log(timeAgo('2025-10-11'));
console.log(timeAgo('2025-10-11T19:30:00.000+00:00'));
console.log(timeFromNow('2025-10-11T19:30:00.000+00:00'));
console.log(timeFromNow(formatDate('2025-12-25T19:30:00.000+00:00', 'YYYY-MM-DD')))
console.log(timeDiff('2025-10-11T19:30:00.000+00:00', '2025-11-11T19:30:00.000+00:00', 'days'))
console.log(timeDiff('2025-10-11', '2025-11-11', 'days'))
console.log(isLeapYear('2024-10-11'));
console.log(daysInMonth(2025, 2));
log(isToday(formatDate('2025-10-12T19:30:00.000+00:00', 'YYYY-MM-DD')))

export {
    formatDate,
    to12Hour,
    to24Hour,
    now,
    getTime,
    timeAgo,
    timeFromNow,
    timeDiff,
    isLeapYear,
    daysInMonth,
    isToday
}
