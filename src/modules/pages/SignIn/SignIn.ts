import Block from '../../../common/components/Block';
import { FormSignIn } from '../../components/Form';
import compile from '../../../common/utils/compile';

import { template } from './template';

import './style.css';

export default class SignIn extends Block {
  constructor() {
    super({
      form: new FormSignIn({
        formName: 'Вход',
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
