import Block from '../../../../common/components/Block'
import Popper from '../../../../common/components/Popper'
import {AddFileButton} from "../../../../common/components/Buttons/AddFileButton"
import PopperButton from '../../../../common/components/Popper/PopperButton'
import renderComponent from "../../../../common/utils/renderComponent"
import {addPhotoIconTmpl} from "../../../../common/assets/icons/addPhotoIconTmpl"
import {addMessageFileIconTmpl} from "../../../../common/assets/icons/addMessageFileIconTmpl"
import {addFileLocationTmpl} from "../../../../common/assets/icons/addFileLocationTmpl"
import compile from '../../../../common/utils/compile'

import { template } from './template'
import './styles.css'
import { Props } from './types'

export default class ChatMessageForm extends Block<Props> {
    constructor() {
        super({
            addFileButton: new AddFileButton({
                events: {
                    click: (e) => this.onClick(e),
                },
            }),
            popper: new Popper({
                buttons: [
                    new PopperButton({
                        icon: renderComponent(addPhotoIconTmpl),
                        name: 'Фото или Видео',
                    }),
                    new PopperButton({
                        icon: renderComponent(addMessageFileIconTmpl),
                        name: 'Файл',
                    }),
                    new PopperButton({
                        icon: renderComponent(addFileLocationTmpl),
                        name: 'Локация',
                    }),
                ],
            }),
            events: {
                submit: (e) => this.submit(e),
            },
        })
    }

    onClick(e: Event) {
        const { popper } = this.props
        popper.addPopper(e)
    }

    submit(e: Event) {
        e.preventDefault()

        const formData = new FormData(e.target as HTMLFormElement)

        const form = {
            message: formData.get('message')
        }

        const { message} = form

        if (!message || (typeof message === 'string' && !message.trim().length)) return

        console.log(message)
    }

    render() {
        const { addFileButton, popper } = this.props
        return compile(template, {
            addFileButton, popper,
        })
    }
}
