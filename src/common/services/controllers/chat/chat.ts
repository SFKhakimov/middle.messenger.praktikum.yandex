import chatApi from "../../api/chat";
import store from "../../store";

export default class ChatController {


    getToken(params) {
        chatApi.createToken(params).then(res => {
            store.dispatch('setToken', res.token)
        }).catch(err => console.log(err))
    }


    getChats(data) {
        chatApi.getChats(data).then(res => {
            store.dispatch('setChats', res)
        }).catch(err => console.log(err))
    }


    createChat(data) {
        chatApi.createChat(data).then(res => res)
    }
}
