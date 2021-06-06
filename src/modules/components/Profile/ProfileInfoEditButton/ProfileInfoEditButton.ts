import Block from "../../../../common/components/Block";
import compile from "../../../../common/utils/compile";

import {template} from "./template";
import './styles.css'

export default class ProfileInfoEditButton extends Block {
    constructor(props) {
        super(props);

    }

    render() {
        const { title } = this.props
        return compile(template, {
            title
        })
    }

}
