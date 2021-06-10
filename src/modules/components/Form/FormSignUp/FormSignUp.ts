import Block from '../../../../common/components/Block';
import Input from '../../../../common/components/Input';
import {Form} from "../../../../common/components/Form";
import compile from '../../../../common/utils/compile';
import { template } from './template';
import {Props} from "./types";


export default class FormSignUp extends Block<Props> {
  constructor() {
    super({
      formName: 'Регистрация',
      form: new Form({
        formName: 'signup',
        title: 'Регистрация',
        buttonText: 'Зарегистрироваться',
        isRenderLink: true,
        href: '/signin.html',
        linkTitle: 'Уже зарегистрированы?',
        content: [
          new Input({
            labelName: 'E-mail',
            inputName: 'email',
            type: 'text',
          }),
          new Input({
            labelName: 'Логин',
            inputName: 'login',
            type: 'text',
          }),
          new Input({
            labelName: 'Имя',
            inputName: 'firstName',
            type: 'text',
          }),
          new Input({
            labelName: 'Фамилия',
            inputName: 'lastName',
            type: 'text',
          }),
          new Input({
            labelName: 'Телефон',
            inputName: 'phone',
            type: 'text',
          }),
          new Input({
            labelName: 'Пароль',
            inputName: 'password',
            type: 'password',
          }),
          new Input({
            labelName: 'Пароль еще раз',
            inputName: 'passwordAgain',
            type: 'password',
          }),
        ]
      }),
      events: {
        submit: (e: Event) => this.onSubmit(e),
      },
    });
  }

  onSubmit(e: Event) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    const form = {
      email: formData.get('email'),
      login: formData.get('login'),
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      phone: formData.get('phone'),
      password: formData.get('password'),
      passwordAgain: formData.get('passwordAgain'),
    };

    if (!this.props.form.onValid(form)) return;
    console.log(form);
  }

  render() {
    const {
      form
    } = this.props;

    return compile(template, {
      form
    });
  }
}
