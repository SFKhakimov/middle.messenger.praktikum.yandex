import Block from "../../../../common/components/Block";
import MessageSuccess from "../../../../common/components/Icons/MessageSuccess";
import compile from "../../../../common/utils/compile";
import {template} from "./template";
import './styles.css'

export default class ChatYourMessage extends Block {
    constructor(props) {
        super({
            ...props,
            successIcon: new MessageSuccess()
        });

    }

    render() {
        const { successIcon, text, time} = this.props
        return compile(template, {
            successIcon,
            text,
            time
        })
    }

}
