import { render } from "pug";
import Block from "../../common/Block";
import compile from "../../utils/compile";

export default class FormInput extends Block{
    constructor(props) {
        super('div', {
            ...props,
        });
    }

    componentDidMount(oldProps) {
        this.setProps({
            ...oldProps,
            events: {
                focus: event => console.log(event),
                click: event => console.log('клик по инпуту')
            }
        })
    }

    render() {
        return render(`.input-field
                label.input-field__label(for=inputName) #{labelName}
                input.input-field__input(id=inputName name=inputName placeholder=placeholder type=type)
                p.input-field__error-text${!this.props.isValid ? '.input-field__error-text_active' : ''} #{errorText}`, {
            labelName: this.props.labelName,
            inputName: this.props.inputName,
            placeholder: this.props.placeholder,
            type: this.props.type,
            errorText: this.props.errorText,
            isValid: this.props.isValid
        })

    }
}
