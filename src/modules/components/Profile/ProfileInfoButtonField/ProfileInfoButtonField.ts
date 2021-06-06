import Block from "../../../../common/components/Block";
import compile from "../../../../common/utils/compile";

import { template } from "./template";
import './styles.css'

export default class ProfileInfoButtonField extends Block {
    constructor(props) {
        super(props);

    }

    render() {
        const { button } = this.props
        return compile(template, {
            button
        })
    }

}
