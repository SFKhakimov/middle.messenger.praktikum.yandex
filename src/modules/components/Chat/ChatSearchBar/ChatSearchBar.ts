import Block from '../../../../common/components/Block'
import {Router} from "../../../../common/components/Router";
import { BaseButton }  from "../../../../common/components/Buttons/BaseButton";
import compile from '../../../../common/utils/compile'
import { Path } from '../../../../common/constants/router'
import { template } from './template'

import './style.css'
import {Props} from "./types";

export default class ChatSearchBar extends Block<Props> {
    constructor() {
        super({
            button: new BaseButton({
                title: 'Профиль &gt;',
                events: {
                    click: () => this.onClick()
                }
            })
        })
        this.router = new Router()
    }

    onClick() {
        this.router.go(Path.Profile)
    }

    render() {
        return compile(template, this.props)
    }
}
