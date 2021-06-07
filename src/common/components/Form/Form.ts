import Block from "../Block";
import compile from "../../utils/compile";

import {template} from "./template";
import './styles.css'

export default class Form extends Block {
    constructor(props) {
        super(props);

    }

    onValid(formData: FormData) {
        let isValidForm = true;

        this.props.content.forEach(item => {

            item.onUpdate(item.props.inputName, formData[item.props.inputName]);
            if (!item.props.isValid) {
                isValidForm = false;
            }

        })
        return isValidForm;
    }

    render() {
        const { formName, title, content, buttonText = 'Сохранить', isRenderLink = false, linkTitle, href } = this.props
        return compile(template, {
            formName, title, content, buttonText, isRenderLink, linkTitle, href
        })
    }

}
