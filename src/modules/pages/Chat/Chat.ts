import Block from "../../../common/components/Block";
import compile from "../../../common/utils/compile";
import {ChatContainer} from "../../components/Chat";

import {template} from "./template";
import './style.css'


export default class Chat extends Block {
    constructor() {
        super({
            chatContainer: new ChatContainer()
        }, 'div', '#app');

    }

    render() {
        const { chatContainer } = this.props
        return compile(template, {
            chatContainer
        })
    }

}
