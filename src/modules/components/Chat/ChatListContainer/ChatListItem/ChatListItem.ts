import Block from "../../../../../common/components/Block";
import compile from "../../../../../common/utils/compile";
import {template} from "./template";
import './style.css'

export default class ChatListItem extends Block {
    constructor(props) {
        super(props);
    }

    render() {
        const { name, message, date, countMessage } = this.props
        return compile(template, {
            name,
            message,
            date,
            countMessage
        })
    }

}
