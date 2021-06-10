import Block from "../../../../common/components/Block";
import {ChatHisMessage} from "../ChatHisMessage";
import {ChatYourMessage} from "../ChatYourMessage";
import compile from "../../../../common/utils/compile";

import { template } from './template'
import './styles.css'
import {Props} from "./types";

export default class ChatActive extends Block<Props> {
    constructor() {
        super({
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
