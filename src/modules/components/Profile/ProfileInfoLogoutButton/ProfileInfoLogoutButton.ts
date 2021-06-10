import Block from '../../../../common/components/Block';
import compile from '../../../../common/utils/compile';

import { template } from './template';
import './styles.css';
import { Props } from './types';

export default class ProfileInfoLogoutButton extends Block<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { title } = this.props;
    return compile(template, {
      title,
    });
  }
}
