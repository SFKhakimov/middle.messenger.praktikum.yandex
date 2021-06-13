import Block from '../Block';
import compile from '../../utils/compile';

import { template } from './template';
import './style.css';
import { Props } from './types';

export default class Popper extends Block<Props> {
    private width = 210;

    constructor(props: Props) {
        super({
            ...props,
            x: 35,
            y: 35,
            events: {
                click: (e) => this.removePopper(e),
            },
        });
    }

    addPopper(event: Event) {
        const sourceElReact = (event.target as HTMLElement).getBoundingClientRect();
        const firstChild = this.getContent().firstChild as HTMLElement;
        const el = document.documentElement;
        const x = this.props.x || 35;
        const y = this.props.y || 35;

        if (sourceElReact.x + this.width + x > el.clientWidth) {
            firstChild.style.right = `${x}px`
        } else {
            firstChild.style.left = `${sourceElReact.x}px`
        }

        if (sourceElReact.y + this.width + x > el.clientHeight) {
            firstChild.style.bottom = `${y}px`
        } else {
            firstChild.style.top = `${sourceElReact.y}px`
        }

        this.show();
    }

    removePopper(e: Event) {
        if (!(e.target as HTMLElement).classList.contains('popper')) return
        this.hide();

    }

    render() {
        const { buttons } = this.props;
        return compile(template, {
            buttons,
        });
    }
}
