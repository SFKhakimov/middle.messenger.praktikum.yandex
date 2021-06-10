import Block from '../../../common/components/Block';
import { FormSignUp } from '../../components/Form';
import compile from '../../../common/utils/compile';

import { template } from './template';

import './style.css';
import {Props} from "./types";

export default class SignIn extends Block<Props> {
  constructor() {
    super({
      form: new FormSignUp(),
    }, 'div', '#app');
  }

  render() {
    const { form } = this.props;
    return compile(template, {
      form,
    });
  }
}
