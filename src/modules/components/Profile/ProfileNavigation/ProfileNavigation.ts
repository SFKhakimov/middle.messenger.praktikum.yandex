import Block from '../../../../common/components/Block'
import { BaseButton } from '../../../../common/components/Buttons/BaseButton'
import { Router } from '../../../../common/components/Router'
import compile from '../../../../common/utils/compile'

import { template } from './template'
import './styles.css'
import {Props} from "./types";

export default class ProfileNavigation extends Block<Props> {
    constructor() {
        super({
            button: new BaseButton({
                title: '&larr;',
                events: {
                    click: () => this.onClick()
                }
            })
        })
        this.router = new Router()
    }

    onClick() {
        this.router.back()
    }

    render() {
        return compile(template, this.props)
    }
}
