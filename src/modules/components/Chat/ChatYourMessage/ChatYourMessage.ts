import Block from '../../../../common/components/Block';
import MessageSuccess from '../../../../common/components/Icons/MessageSuccess';
import compile from '../../../../common/utils/compile';
import { template } from './template';
import './styles.css';
import { Props } from './types';

export default class ChatYourMessage extends Block<Props> {
  constructor(props: Props) {
    super({
      ...props,
      successIcon: new MessageSuccess(),
    });
  }

  render() {
    const { successIcon, text, time } = this.props;
    return compile(template, {
      successIcon,
      text,
      time,
    });
  }
}
