import Block from "../Block";
import compile from "../../utils/compile";

import {template} from "./template";
import './styles.css'

export default class Form extends Block {
    constructor(props) {
        super(props);

    }

    render() {
        const { formName, title, content, buttonText = 'Сохранить', isRenderLink = false, linkTitle } = this.props
        return compile(template, {
            formName, title, content, buttonText, isRenderLink, linkTitle
        })
    }

}
