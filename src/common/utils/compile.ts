import { render } from 'pug';
import Block from '../components/Block';

const compile = (tmpl: string, props: Record<string, unknown>): HTMLElement => {
  const newProps: Record<string, unknown> = {};

  for (const key in props) {
    if (props[key] instanceof Block) {
      newProps[key] = `<div data-id-${props[key].getId()}></div>`;
    } else if (Array.isArray(props[key])) {
      Object.values(props[key]).forEach((item, index) => {
        newProps[key] = [...(newProps[key] ? newProps[key] : []), `<div data-id-${props[key][index].getId()}>2</div>`].join('');
      });
    } else {
      newProps[key] = props[key];
    }
  }
  const template = render(tmpl, newProps);
  const element = document.createElement('div');
  element.insertAdjacentHTML('beforeend', template);

  for (const key in newProps) {
    if (props[key] instanceof Block) {
      const el = element.querySelector(`[data-id-${props[key].getId()}]`);
      if (el?.parentNode) {
        el.parentNode.replaceChild(props[key].getContent(), el);
      }
    } else if (Array.isArray(props[key])) {
      Object.values(props[key]).forEach((item, index) => {
        const el = element.querySelector(`[data-id-${props[key][index].getId()}]`);
        if (el?.parentNode) {
          el.parentNode.replaceChild(props[key][index].getContent(), el);
        }
      });
    }
  }

  return element.firstChild as HTMLElement;
};

export default compile;
