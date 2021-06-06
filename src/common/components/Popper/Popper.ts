import Block from "../Block";
import AddUserIcon from "../Icons/AddUserIcon";
import DeleteUserIcon from "../Icons/DeleteUserIcon";
import compile from "../../utils/compile";

import { template } from './template'
import './style.css'


export default class Popper extends Block {
    width = 210
    constructor(props) {
        super({
            ...props,
            x: 35,
            y: 35,
            addUserIcon: new AddUserIcon(),
            deleteUserIcon: new DeleteUserIcon(),
            events: {
                click: (e) => this.removePopper(e)
            }
        });
    }

    addPopper(event) {
        const sourceElReact = event.target.getBoundingClientRect()
        const el = document.documentElement

        if (sourceElReact.x + this.width + this.props.x > el.clientWidth) {
            this.getContent().firstChild.style.right = `${this.props.x}px`
        } else {
            this.getContent().firstChild.style.left = `${sourceElReact.x}px`
        }

        if (sourceElReact.y + this.width + this.props.x > el.clientHeight) {
            this.getContent().firstChild.style.bottom = `${this.props.y}px`
        } else {
            this.getContent().firstChild.style.top = `${sourceElReact.y}px`
        }

        this.show()
    }

    removePopper(e) {
        if (e.target.classList.contains('popper')) {
            this.hide()
        }
    }

    render() {
        const { buttons } = this.props
        return compile(template, {
            buttons
        })
    }
}
