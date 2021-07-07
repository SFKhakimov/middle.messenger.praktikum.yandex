import Block from '../../../../../common/components/Block'
import compile from '../../../../../common/utils/compile'
import { template } from './template'
import './style.css'
import { Props } from './types'
import store from "../../../../../common/services/store";

export default class ChatListItem extends Block<Props> {
    constructor(props: Omit<Props, 'store'>) {
        super({
            ...props,
            store,
        })
    }

    componentDidMount() {
    }

    componentDidUpdate() {
    }

    render() {
        const {
            name, message, date, countMessage, chatId, store
        } = this.props
        const { activeChatId } = store.state
        return compile(template, {
            name,
            message,
            date,
            countMessage,
            chatId,
            active: activeChatId === String(chatId) ? 'chat-list-item_active' : ''
        })
    }
}
