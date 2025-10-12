export const isLeapYear = (year: Date | string | number): boolean => {
    if (typeof year === 'number') {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
    }
    const isoDate = new Date(new Date(year).toISOString())
    const getyear = isoDate.getFullYear()
    return (getyear % 4 === 0 && getyear % 100 !== 0) || getyear % 400 === 0
}

export const daysInMonth = (year: number, month: number) => {
    if (typeof year !== 'number' || typeof month !== 'number') throw new Error('year and month must be a number')
    const date = new Date(year, month, 0)
    if (date.getDate() !== 0) return date.getDate()
}

export const isToday = (date: string | Date): boolean => {
    const d = new Date(new Date(date).toISOString())
    if (!(d instanceof Date)) throw new Error('provided date must be a Date')
    const now = new Date()

    return (
        d.getDate() === now.getDate() &&
        d.getMonth() === now.getMonth() &&
        d.getFullYear() === now.getFullYear()
    )
}