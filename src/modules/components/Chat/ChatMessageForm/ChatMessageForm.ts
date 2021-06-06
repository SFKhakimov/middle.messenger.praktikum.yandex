import Block from "../../../../common/components/Block";
import AddFileIcon from "../../../../common/components/Icons/AddFileIcon";
import Popper from "../../../../common/components/Popper";
import PopperButton from "../../../../common/components/Popper/PopperButton";
import AddPhotoIcon from "../../../../common/components/Icons/AddPhotoIcon";
import AddLocation from "../../../../common/components/Icons/AddLocation";
import AddMessageFileIcon from "../../../../common/components/Icons/AddMessageFileIcon";
import compile from "../../../../common/utils/compile";

import {template} from "./template";
import './styles.css'

export default class ChatMessageForm extends Block {
    constructor(props) {
        super({
            ...props,
            icon: new AddFileIcon({
                events: {
                    click: (e) => this.onClick(e)
                }
            }),
            popper: new Popper({
                buttons: [
                    new PopperButton({
                        icon: new AddPhotoIcon({}),
                        name: 'Фото или Видео'
                    }),
                    new PopperButton({
                        icon: new AddMessageFileIcon(),
                        name: 'Файл'
                    }),
                    new PopperButton({
                        icon: new AddLocation(),
                        name: 'Локация'
                    })
                ]
            }),
            events: {
                submit: (e) => this.submit(e)
            }
        });
    }

    onClick(e) {
        const { popper } = this.props
        popper.addPopper(e)
    }

    submit(e) {
        e.preventDefault()

        console.log(e)
    }

    render() {
        const { icon, popper } = this.props
        return compile(template, {
            icon, popper
        })
    }

}
