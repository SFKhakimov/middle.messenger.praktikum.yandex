import Block from "../../../../common/components/Block";
import compile from "../../../../common/utils/compile";

import {template} from "./template";
import './styles.css'

export default class ProfileInfoFieldContainer extends Block {
    constructor(props) {
        super({
            ...props,
        });

    }

    render() {
        const { fields } = this.props
        return compile(template, {
            fields
        })
    }

}
