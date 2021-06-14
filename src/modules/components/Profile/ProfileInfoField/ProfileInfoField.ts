import Block from '../../../../common/components/Block'
import compile from '../../../../common/utils/compile'

import { template } from './template'
import './styles.css'
import { Props } from './types'

export default class ProfileInfoField extends Block<Props> {
    constructor(props: Props) {
        super({
            ...props,
        })
    }

    render() {
        const { label, value } = this.props
        return compile(template, {
            label, value,
        })
    }
}
