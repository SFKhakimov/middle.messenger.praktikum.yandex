import { METHOD, Options, OptionsWithoutMethod } from './types'

export default class HTTPTransport {
    get(url: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> {
        return this.request(url, { ...options, method: METHOD.GET })
    }

    post(url: string, options: Options = { method: METHOD.POST }): Promise<XMLHttpRequest> {
        return this.request(url, options)
    }

    put(url: string, options: Options = { method: METHOD.PUT }): Promise<XMLHttpRequest> {
        return this.request(url, options)
    }

    patch(url: string, options: Options = { method: METHOD.PATCH }): Promise<XMLHttpRequest> {
        return this.request(url, options)
    }

    delete(url: string, options: Options = { method: METHOD.DELETE }): Promise<XMLHttpRequest> {
        return this.request(url, options)
    }

    request(url: string, options: Options = { method: METHOD.GET }): Promise<XMLHttpRequest> {
        const { method, data } = options

        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest()

            xhr.open(method, url)
            xhr.withCredentials = true

            xhr.onload = function () {
                resolve(xhr)
            }

            xhr.onabort = reject
            xhr.onerror = reject
            xhr.ontimeout = reject

            if (method === METHOD.GET || !data) {
                xhr.send()
            } else {
                xhr.send(data)
            }
        })
    }
}
