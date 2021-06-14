import Block from '../../../../../common/components/Block'
import compile from '../../../../../common/utils/compile'
import { template } from './template'
import './style.css'
import { Props } from './types'

export default class ChatListItem extends Block<Props> {
    constructor(props: Props) {
        super(props)
    }

    render() {
        const {
            name, message, date, countMessage,
        } = this.props
        return compile(template, {
            name,
            message,
            date,
            countMessage,
        })
    }
}
