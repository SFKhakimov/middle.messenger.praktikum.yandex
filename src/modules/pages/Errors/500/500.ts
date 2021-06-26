import Block from '../../../../common/components/Block'
import { Error } from '../../../components/Error'
import {Router} from "../../../../common/components/Router";
import {BaseButton} from "../../../../common/components/Buttons/BaseButton";
import {Path} from "../../../../common/constants/router";
import compile from '../../../../common/utils/compile'

import { template } from './template'
import './styles.css'
import { Props } from './types'

export default class Error500 extends Block<Props> {
    constructor() {
        super({
            content: new Error({
                title: '500',
                subtitle: 'Мы уже фиксим',
                navigateButton: new BaseButton({
                    title: 'Назад к чатам',
                    events: {
                        click: () => this.onClick()
                    }
                })
            }),
        }, 'div', '#app')
        this.route = new Router()
    }

    onClick() {
        this.route.go(Path.Chat)
    }

    render() {
        const { content } = this.props
        return compile(template, {
            content,
        })
    }
}
