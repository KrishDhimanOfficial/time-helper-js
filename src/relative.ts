export const timeAgo = (date: string): string => {
    if (typeof date !== 'string') throw new Error('provided date must be a string!')

    const currentDate = new Date()
    const targetDate = new Date(new Date(date).toISOString())

    const diffMs = currentDate.getTime() - targetDate.getTime()
    if (diffMs < 0) return 'in the future'

    const seconds = Math.floor(diffMs / 1000)
    const minutes = Math.floor(seconds / 60)
    const hours = Math.floor(minutes / 60)
    const days = Math.floor(hours / 24)
    const weeks = Math.floor(days / 7)
    const months = Math.floor(days / 30)
    const years = Math.floor(days / 365)

    if (years > 0) return `${years} year${years > 1 ? 's' : ''} ago`
    if (months > 0) return `${months} month${months > 1 ? 's' : ''} ago`
    if (weeks > 0) return `${weeks} week${weeks > 1 ? 's' : ''} ago`
    if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`
    if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`
    if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`

    return 'just now'
}


export const timeFromNow = (date: string): string => {
    if (typeof date !== 'string') throw new Error('provided date must be a string!')

    const currentDate = new Date()
    const targetDate = new Date(new Date(date).toISOString())

    const diffMs = targetDate.getTime() - currentDate.getTime()
    if (diffMs < 0) return 'in the past'

    const seconds = Math.floor(diffMs / 1000)
    const minutes = Math.floor(seconds / 60)
    const hours = Math.floor(minutes / 60)
    const days = Math.floor(hours / 24)
    const weeks = Math.floor(days / 7)
    const months = Math.floor(days / 30)
    const years = Math.floor(days / 365)

    if (years > 0) return `in ${years} year${years > 1 ? 's' : ''}`
    if (months > 0) return `in ${months} month${months > 1 ? 's' : ''}`
    if (weeks > 0) return `in ${weeks} week${weeks > 1 ? 's' : ''}`
    if (days > 0) return `in ${days} day${days > 1 ? 's' : ''}`
    if (hours > 0) return `in ${hours} hour${hours > 1 ? 's' : ''}`
    if (minutes > 0) return `in ${minutes} minute${minutes > 1 ? 's' : ''}`

    return 'just now'
}

type TimeDiff = 'seconds' | 'minutes' | 'hours' | 'days' | 'weeks' | 'months' | 'years'

export const timeDiff = (d1: string, d2: string, diff: TimeDiff): string => {
    const isoDate1 = new Date(new Date(d1).toISOString())
    const isoDate2 = new Date(new Date(d2).toISOString())
    if (!(isoDate1 instanceof Date) || !(isoDate2 instanceof Date)) throw new Error('provided date must be a string!')

    const msDiff = Math.abs(isoDate2.getTime() - isoDate1.getTime()) // absolute difference in ms

    const seconds = msDiff / 1000
    const minutes = seconds / 60
    const hours = minutes / 60
    const days = hours / 24
    const weeks = days / 7
    const months = days / 30.44   // average month length
    const years = days / 365.25   // include leap years

    switch (diff) {
        case 'seconds': return seconds.toFixed(0)
        case 'minutes': return minutes.toFixed(0)
        case 'hours': return hours.toFixed(0)
        case 'days': return days.toFixed(0)
        case 'weeks': return weeks.toFixed(1)
        case 'months': return months.toFixed(1)
        case 'years': return years.toFixed(2)
        default: return '0'
    }
}