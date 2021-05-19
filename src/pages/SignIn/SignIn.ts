import { render } from 'pug'
import Block from "../../common/Block";
import { FormSignIn } from "../../components/Form";
import compile from "../../utils/compile";

export default class SignIn extends Block{
    constructor() {
        super('div', {
            form: new FormSignIn({
                formName: 'Вход',
            }),
        });
    }

    render() {
        const { form } = this.props
        return compile(`div !{form}`, {
            form
        })
    }

}
