import Block from '../../../../common/components/Block';
import compile from '../../../../common/utils/compile';

import { template } from './template';
import './styles.css';
import { Props } from './types';

export default class ProfileInfoButtonField<T> extends Block<Props<any>> {
  constructor(props: Props<T>) {
    super(props);
  }

  render() {
    const { button } = this.props;
    return compile(template, {
      button,
    });
  }
}
