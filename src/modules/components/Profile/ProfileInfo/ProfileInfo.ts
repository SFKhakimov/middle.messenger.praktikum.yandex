import Block from "../../../../common/components/Block";
import {ProfileInfoFieldContainer} from "../ProfileInfoFieldContainer";
import {ProfileInfoField} from "../ProfileInfoField";
import {ProfileInfoEditButton} from "../ProfileInfoEditButton";
import {ProfileInfoButtonField} from "../ProfileInfoButtonField";
import {ProfileInfoLogoutButton} from "../ProfileInfoLogoutButton";
import {ProfileImage} from "../ProfileImage";
import Modal from "../../../../common/components/Modal";
import {ProfileImageEditModal} from "../ProfileImageEditModal";
import {ProfileInfoEditModal} from "../ProfileInfoEditModal";
import Input from "../../../../common/components/Input";

import compile from "../../../../common/utils/compile";

import {template} from "./template";
import './styles.css'

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
                            title: 'Изменить данные',
                            events: {
                                click: () => this.addEditProfileModal()
                            }
                        })
                    }),
                    new ProfileInfoButtonField({
                        button: new ProfileInfoEditButton({
                            title: 'Изменить пароль',
                            events: {
                                click: () => this.addEditPasswordModal()
                            }
                        })
                    }),
                    new ProfileInfoButtonField({
                        button: new ProfileInfoLogoutButton({
                            title: 'Выйти'
                        })
                    })
                ]
            }),
            editProfileImageModal: new Modal({
                content: new ProfileImageEditModal({})
            }),
            editProfileModal: new Modal({
                content: new ProfileInfoEditModal({
                    title: 'Изменение данных',
                    inputs: [
                        new Input({
                            inputName: 'email',
                            labelName: 'Почтв',
                            type: 'text'
                        }),
                        new Input({
                            inputName: 'login',
                            labelName: 'Логин',
                            type: 'text'
                        }),
                        new Input({
                            inputName: 'firstName',
                            labelName: 'Имя',
                            type: 'text'
                        }),
                        new Input({
                            inputName: 'lastName',
                            labelName: 'Фамилия',
                            type: 'text'
                        }),
                        new Input({
                            inputName: 'login',
                            labelName: 'Имя в чате',
                            type: 'text'
                        }),
                        new Input({
                            inputName: 'phone',
                            labelName: 'Телефон',
                            type: 'text'
                        }),
                    ]
                })
            }),
            editPasswordModal: new Modal({
                content: new ProfileInfoEditModal({
                    title: 'Изменение пароля',
                    inputs: [
                        new Input({
                            inputName: 'oldPassword',
                            labelName: 'Старый пароль',
                            type: 'password'
                        }),
                        new Input({
                            inputName: 'newPassword',
                            labelName: 'Новый пароль',
                            type: 'password'
                        }),
                        new Input({
                            inputName: 'newPasswordAgain',
                            labelName: 'Пароль еще раз',
                            type: 'password'
                        }),
                    ]
                })
            })
        });
    }

    addImageEditModal() {
        const { editProfileImageModal } = this.props
        editProfileImageModal.show('flex')
    }

    addEditProfileModal() {
        const { editProfileModal } = this.props
        editProfileModal.show('flex')
    }

    addEditPasswordModal() {
        const { editPasswordModal } = this.props
        editPasswordModal.show('flex')
    }

    render() {
        const { infoFields, buttons, image, name, editProfileModal, editProfileImageModal, editPasswordModal } = this.props
        return compile(template, {
            infoFields,
            buttons,
            image,
            name,
            editProfileModal,
            editProfileImageModal,
            editPasswordModal
        })
    }
}
