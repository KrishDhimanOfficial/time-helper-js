export const format = (date: Date, format: string) => {
    if (typeof date !== 'object') throw new Error('given date is not a date')
    if (typeof format !== 'string') throw new Error('format is not a string')

    const year: number = date.getFullYear()
    const month: number = date.getMonth() + 1;
    const day: number = date.getDate()
    const hour: number = date.getHours()
    const minute: number = date.getMinutes()
    const second: number = date.getSeconds()

    return format
        .replace('YYYY', year.toString())
        .replace('MM', month < 10 ? `0${month}` : month.toString())
        .replace('DD', day < 10 ? `0${day}` : day.toString())
        .replace('HH', hour.toString())
        .replace('mm', minute < 10 ? `0${minute}` : minute.toString())
        .replace('ss', second < 10 ? `0${second}` : second.toString())
}

export const to12Hour = (time: Date) => {
    if (typeof time !== 'object') throw new Error('time is not a date')

    const hours: number = time.getHours()
    const minutes: number = time.getMinutes()
    const hour: number = hours > 12 ? hours - 12 : hours
    const minute: number | string = minutes < 10 ? `0${minutes}` : minutes

    return `${hour}:${minute} ${hour > 12 ? 'PM' : 'AM'}`
}

export const to24Hour = (time: string) => {
    if (typeof time !== 'string') throw new Error('time is not a string')
    console.log(time.split(' ')[1]);
    const appm: string = time.split(' ')[1] as string
    const [hours, minutes] = time.split(':')
    const minute = parseInt(minutes)
    const hour = parseInt(hours)
}