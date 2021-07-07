import Block from '../../../../common/components/Block'
import {Router} from "../../../../common/components/Router";
import { BaseButton }  from "../../../../common/components/Buttons/BaseButton";
import compile from '../../../../common/utils/compile'
import { Path } from '../../../../common/constants/router'
import { template } from './template'

import './style.css'
import {Props} from "./types";
import {ChatSearchInput} from "../ChatSearchInput";
import {debounce} from "../../../../common/utils/debounce";

export default class ChatSearchBar extends Block<Props> {

    router: Router

    constructor(props: Props) {
        super({
            ...props,
            button: new BaseButton({
                title: 'Профиль &gt;',
                events: {
                    click: () => this.onClick(),
                    change: (e) => this.onChange(e)
                },
            }),
            input: new ChatSearchInput({
                onChange: (value) => this.onChange(value)
            })
        })
        this.router = new Router()
    }

    onClick() {
        this.router.go(Path.Profile)
    }

    onChange(value) {
        const debounceChange = debounce(this.props.onSearch)
        debounceChange(value)
    }

    render() {
        return compile(template, this.props)
    }
}
