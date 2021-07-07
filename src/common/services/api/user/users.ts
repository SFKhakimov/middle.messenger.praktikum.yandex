import {HTTP} from "../http";

export default class UserApi {

    url: string

    constructor() {
        this.url = '/user'
    }



    getUser(params) {
        return HTTP.post(`${this.url}/search`, { data: params }).then(res => res)
    }
}
