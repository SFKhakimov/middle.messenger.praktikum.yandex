import Block from '../../../../common/components/Block'
import { Error } from '../../../components/Error'
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
                navigateText: 'Назад к чатам',
                navigatePath: 'index.html',
            }),
        }, 'div', '#app')
    }

    render() {
        const { content } = this.props
        return compile(template, {
            content,
        })
    }
}
