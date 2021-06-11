import Block from '../../../../common/components/Block';
import {Form} from "../../../../common/components/Form";
import compile from '../../../../common/utils/compile';

import { template } from './template';
import './styles.css';
import { Props } from './types';

export default class ProfileInfoEditModal extends Block<Props> {
    constructor(props: Props) {
        super({
            ...props,
            form: new Form({
                title: props.title,
                formName: props.formName,
                content: props.content,
                events: {
                    submit: (e) => this.onSubmit(e)
                }
            })
        });
    }

    onSubmit(e: Event) {
        this.props.events?.submit!(e)
    }

    render() {
        const { form } = this.props;
        return compile(template, {
            form,
        });
    }
}
