import Block from '../../../../common/components/Block';
import InputForm from '../../Inputs/InputForm';
import compile from '../../../../common/utils/compile';
import { template } from './template';

import './style.css';

export default class FormSignUp extends Block {
  constructor(props) {
    super({
      ...props,
      email: new InputForm({
        labelName: 'E-mail',
        inputName: 'email',
        type: 'text',
      }),
      login: new InputForm({
        labelName: 'Логин',
        inputName: 'login',
        type: 'text',
      }),
      firstName: new InputForm({
        labelName: 'Имя',
        inputName: 'firstName',
        type: 'text',
      }),
      lastName: new InputForm({
        labelName: 'Фамилия',
        inputName: 'lastName',
        type: 'text',
      }),
      phone: new InputForm({
        labelName: 'Телефон',
        inputName: 'phone',
        type: 'text',
      }),
      password: new InputForm({
        labelName: 'Пароль',
        inputName: 'password',
        type: 'password',
      }),
      passwordAgain: new InputForm({
        labelName: 'Пароль еще раз',
        inputName: 'passwordAgain',
        type: 'password',
      }),
      events: {
        submit: (e: HTMLFormElement) => this.onSubmit(e),
      },
    });
  }

  onValid(form: FormData) {
    let isValidForm = true;
    Object.keys(form).forEach((key) => {
      this.props[key].onUpdate(key, form[key]);
      if (!this.props[key].props.isValid) {
        isValidForm = false;
      }
    });
    return isValidForm;
  }

  onSubmit(e: HTMLFormElement) {
    e.preventDefault();
    const formData = new FormData(e.target);

    const form = {
      email: formData.get('email'),
      login: formData.get('login'),
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      phone: formData.get('phone'),
      password: formData.get('password'),
      passwordAgain: formData.get('passwordAgain'),
    };

    if (!this.onValid(form)) return;
    console.log(form);
  }

  render() {
    const {
      login, password, formName, email, phone, firstName, lastName, passwordAgain,
    } = this.props;
    const element = compile(template, {
      formName,
      email,
      login,
      firstName,
      lastName,
      phone,
      password,
      passwordAgain,
    });

    return element;
  }
}
