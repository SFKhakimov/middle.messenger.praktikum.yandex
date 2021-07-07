import Block from '../../../../common/components/Block'
import {Router} from "../../../../common/components/Router";
import Input from '../../../../common/components/Input'
import { Form } from '../../../../common/components/Form'
import compile from '../../../../common/utils/compile'
import {Path} from "../../../../common/constants/router";

import { template } from './template'
import { Props } from './types'
import {BaseButton} from "../../../../common/components/Buttons/BaseButton";
import {SignUpApi} from "../../../../common/services/api/sign-up";
import {Store} from "../../../../common/services/store";
import {SIGN_UP_FIELDS} from "./constants";

export default class FormSignUp extends Block<Props> {
    constructor() {
        super({
            formName: 'Регистрация',
            form: new Form({
                user: Store.props.user,
                formName: 'signup',
                title: 'Регистрация',
                buttonText: 'Зарегистрироваться',
                isRenderLink: true,
                buttonLink: new BaseButton({
                    title: 'Уже зарегистрированы?',
                    events: {
                        click: () => this.onClick()
                    }
                }),
                content: SIGN_UP_FIELDS.map(item => new Input(item))
            }),
            events: {
                submit: (e: Event) => this.onSubmit(e),
            },
        })
        this.route = new Router()
    }

    componentDidMount() {
        const { user }  = Store.props
        this.setProps({
            ...this.props,
            user
        })
        console.log(user)
    }

    componentDidUpdate() {
        const { user }  = Store.props
        console.log(user)
    }

    onSubmit(e: Event) {
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement)

        const form = {
            email: formData.get('email'),
            login: formData.get('login'),
            first_name: formData.get('first_name'),
            second_name: formData.get('second_name'),
            phone: formData.get('phone'),
            password: formData.get('password'),
            passwordAgain: formData.get('passwordAgain'),
        }

        // if (!this.props.form.onValid(form, { key: 'passwordAgain', value: form.password as string})) return
        // new SignUpApi().create(form)
        // this.route.go(Path.Chat)

        Store.setProps({ user: form})
        console.log(this.props)
    }

    onClick() {
        this.route.go(Path.SignIn)
    }

    render() {
        const {
            form,
        } = this.props
        console.log(form)

        return compile(template, {
            form,
        })
    }
}
