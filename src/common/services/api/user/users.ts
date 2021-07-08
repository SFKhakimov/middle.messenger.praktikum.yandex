import {HTTP} from "../http";
import {SearchUser} from "./types";

export default class UserApi {

    url: string

    constructor() {
        this.url = '/user'
    }



    getUsers(params: SearchUser) {
        return HTTP.post(`${this.url}/search`, { data: params }).then(res => res)
    }
}
