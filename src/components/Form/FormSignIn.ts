import Block from "../../common/Block";
import InputForm from "../Inputs/InputForm";
import compile from "../../utils/compile";
import { template } from "./template"

export default class FormSignIn extends Block{
    constructor(props) {
        super('div', {
            ...props,
            login: new InputForm({
                labelName: 'Логин',
                inputName: 'login',
                type: 'text',
            }),
            password: new InputForm({
                labelName: 'Пароль',
                inputName: 'password',
                type: 'password',
            }),
        });
    }

    render() {
        const { login, password, formName } = this.props
        const element = compile(template, {
            formName,
            login,
            password
        })

        return element
    }
}
