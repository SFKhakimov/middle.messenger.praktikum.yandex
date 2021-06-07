import Block from '../../../../common/components/Block';
import {Form} from "../../../../common/components/Form";
import Input from '../../Input';
import compile from '../../../../common/utils/compile';
import { template } from './template';

import './style.css';

export default class FormSignIn extends Block {
  constructor(props) {
    super({
      ...props,
      form: new Form({
        formName: 'signin',
        title: 'Аторизация',
        buttonText: 'Войти',
        isRenderLink: true,
        href: '/signup.html',
        linkTitle: 'Нет аккаунта?',
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
        ]
      }),
      events: {
        submit: (e: HTMLFormElement) => this.onSubmit(e),
      },
    });
  }

  onSubmit(e: HTMLFormElement) {
    e.preventDefault();
    const formData = new FormData(e.target);

    const form = {
      login: formData.get('login'),
      password: formData.get('password'),
    };

    if (!this.props.form.onValid(form)) return;
    console.log(form);
  }

  render() {
    const { form } = this.props;
    const element = compile(template, {
      form
    });

    return element;
  }
}
