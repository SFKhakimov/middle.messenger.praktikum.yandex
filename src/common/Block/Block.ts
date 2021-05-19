import EventBus from "../EventBus";
import isEqual from "../../utils/mydash/isEqual";

export default abstract class Block {
    static EVENTS = {
        INIT: 'init',
        FLOW_CDM: 'flow:component-did-mount',
        FLOW_CDU: 'flow:component-did-update',
        FLOW_RENDER: 'flow:render'
    };

    private _element: HTMLElement | null
    _meta: Record<string, unknown>
    props: Record<string, unknown>
    eventBus: () => EventBus

    constructor(tagName = "div", props = {}) {
        const eventBus = new EventBus();

        this._meta = {
            tagName,
            props
        };

        this.props = this._makePropsProxy(props);

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
        this.componentDidMount(this.props);
    }

    componentDidMount(props?: Record<string, unknown>) {}

    private _componentDidUpdate(oldProps: Record<string, unknown>, newProps: Record<string, unknown>) {
        if (!isEqual(oldProps, newProps)) {
            this._removeEvents()
            this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
        }
    }

    componentDidUpdate(oldProps: Record<string, unknown>, newProps: Record<string, unknown>) {
        if (oldProps === undefined || newProps === undefined) return false
        return Object.keys(oldProps).some(key => {
            return oldProps[key] !== newProps[key]
        })
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
        if (this._element !== null && !!block) {
            if (block.nodeName) {
                this._element = block
            } else {
                this._element.innerHTML = block
            }
            this._addEvents()
            this.eventBus().emit(Block.EVENTS.FLOW_CDM);
        }
    }

    render(): HTMLElement { return }

    getContent() {
        return this.element as HTMLElement;
    }

    private _makePropsProxy(props: Record<string, unknown>) {
        const self = this;
        return new Proxy(props, {
            get(target, prop: string) {
                const value = target[prop];
                return typeof value === "function" ? value.bind(target) : value;
            },
            set(target, prop: string, value) {
                const oldTarget = {...target}
                target[prop] = value;
                self.eventBus().emit(Block.EVENTS.FLOW_CDU, oldTarget, target);
                return true;
            },
            deleteProperty(target, prop) {
                throw new Error("Нет доступа");
            }
        });
    }

    _createDocumentElement(tagName: string) {
        return document.createElement(tagName);
    }

    show() {
        this.getContent().style.display = "block";
    }

    hide() {
        this.getContent().style.display = "none";
    }

    private _addEvents() {
        const { events = {} } = this.props;
        Object.keys(events).forEach(eventName => {
            this._element?.addEventListener(eventName, events[eventName]);
        });
    }

    private _removeEvents() {
        const {events = {}} = this.props;

        Object.keys(events).forEach(eventName => {
            this._element?.removeEventListener(eventName, events[eventName]);
        });
    }
}
