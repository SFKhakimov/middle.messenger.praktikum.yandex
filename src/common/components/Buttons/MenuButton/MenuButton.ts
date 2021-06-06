import Block from "../../Block";
import MenuButtonIcon from "../../Icons/MenuButtonIcon";
import compile from "../../../utils/compile";
import {template} from './template'

export default class MenuButton extends Block {
    constructor(props) {
        super({
            ...props,
            buttonIcon: new MenuButtonIcon({})
        });
    }

    render() {
        const { buttonIcon } = this.props
        return compile(template, {
            buttonIcon
        })
    }
}
