import Block from '../../../../common/components/Block'
import {Router} from "../../../../common/components/Router";
import { Form } from '../../../../common/components/Form'
import Input from '../../../../common/components/Input'
import {Path} from "../../../../common/constants/router";
import compile from '../../../../common/utils/compile'

import { Props } from './types'
import { template } from './template'
import {BaseButton} from "../../../../common/components/Buttons/BaseButton";

export default class FormSignIn extends Block<Props> {
    constructor() {
        super({
            formName: 'Вход',
            form: new Form({
                formName: 'signin',
                title: 'Аторизация',
                buttonText: 'Войти',
                isRenderLink: true,
                buttonLink: new BaseButton({
                    title: 'Нет аккаунта?',
                    events: {
                        click: () => this.onClick()
                    }
                }),
                content: [
                    new Input({
                        labelName: 'Логин',
                        inputName: 'login',
                        type: 'text',
                    }),
                    new Input({
                        labelName: 'Пароль',
                        inputName: 'password',
                        type: 'password',
                    }),
                ],
            }),
            events: {
                submit: (e: Event) => this.onSubmit(e),
            },
        })
        this.route = new Router()
    }

    onSubmit(e: Event) {
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement)

        const form = {
            login: formData.get('login'),
            password: formData.get('password'),
        }
        if (!this.props.form.onValid(form)) return
        console.log(form)
        this.route.go(Path.Chat)
    }

    onClick() {
        this.route.go(Path.SignUp)
    }

    render() {
        const { form } = this.props
        const element = compile(template, {
            form,
        })

        return element
    }
}
