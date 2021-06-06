import Block from "../../../../common/components/Block";
import compile from "../../../../common/utils/compile";

import {template} from "./template";
import './styles.css'

export default class ProfileInfoField extends Block {
    constructor(props) {
        super({
            ...props,
        });

    }

    render() {
        const { label, value } = this.props
        return compile(template, {
            label, value
        })
    }

}
