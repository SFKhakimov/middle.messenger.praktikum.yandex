import Block from '../../Block'
import renderComponent from "../../../utils/renderComponent"
import compile from '../../../utils/compile'
import { template } from './template'
import {menuButtonIconTmpl} from "../../../assets/icons/menuButtonIconTmpl"
import { Props } from './types'

export default class MenuButton extends Block<Props> {
    constructor(props: Omit<Props, 'buttonIcon'>) {
        super({
            ...props,
            buttonIcon: renderComponent(menuButtonIconTmpl),
        })
    }

    render() {
        const { buttonIcon } = this.props
        return compile(template, {
            buttonIcon,
        })
    }
}
