import {HTTP} from "../http";
import queryString from "../../../utils/mydash/queryString";
import {AddUserParams} from "./types";

export default class ChatApi {

    url: string

    constructor() {
        this.url = '/chats'
    }


    addUser(params: AddUserParams) {
        return HTTP.put(`${this.url}/users`, { data: params })
    }


    getChatUsers(params) {
        return HTTP.put(`${this.url}/users`, { data: params }).then(res => res)
    }


    createChat(params) {
        return HTTP.post(this.url, { data: params }).then(res => res)
    }


    getChats(params) {
        return HTTP.get(`/chats?${queryString(params)}`).then((res) => {
            return res.map(item => ({
                id: item.id,
                title: item.title,
                count: item.unread_count,
                name: item.last_message?.user?.first_name,
                time: item.last_message?.user?.time,
                content: item.last_message?.content
            }))
        })
    }


    createToken(params?: any) {
        return HTTP.post(`${this.url}/token/${params.id}`, {}).then(res => res)
    }
}
