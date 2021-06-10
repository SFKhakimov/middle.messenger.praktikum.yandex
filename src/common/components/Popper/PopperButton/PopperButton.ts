import Block from '../../Block';
import compile from '../../../utils/compile';

import { template } from './template';
import { Props } from './types';

export default class PopperButton extends Block<Props> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        const { icon, name } = this.props;
        return compile(template, {
            name, icon,
        });
    }
}
