import Block from '../../../common/components/Block';
import { FormSignUp } from '../../components/Form';
import compile from '../../../common/utils/compile';

import { template } from './template';

import './style.css';

export default class SignIn extends Block {
  constructor() {
    super({
      form: new FormSignUp({
        formName: 'Регистрация',
      }),
    }, 'div', '#app');
  }

  render() {
    const { form } = this.props;
    return compile(template, {
      form,
    });
  }
}
