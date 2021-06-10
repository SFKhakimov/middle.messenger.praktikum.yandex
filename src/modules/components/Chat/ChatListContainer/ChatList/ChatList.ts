import Block from '../../../../../common/components/Block';
import { ChatSearchBar } from '../../ChatSearchBar';
import { ChatListItem } from '../ChatListItem';

import compile from '../../../../../common/utils/compile';
import { template } from './template';
import './style.css';
import { Props } from './types';

export default class ChatList extends Block<Props> {
  constructor() {
    super({
      searchBar: new ChatSearchBar(),
      items: [
        new ChatListItem({
          name: 'Шакир',
          message: 'Йоу, как дела?',
          date: '19:17',
          countMessage: 1,
        }),
        new ChatListItem({
          name: 'Евгений',
          message: 'Сегодня тусим?',
          date: '20:04',
          countMessage: 3,
        }),
      ],
    });
  }

  render() {
    const { searchBar, items } = this.props;
    return compile(template, {
      searchBar,
      items,
    });
  }
}
