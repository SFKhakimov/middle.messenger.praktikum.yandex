import Block from '../../Block';
import MenuButtonIcon from '../../Icons/MenuButtonIcon';
import compile from '../../../utils/compile';
import { template } from './template';
import { Props } from './types';

export default class MenuButton extends Block<Props> {
  constructor(props: Omit<Props, 'buttonIcon'>) {
    super({
      ...props,
      buttonIcon: new MenuButtonIcon(),
    });
  }

  render() {
    const { buttonIcon } = this.props;
    return compile(template, {
      buttonIcon,
    });
  }
}
