import { formatDate, to12Hour } from './format.js'

console.log(formatDate(new Date('2025-10-03T19:30:00.000+00:00'), 'DD/MM/YYYY'))

export {
    formatDate,
    to12Hour
}
