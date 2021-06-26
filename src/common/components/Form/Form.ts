import Block from '../Block'
import compile from '../../utils/compile'

import { template } from './template'
import './styles.css'
import { Props } from './types'

type RelatedData = {
    key: string,
    value: string
}

export default class Form extends Block<Props> {
    constructor(props: Props) {
        super(props)
    }

    onValid(formData: Record<string, FormDataEntryValue | null>, relatedData?: RelatedData) {
        let isValidForm = true
        let relatedValue = ''

        this.props.content.forEach((item) => {
            if (item.props.inputName === relatedData?.key) {
                relatedValue = relatedData.value
            }
            item.onUpdate(item.props.inputName, formData[item.props.inputName], relatedValue)
            if (!item.props.isValid) {
                isValidForm = false
            }
        })
        return isValidForm
    }

    render() {
        const {
            formName, title, content, buttonText = 'Сохранить', isRenderLink = false, buttonLink
        } = this.props
        return compile(template, {
            formName, title, content, buttonText, isRenderLink, buttonLink
        })
    }
}
