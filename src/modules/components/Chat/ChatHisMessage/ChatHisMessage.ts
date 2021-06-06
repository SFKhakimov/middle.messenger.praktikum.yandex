import Block from "../../../../common/components/Block";
import compile from "../../../../common/utils/compile";
import {template} from "./template";
import './styles.css'

export default class ChatHisMessage extends Block {
    constructor(props) {
        super({
            ...props,
        });

    }

    render() {
        const { text, time} = this.props
        return compile(template, {
            text,
            time
        })
    }

}
