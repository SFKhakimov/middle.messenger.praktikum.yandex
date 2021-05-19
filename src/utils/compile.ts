import { render } from "pug";
import Block from "../common/Block";

const compile = (tmpl: string, props: Record<string, unknown>) => {
    let newProps: Record<string, unknown> = {}

    for(let key in props) {
        if (props[key] instanceof Block) {
            newProps[key] =`<div data-${key}></div>`
        } else {
            newProps[key] = props[key]
        }
    }
    const template = render(tmpl, newProps)
    const element = document.createElement('div')
    element.innerHTML = template

    for (let key in newProps) {
        const el = element.querySelector(`[data-${key}]`)
        if (el) {
            el.parentNode.replaceChild(props[key].getContent(), el)
        }
    }

    return element
}


export default compile
