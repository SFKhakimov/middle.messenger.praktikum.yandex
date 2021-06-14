import Block from '../../../../common/components/Block'
import compile from '../../../../common/utils/compile'
import renderComponent from "../../../../common/utils/renderComponent"
import {messageSuccessTmpl} from "../../../../common/assets/icons/messageSuccessTmpl"
import { template } from './template'
import './styles.css'
import { Props } from './types'

export default class ChatYourMessage extends Block<Props> {
    constructor(props: Props) {
        super({
            ...props,
            successIcon: renderComponent(messageSuccessTmpl),
        })
    }

    render() {
        const { successIcon, text, time } = this.props
        return compile(template, {
            successIcon,
            text,
            time,
        })
    }
}
