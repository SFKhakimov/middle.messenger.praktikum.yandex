import Block from '../../../common/components/Block';
import {ChatContainer} from "../../components/Chat/ChatContainer";
import compile from '../../../common/utils/compile';

import { template } from './template';
import './style.css';

export default class ChatPage extends Block {
  constructor() {
    super({
      chatContainer: new ChatContainer({}),
    }, 'div', '#app');
  }

  render() {
    const { chatContainer } = this.props;
    return compile(template, {
      chatContainer,
    });
  }
}
