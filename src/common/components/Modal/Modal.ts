import Block from "../Block";
import compile from "../../utils/compile";

import {template} from "./template";
import './styles.css'

export default class Modal extends Block {
    constructor(props) {
        super({
            ...props,
            events: {
                click: (e) => this.removeModal(e)
            }
        });
    }

    removeModal(e) {
        if (e.target.classList.contains('modal')) this.hide()
    }

    render() {
        const { content } = this.props
        return compile(template, {
            content
        })
    }
}
