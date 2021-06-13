import Block from "../../Block";
import renderComponent from "../../../utils/renderComponent";
import {addFileIconTmpl} from "../../../assets/icons/addFileIconTmpl";
import compile from "../../../utils/compile";

import {template} from "./template";
import {Props} from "./types";

export default class AddFileButton extends Block<Props> {
    constructor(props: Props) {
        super({
            ...props,
            icon: renderComponent(addFileIconTmpl)
        });
    }

    render() {
        const { icon } = this.props
        return compile(template, { icon })
    }
}
