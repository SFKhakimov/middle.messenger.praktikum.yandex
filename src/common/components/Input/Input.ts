import Block from '../Block';
import compile from '../../utils/compile';
import { VALIDATOR } from '../../constants/validator';
import { template } from './template';

import './style.css';
import { Props } from './types';

export default class Input extends Block<Props> {
    constructor(props: Props) {
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

    onValid(name: string, value: FormDataEntryValue | null, againValue?: string): { isValid: boolean, errorText: string } | void {
        if (typeof value !== 'string') return;
        if (typeof againValue === 'string') {
            return VALIDATOR[`${name}`]?.(value, againValue);
        }
        return VALIDATOR[`${name}`]?.(value);
    }

    onUpdate(name: string, value: FormDataEntryValue | null, relatedValue?: string) {
        const { isValid = true, errorText = '' } = this.onValid(name, value, relatedValue) || {};

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
            labelName, inputName, placeholder, type = 'text', errorText, isValid, inputValue,
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
