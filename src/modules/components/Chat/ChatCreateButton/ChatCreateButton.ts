import Block from "../../../../common/components/Block";
import compile from "../../../../common/utils/compile";
import {template} from "./template";
import './style.css'
import {Props} from "./Props";

export default class ChatCreateButton extends Block<Props> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return compile(template, {})
    }
}
