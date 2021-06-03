import Block from "../../../../common/components/Block";
import {ChatList} from "../index";
import compile from "../../../../common/utils/compile";
import {template} from "./template";

import './style.css'

export default class ChatContainer extends Block {
    constructor() {
        super({
            chatList: new ChatList()
        });
    }

    render() {
        const { chatList } = this.props
        return compile(template, {
            chatList
        })
    }
}
