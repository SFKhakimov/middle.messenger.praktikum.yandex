import Block from "../../../../common/components/Block";
import ProfileInfoFieldContainer from "../ProfileInfoFieldContainer";
import ProfileInfoField from "../ProfileInfoField";
import ProfileInfoEditButton from "../ProfileInfoEditButton";
import ProfileInfoButtonField from "../ProfileInfoButtonField";
import compile from "../../../../common/utils/compile";

import {template} from "./template";
import './styles.css'
import ProfileInfoLogoutButton from "../ProfileInfoLogoutButton";
import ProfileImage from "../ProfileImage";
import Modal from "../../../../common/components/Modal";
import ProfileImageEditModal from "../ProfileImageEditModal";

export default class ProfileInfo extends Block {
    constructor() {
        super({
            name: 'Иван',
            image: new ProfileImage({
                events: {
                    click: () => this.addImageEditModal()
                }
            }),
            infoFields: new ProfileInfoFieldContainer({
                fields: [
                    new ProfileInfoField({
                        label: 'Почта',
                        value: 'test@mail.ru'
                    }),
                    new ProfileInfoField({
                        label: 'Логин',
                        value: 'test'
                    }),
                    new ProfileInfoField({
                        label: 'Имя',
                        value: 'Иван'
                    }),
                    new ProfileInfoField({
                        label: 'Фамилия',
                        value: 'Иванов'
                    }),
                    new ProfileInfoField({
                        label: 'Имя в чате',
                        value: 'Ivan'
                    }),
                    new ProfileInfoField({
                        label: 'Телефон',
                        value: '+79999999999'
                    }),
                ]
            }),
            buttons: new ProfileInfoFieldContainer({
                fields: [
                    new ProfileInfoButtonField({
                        button: new ProfileInfoEditButton({
                            title: 'Изменить данные'
                        })
                    }),
                    new ProfileInfoButtonField({
                        button: new ProfileInfoEditButton({
                            title: 'Изменить пароль'
                        })
                    }),
                    new ProfileInfoButtonField({
                        button: new ProfileInfoLogoutButton({
                            title: 'Выйти'
                        })
                    })
                ]
            }),
            editProfileModal: new Modal({
                content: new ProfileImageEditModal({})
            })
        });
    }

    addImageEditModal() {
        const { editProfileModal } = this.props
        editProfileModal.show('flex')
    }

    render() {
        const { infoFields, buttons, image, name, editProfileModal } = this.props
        return compile(template, {
            infoFields,
            buttons,
            image,
            name,
            editProfileModal
        })
    }
}
