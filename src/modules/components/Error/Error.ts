import Block from "../../../common/components/Block";
import compile from "../../../common/utils/compile";

import {template} from "./template";
import './styls'

export default class Error extends Block {
    constructor(props) {
        super(props);
    }

    render() {
        const { title, subtitle, navigateText, navigatePath } = this.props
        return compile(template, {
            title, subtitle, navigateText, navigatePath
        })
    }
}
