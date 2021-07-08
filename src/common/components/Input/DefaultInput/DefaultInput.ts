import Block from "../../Block";
import compile from "../../../utils/compile";
import {template} from "./template";
import './style.css'
import {Props} from "./types";

export default class DefaultInput extends Block<Props> {
    constructor(props: Props) {
        super(props);
    }


    render() {
        const { type = 'text', name, value, placeholder} = this.props
        return compile(template, {
            name,
            value,
            type,
            placeholder,
        })
    }
}
