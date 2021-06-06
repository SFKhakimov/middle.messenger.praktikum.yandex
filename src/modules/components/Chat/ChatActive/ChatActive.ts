import Block from "../../../../common/components/Block";
import ChatYourMessage from "../ChatYourMessage";
import ChatHisMessage from "../ChatHisMessage";
import compile from "../../../../common/utils/compile";

import { template } from './template'
import './styles.css'

export default class ChatActive extends Block {
    constructor(props) {
        super({
            ...props,
            messages: [
                new ChatYourMessage({
                    text: 'Привет как дела?',
                    time: '10:15'
                }),
                new ChatHisMessage({
                    text: 'Привет! Отлично. Твои как?',
                    time: '10:17'
                }),
                new ChatYourMessage({
                    text: 'Неплохо))',
                    time: '10:24'
                })
            ]
        });
    }

    render() {
        const { messages } = this.props
        return compile(template, {
            messages
        })
    }
}
