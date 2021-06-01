import Block from "../../../common/components/Block";
import InputForm from "../Inputs/InputForm";
import compile from "../../../common/utils/compile";
import { template } from "./template"

import './style.css'

export default class FormSignIn extends Block{
    constructor(props) {
        super( {
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
