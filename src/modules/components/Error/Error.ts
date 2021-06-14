import Block from '../../../common/components/Block'
import compile from '../../../common/utils/compile'

import { template } from './template'
import './styls.css'
import { Props } from './types'

export default class Error extends Block<Props> {
    constructor(props: Props) {
        super(props)
    }

    render() {
        const {
            title, subtitle, navigateText, navigatePath,
        } = this.props
        return compile(template, {
            title, subtitle, navigateText, navigatePath,
        })
    }
}
