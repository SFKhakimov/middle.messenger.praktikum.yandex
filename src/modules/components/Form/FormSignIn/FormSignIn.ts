import Block from '../../../../common/components/Block';
import InputForm from '../../Inputs/InputForm';
import compile from '../../../../common/utils/compile';
import { template } from './template';

import './style.css';

export default class FormSignIn extends Block {
  constructor(props) {
    super({
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
      login: formData.get('login'),
      password: formData.get('password'),
    };

    if (!this.onValid(form)) return;
    console.log(form);
  }

  render() {
    const { login, password, formName } = this.props;
    const element = compile(template, {
      formName,
      login,
      password,
    });

    return element;
  }
}
