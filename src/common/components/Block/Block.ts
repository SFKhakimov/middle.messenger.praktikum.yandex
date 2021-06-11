import { v4 as makeUUID } from 'uuid';
import EventBus from '../EventBus';
import isEqual from '../../utils/mydash/isEqual';
import { BlockProps } from './types';

export default abstract class Block<T extends BlockProps> {
  private static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  };

  private _element: HTMLElement | null;

  private _meta: Record<string, unknown>;

  props: T;

  eventBus: () => EventBus;

  private _id: string;

  constructor(props: T, tagName = 'div', selector: string | null = null) {
    const eventBus = new EventBus();

    this._meta = {
        tagName,
        props,
        selector,
    };
    this._id = makeUUID();

    this.props = this._makePropsProxy({ ...props, _id: this._id });

    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  private _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  private _createResources() {
    const { tagName } = this._meta;
    this._element = this._createDocumentElement(tagName as string);
  }

  init() {
    this._createResources();
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  private _componentDidMount() {
    this._addEvents();
    this.componentDidMount();
  }

  componentDidMount() {
    return
  }

  private _componentDidUpdate(oldProps: T, newProps: T) {
    // TODO разобраться с ререндером,
    // при изменении нескольких пропсов ререндер происходит несколько раз
    if (!isEqual(oldProps, newProps)) {
        this._removeEvents();
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  componentDidUpdate() {
    return
  }

  setProps = (nextProps: Record<string, unknown>) => {
    if (!nextProps) {
        return;
    }

    Object.assign(this.props, nextProps);
  };

  get element() {
    return this._element;
  }

  private _render() {
    const block = this.render();
    const { selector } = this._meta;

    if (selector) {
        const rootNode = document.querySelector(selector as string);
        if (rootNode) {
            rootNode.append(block);
            this.eventBus().emit(Block.EVENTS.FLOW_CDM);
        }
        return;
    }

    if (this._element?.firstChild && block.firstChild) {
        if (this._element.parentNode) {
            this._element.parentNode.replaceChild(block, this._element);
            this._element = block;
        }
    } else {
        this._element = block; // TODO проверить нужно ли условие
    }
    this._element?.setAttribute('data-id', this._id);

    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  render(): HTMLElement {
    return this._element as HTMLElement;
  }

  getContent() {
    return this.element as HTMLElement;
  }

  private _makePropsProxy(props: T) {
    const self = this;
    return new Proxy(props, {
        get(target, prop: string) {
            const value = target[prop];
            return typeof value === 'function' ? value.bind(target) : value;
        },
        set(target, prop: string, value: unknown) {
            const oldTarget = { ...target };
            // TODO разобраться с типизацией
            // @ts-ignore
            target[prop] = value;
            self.eventBus().emit(Block.EVENTS.FLOW_CDU, oldTarget, target);
            return true;
        },
        deleteProperty() {
            throw new Error('Нет доступа');
        },
    });
  }

  private _createDocumentElement(tagName: string) {
    return document.createElement(tagName);
  }

  show(style = 'block') {
    this.getContent().style.display = style;
  }

  hide() {
    this.getContent().style.display = 'none';
  }

  private _addEvents() {
    const { events = {} } = this.props;
    Object.keys(events).forEach((eventName:keyof GlobalEventHandlersEventMap) => {
        this._element?.addEventListener(eventName, events[eventName] as (e: Event) => void);
    });
  }

  private _removeEvents() {
    const { events = {} } = this.props;

    Object.keys(events).forEach((eventName: keyof GlobalEventHandlersEventMap) => {
        this._element?.removeEventListener(eventName, events[eventName] as (e: Event) => void);
    });
  }

  getId() {
    return this._id;
  }
}
