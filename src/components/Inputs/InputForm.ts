import Block from "../../common/Block";
import compile from "../../utils/compile";
import validator from "../../utils/validator";

export default class InputForm extends Block{
    constructor(props) {
        super('div', {
            ...props,
            isValid: true,
            errorText: '',
            events: {
                focusout: (e) => this.onBlur(e),
            }
        });
    }

    onBlur(e) {
        const { name, value } = e.target
        const { isValid } = validator(name, value, '')

        if (!isValid) {
            this.setProps({
                ...this.props,
                isValid,
                errorText: 'Это поле заполнено некорректно',
            })
            console.log(this.props)
        }
    }

    render() {
        const { labelName, inputName, placeholder, type, errorText, isValid, } = this.props
        const element =  compile(`.input-field
                label.input-field__label(for=inputName) #{labelName}
                input.input-field__input(id=inputName name=inputName placeholder=placeholder type=type)
                p.input-field__error-text #{errorText}`, {
            labelName,
            inputName,
            placeholder,
            type,
            errorText,
            isValid,
        })

        return element

    }
}
