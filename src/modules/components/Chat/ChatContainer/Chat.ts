import Block from '../../../../common/components/Block';
import { ChatList, Chat } from '../index';
import compile from '../../../../common/utils/compile';

import { template } from './template';

import './style.css';

export default class ChatContainer extends Block {
  constructor() {
    super({
      chatList: new ChatList(),
      chatActive: new Chat()
    });
  }

  render() {
    const { chatList, chatActive } = this.props;
    return compile(template, {
      chatList,
      chatActive
    });
  }
}
