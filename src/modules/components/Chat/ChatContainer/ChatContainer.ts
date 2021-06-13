import Block from '../../../../common/components/Block'
import { Chat } from '../Chat'
import { ChatList } from '../ChatListContainer/ChatList/inxex'
import compile from '../../../../common/utils/compile'

import { template } from './template'
import './style.css'
import { Props } from './types'

export default class ChatContainer extends Block<Props> {
    constructor() {
        super({
            chatList: new ChatList(),
            chatActive: new Chat(),
        })
    }

    render() {
        const { chatList, chatActive } = this.props
        return compile(template, {
            chatList,
            chatActive,
        })
    }
}
