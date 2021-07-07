import {SOCKET_URL} from "../../constants/api";
import {Props} from "./types";
import store from "../store";

export default class Socket {

    socket: WebSocket

    userId: string
    chatId: string
    token: string

    constructor({ userId, chatId, token }: Props) {
        this.userId = userId
        this.chatId = chatId
        this.token = token

        this.socket = new WebSocket(`${SOCKET_URL}/${this.userId}/${this.chatId}/${this.token}`)
    }

    use() {
        this.open()
        this.close()
        this.message()
        this.error()
    }

    open() {
        this.socket.addEventListener('open', () => {
            store.dispatch('setSocketStatus', 'Соединение установлено' )
        })
    }

    close() {
        this.socket.addEventListener('close', () => {
            store.dispatch('setSocketStatus', 'Соединение закрыто')
        })
    }

    message() {
        this.socket.addEventListener('message', (event) => {
            store.dispatch('setSocketMessages', event.data )
        })
    }

    error() {
        this.socket.addEventListener('error', () => {
            store.dispatch('setSocketStatus', 'Произошла ошибка')
        })
    }

    send(data) {
        this.socket.send(JSON.stringify(data))
    }
}
