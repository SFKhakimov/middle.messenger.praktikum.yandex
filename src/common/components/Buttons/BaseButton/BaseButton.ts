import Block from "../../Block";
import {Props} from "./types";
import compile from "../../../utils/compile";
import {template} from "./template";

export default class BaseButton extends Block<Props> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        const { title } = this.props
        return compile(template, { title })
    }
}
