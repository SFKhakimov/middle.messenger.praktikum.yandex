import Block from '../../../../common/components/Block'
import Modal from '../../../../common/components/Modal'
import { ProfileInfoFieldContainer } from '../ProfileInfoFieldContainer'
import { ProfileInfoEditButton } from '../ProfileInfoEditButton'
import { ProfileInfoButtonField } from '../ProfileInfoButtonField'
import { ProfileInfoLogoutButton } from '../ProfileInfoLogoutButton'
import { ProfileImage } from '../ProfileImage'
import { ProfileImageEditModal } from '../ProfileImageEditModal'
import { ProfileInfoEditModal } from '../ProfileInfoEditModal'
import {EDIT_INFO_FIELDS, EDIT_PASSWORD_FIELDS, PROFILE_INFO_FIELDS} from "./contants"


import compile from '../../../../common/utils/compile'

import { template } from './template'
import './styles.css'
import { Props } from './types'

export default class ProfileInfo extends Block<Props> {
    constructor() {
        super({
            name: 'Иван',
            image: new ProfileImage({
                events: {
                    click: () => this.addImageEditModal(),
                },
            }),
            infoFields: new ProfileInfoFieldContainer({
                fields: PROFILE_INFO_FIELDS,
            }),
            buttons: new ProfileInfoFieldContainer({
                fields: [
                    new ProfileInfoButtonField({
                        button: new ProfileInfoEditButton({
                            title: 'Изменить данные',
                            events: {
                                click: () => this.addEditProfileModal(),
                            },
                        }),
                    }),
                    new ProfileInfoButtonField({
                        button: new ProfileInfoEditButton({
                            title: 'Изменить пароль',
                            events: {
                                click: () => this.addEditPasswordModal(),
                            },
                        }),
                    }),
                    new ProfileInfoButtonField({
                        button: new ProfileInfoLogoutButton({
                            title: 'Выйти',
                        }),
                    }),
                ],
            }),
            editProfileImageModal: new Modal({
                content: new ProfileImageEditModal(),
            }),
            editProfileModal: new Modal({
                content: new ProfileInfoEditModal({
                    title: 'Изменение данных',
                    formName: 'edit-profile',
                    content: EDIT_INFO_FIELDS,
                    events: {
                        submit: (e) => this.onSubmitEditProfile(e)
                    }
                }),
            }),
            editPasswordModal: new Modal({
                content: new ProfileInfoEditModal({
                    title: 'Изменение пароля',
                    formName: 'edit-profile-password',
                    content: EDIT_PASSWORD_FIELDS,
                    events: {
                        submit: (e) => this.onSubmitEditPasswordProfile(e)
                    }
                }),
            }),
        })
    }

    onSubmitEditProfile(e: Event) {
        e.preventDefault()

        const { editProfileModal } = this.props
        const { content } = editProfileModal.props
        const { form: formEdit } = content.props

        const formData = new FormData(e.target as HTMLFormElement)

        const form = {
            email: formData.get('email'),
            login: formData.get('login'),
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            nickName: formData.get('nickName'),
            phone: formData.get('phone'),
        }

        if (!formEdit?.onValid(form)) return
        console.log(form)
        editProfileModal.hide()
    }

    onSubmitEditPasswordProfile(e: Event) {
        e.preventDefault()

        const { editPasswordModal } = this.props
        const { content } = editPasswordModal.props
        const { form: formEdit } = content.props

        const formData = new FormData(e.target as HTMLFormElement)

        const form = {
            oldPassword: formData.get('oldPassword'),
            password: formData.get('password'),
            passwordAgain: formData.get('passwordAgain'),
        }

        if (!formEdit?.onValid(form, { key: 'passwordAgain', value: form.password as string})) return
        console.log(form)
        editPasswordModal.hide()
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
        const {
            infoFields, buttons, image, name, editProfileModal, editProfileImageModal, editPasswordModal,
        } = this.props
        return compile(template, {
            infoFields,
            buttons,
            image,
            name,
            editProfileModal,
            editProfileImageModal,
            editPasswordModal,
        })
    }
}
