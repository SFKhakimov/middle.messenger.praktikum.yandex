import { render } from "pug";
import Block from "../components/Block";

const compile = (tmpl: string, props: Record<string, unknown>) => {
    let newProps: Record<string, unknown> = {}

    for(let key in props) {
        if (props[key] instanceof Block) {
            newProps[key] =`<div data-id-${props[key].getId()}></div>`
        } else {
            newProps[key] = props[key]
        }
    }
    const template = render(tmpl, newProps)
    const element = document.createElement('div')
    element.innerHTML = template

    for (let key in newProps) {
        if (props[key] instanceof Block) {
            const el = element.querySelector(`[data-id-${props[key].getId()}]`)
            if (el) {
                el.appendChild(props[key].getContent())
            }
        }
    }

    return element
}


export default compile
