import Block from "../../../common/components/Block";
import compile from "../../../common/utils/compile";
import { VALIDATOR } from "../../../common/constants/validator";
import { template } from "./template";

import './style.css'

export default class InputForm extends Block{
    constructor(props: Record<string, unknown>) {
        super( {
            ...props,
            isValid: true,
            errorText: '',
            inputValue: '',
            events: {
                focusout: (e: FocusEvent) => this.onBlur(e),
            }
        });
    }

    onBlur(e: FocusEvent) {
        const { name, value } = (<HTMLInputElement>e.target)

        const { isValid, errorText } = VALIDATOR[`${name}`](value)

        this.setProps({
            ...this.props,
            inputValue: value,
            isValid,
            errorText,
        })

    }

    render() {
        const { labelName, inputName, placeholder, type, errorText, isValid, inputValue } = this.props
        const element =  compile(template, {
            labelName,
            inputName,
            placeholder,
            type,
            errorText,
            isValid,
            inputValue
        })
        return element

    }
}
