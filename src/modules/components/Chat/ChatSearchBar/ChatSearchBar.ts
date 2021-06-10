import Block from '../../../../common/components/Block';
import compile from '../../../../common/utils/compile';
import { template } from './template';

import './style.css';

export default class ChatSearchBar extends Block<{}> {
  constructor() {
    super({});
  }

  render() {
    return compile(template, {

    });
  }
}
