import Block from '../../../../common/components/Block'
import { ChatHeaderContainer } from '../ChatHeader'
import { ChatMessageForm } from '../ChatMessageForm'
import { ChatActive } from '../ChatActive'

import compile from '../../../../common/utils/compile'
import { template } from './template'
import './styles.css'
import { Props } from './types'
import {Socket} from "../../../../common/services/socket";
import store from "../../../../common/services/store";
import chatController from "../../../../common/services/controllers/chat";

export default class Chat extends Block<Props> {
    constructor() {
        super({
            store,
            chatHeader: new ChatHeaderContainer(),
            dialog: new ChatActive(),
            form: new ChatMessageForm(),
        })
    }

    componentDidMount() {
    }

    componentDidUpdate() {
        const { user, activeChatId, token, socketStatus } = store.state
        if (!token && activeChatId) {
            chatController.getToken({ id: activeChatId })
        }

        if (user.id && activeChatId && token && !socketStatus) {
            const socket = new Socket({ userId: user.id, chatId: activeChatId, token })
            socket.use()
        }

    }

    render() {
        const { chatHeader, dialog, form } = this.props
        return compile(template, {
            chatHeader, dialog, form,
        })
    }
}
