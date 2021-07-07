import {HTTP} from "../http";

export default class AuthApi {
    url: string

    constructor() {
        this.url = '/auth'
    }


    getUser() {
        return HTTP.get('/auth/user').then(res => res)
    }


    signIn(data) {
        return HTTP.post(`${this.url}/signup`, { data }).then(res => console.log(res))
    }


    signUp(data) {
        return HTTP.post(`${this.url}/signup`, { data }).then(res => res)
    }

    logout() {

    }
}
