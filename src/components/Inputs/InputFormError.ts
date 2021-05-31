import Block from "../../common/Block";
import compile from "../../utils/compile";

const tmpl = `p.input-field__error-text #{errorText}`


export default class InputFormError extends Block {
    constructor(props) {
        super('div', props);
    }

    componentDidMount(props?: Record<string, unknown>) {
        const { isValid } = props
        if (!isValid) {
            this.show()
        } else {
            this.hide()
        }
    }

    render () {
        const { isValid, errorText} = this.props
        const element = compile(tmpl, {
            isValid,
            errorText
        })

        return element
    }
}
