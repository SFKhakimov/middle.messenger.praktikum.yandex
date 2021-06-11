import Block from '../../../../common/components/Block';
import AddFileIcon from '../../../../common/components/Icons/AddFileIcon';
import Popper from '../../../../common/components/Popper';
import PopperButton from '../../../../common/components/Popper/PopperButton';
import AddPhotoIcon from '../../../../common/components/Icons/AddPhotoIcon';
import AddLocation from '../../../../common/components/Icons/AddLocation';
import AddMessageFileIcon from '../../../../common/components/Icons/AddMessageFileIcon';
import compile from '../../../../common/utils/compile';

import { template } from './template';
import './styles.css';
import { Props } from './types';

export default class ChatMessageForm extends Block<Props> {
    constructor() {
        super({
            icon: new AddFileIcon({
                events: {
                    click: (e) => this.onClick(e),
                },
            }),
            popper: new Popper({
                buttons: [
                    new PopperButton({
                        icon: new AddPhotoIcon(),
                        name: 'Фото или Видео',
                    }),
                    new PopperButton({
                        icon: new AddMessageFileIcon(),
                        name: 'Файл',
                    }),
                    new PopperButton({
                        icon: new AddLocation(),
                        name: 'Локация',
                    }),
                ],
            }),
            events: {
                submit: (e) => this.submit(e),
            },
        });
    }

    onClick(e: Event) {
        const { popper } = this.props;
        popper.addPopper(e);
    }

    submit(e: Event) {
        e.preventDefault();

        const formData = new FormData(e.target as HTMLFormElement)

        const form = {
            message: formData.get('message')
        }

        const { message} = form

        if (!message || (typeof message === 'string' && !message.trim().length)) return

        console.log(message);
    }

    render() {
        const { icon, popper } = this.props;
        return compile(template, {
            icon, popper,
        });
    }
}
