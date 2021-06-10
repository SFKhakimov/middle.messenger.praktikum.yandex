import Block from '../../../../common/components/Block';
import { ProfileInfo } from '../ProfileInfo';
import compile from '../../../../common/utils/compile';

import { template } from './template';
import './styles.css';
import { Props } from './types';

export default class ProfileContainer extends Block<Props> {
    constructor() {
        super({
            info: new ProfileInfo(),
        });
    }

    render() {
        const { info } = this.props;
        return compile(template, {
            info,
        });
    }
}
