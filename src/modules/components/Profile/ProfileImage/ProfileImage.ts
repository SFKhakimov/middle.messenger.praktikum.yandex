import Block from '../../../../common/components/Block'
import compile from '../../../../common/utils/compile'

import { template } from './template'
import './syles.css'
import { Props } from './types'

export default class ProfileImage extends Block<Props> {
    constructor(props: Props) {
        super(props)
    }

    render() {
        return compile(template, {})
    }
}
