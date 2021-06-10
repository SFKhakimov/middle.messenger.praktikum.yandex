import Block from '../../../../common/components/Block';
import compile from '../../../../common/utils/compile';

import { template } from './template';
import './styles.css';
import { Props } from './types';

export default class ProfileInfoFieldContainer<T> extends Block<Props<T>> {
    constructor(props: Props<T>) {
        super({
            ...props,
        });
    }

    render() {
        const { fields } = this.props;
        return compile(template, {
            fields,
        });
    }
}
