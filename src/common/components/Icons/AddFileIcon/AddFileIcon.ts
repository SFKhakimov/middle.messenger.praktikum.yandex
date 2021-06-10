import Block from '../../Block';
import compile from '../../../utils/compile';
import { template } from './template';
import { Props } from './types';

export default class AddFileIcon extends Block<Props> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return compile(template, {});
    }
}
