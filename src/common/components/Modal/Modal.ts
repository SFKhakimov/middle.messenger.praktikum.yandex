import Block from '../Block';
import compile from '../../utils/compile';

import { template } from './template';
import './styles.css';
import { Props } from './types';

export default class Modal<T> extends Block<Props<T>> {
  constructor(props: Props<T>) {
    super({
      ...props,
      events: {
        click: (e) => this.removeModal(e),
      },
    });
  }

  removeModal(e: Event) {
    if (!e.target) return;
    if ((e.target as HTMLElement).classList.contains('modal')) this.hide();
  }

  render() {
    const { content } = this.props;
    return compile(template, {
      content,
    });
  }
}
