export function debounce(f: any, delay?: number): any {
    let timeout;
    return function () {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            f.apply(this, arguments)
        }, delay || 400)
    }
}
