import Block from "../../Block";
import compile from "../../../utils/compile";

import { template } from './template'

export default class PopperButton extends Block {
    constructor(props) {
        super(props);

    }

    render() {
        const { icon, name } = this.props
        return compile(template, {
            name, icon
        })
    }

}
