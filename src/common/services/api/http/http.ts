import { METHOD, Options, OptionsWithoutMethod } from './types'
import {BASE_URL} from "../../../constants/api";

class HTTP {
    get(url: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> {
        return this.request(url, { ...options, method: METHOD.GET })
    }

    post(url: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> {
        return this.request(url, { ...options,  method: METHOD.POST })
    }

    put(url: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> {
        return this.request(url, { ...options, method: METHOD.PUT })
    }

    patch(url: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> {
        return this.request(url, { ...options, method: METHOD.PATCH})
    }

    delete(url: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> {
        return this.request(url, { ...options, method: METHOD.DELETE})
    }

    request(url: string, options: Options = { method: METHOD.GET }): Promise<XMLHttpRequest> {
        const { method, data } = options

        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest()

            xhr.open(method, `${BASE_URL}${url}`)
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.withCredentials = true

            xhr.onload = function () {
                const { status, response } = xhr
                //TODO как добавим роутинг скорее всего тут буду перенаправлять на страницу 500
                if (status === 200 || status === 201) {
                    return resolve(JSON.parse(response))
                }
                return reject({status, ...JSON.parse(response)})
            }

            xhr.onabort = reject
            xhr.onerror = reject
            xhr.ontimeout = reject

            if (method === METHOD.GET || !data) {
                xhr.send()
            } else {
                xhr.send(JSON.stringify(data))
            }
        })
    }
}

export default new HTTP()
