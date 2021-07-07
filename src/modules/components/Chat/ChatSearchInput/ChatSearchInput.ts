import Block from "../../../../common/components/Block";
import compile from "../../../../common/utils/compile";
import {Props} from "./types";
import {template} from "./template";
import './styles.css'

export default class ChatSearchInput extends Block<Props> {
    constructor(props: Props) {
        super({
            ...props,
            events: {
                input: (e) => this.onChange(e)
            }
        });
    }

    onChange(e) {
        this.props.onChange(e.target.value)
    }

    render() {
        return compile(template, this.props)
    }

}
