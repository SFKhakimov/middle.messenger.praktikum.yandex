import Block from '../../../common/components/Block';
import compile from '../../../common/utils/compile';
import { VALIDATOR } from '../../../common/constants/validator';
import { template } from './template';

import './style.css';

export default class Input extends Block {
  constructor(props: Record<string, unknown>) {
    super({
      ...props,
      errorText: '',
      isValid: true,
      inputValue: '',
      events: {
        focusout: (e: FocusEvent) => this.onBlur(e),
      },
    });
  }

  onValid(name: string, value: string) {
    return VALIDATOR[`${name}`]?.(value);
  }

  onUpdate(name: string, value: string) {
    const { isValid = true, errorText = '' } = this.onValid(name, value) || {};

    this.setProps({
      ...this.props,
      inputValue: value,
      isValid,
      errorText,
    });
  }

  onBlur(e: FocusEvent) {
    const { name, value } = (<HTMLInputElement>e.target);
    this.onUpdate(name, value);
  }

  render() {
    const {
      labelName, inputName, placeholder, type, errorText, isValid, inputValue,
    } = this.props;
    const element = compile(template, {
      labelName,
      inputName,
      placeholder,
      type,
      errorText,
      isValid,
      inputValue,
    });
    return element;
  }
}
