export function getFormattedDate(dateStr?: string) {
    if (!dateStr) return ''
    const date = new Date(dateStr)

    const day = date.getDate()
    const month = date.getMonth()
    const year = date.getFullYear()

    const hours = date.getHours()
    const minutes = date.getMinutes()

    return `${day}.${month}.${year} ${hours}:${minutes}`
}
