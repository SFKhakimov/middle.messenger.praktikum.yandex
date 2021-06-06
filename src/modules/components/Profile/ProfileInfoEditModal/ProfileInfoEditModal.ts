import Block from "../../../../common/components/Block";
import compile from "../../../../common/utils/compile";

import {template} from "./template";
import './styles.css'

export default class ProfileInfoEditModal extends Block {
    constructor(props) {
        super(props);

    }

    render() {
        const { inputs, title } = this.props
        return compile(template, {
            inputs, title
        })
    }

}
