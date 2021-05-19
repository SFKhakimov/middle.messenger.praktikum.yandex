import { render } from "pug";
import Block from "../../common/Block";
import FormInput from "../Inputs/FormInput";
import compile from "../../utils/compile";
import template from './index'

export default class FormSignIn extends Block{
    constructor() {
        super('div', {
            login: new FormInput({
                labelName: 'Логин',
                inputName: 'login',
                type: 'text',
                errorText: 'Это поле обязательно',
                isValid: true
            }),
            password: new FormInput({
                labelName: 'Пароль',
                inputName: 'password',
                type: 'password',
                errorText: 'Это поле обязательно',
                isValid: true
            }),
        });
    }

    render() {
        const { login, password } = this.props
        const element = compile(template, {
            formName: 'Вход',
            login: login,
            password: password
        })
        return element
    }
}
