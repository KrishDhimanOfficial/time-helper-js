import { format, to12Hour, to24Hour } from './format.js'

console.log(format(new Date(), 'DD/MM/YYYY'));

console.log(to12Hour(new Date()))
// console.log(to24Hour('4:30 AM'))

export {
    format
}