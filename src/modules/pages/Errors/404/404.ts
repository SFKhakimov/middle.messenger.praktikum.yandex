import Block from "../../../../common/components/Block";
import {Error} from "../../../components/Error"
import compile from "../../../../common/utils/compile";

import {template} from "./template";
import './styles.css'
import {Props} from "./types";

export default class Error404 extends Block<Props> {
    constructor() {
        super({
            content: new Error({
                title: '404',
                subtitle: 'Такой страницы нет :(',
                navigateText: 'Назад к чатам',
                navigatePath: 'index.html'
            })
        }, 'div', '#app');

    }

    render() {
        const { content } = this.props
        return compile(template, {
            content
        })
    }

}
