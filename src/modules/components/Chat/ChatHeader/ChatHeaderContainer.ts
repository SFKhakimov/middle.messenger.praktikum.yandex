import Block from '../../../../common/components/Block'
import MenuButton from '../../../../common/components/Buttons/MenuButton'
import Popper from '../../../../common/components/Popper'
import PopperButton from '../../../../common/components/Popper/PopperButton'
import Modal from '../../../../common/components/Modal'
import Form from '../../../../common/components/Form/Form'
import Input from '../../../../common/components/Input'
import renderComponent from "../../../../common/utils/renderComponent"
import {deleteUserIconTmpl} from "../../../../common/assets/icons/deleteUserIconTmpl"
import {addUserIconTmpl} from "../../../../common/assets/icons/addUserIconTmpl"
import compile from '../../../../common/utils/compile'

import { template } from './template'
import './styles.css'
import { Props } from './types'

export default class ChatHeaderContainer extends Block<Props> {
    constructor() {
        super({
            menuButton: new MenuButton({
                events: {
                    click: (e) => this.onClick(e),
                },
            }),
            popper: new Popper({
                buttons: [
                    new PopperButton({
                        name: 'Добавить пользователя',
                        icon: renderComponent(addUserIconTmpl),
                        events: {
                            click: () => this.openAddUserModal(),
                        },
                    }),
                    new PopperButton({
                        name: 'Удалить пользователя',
                        icon: renderComponent(deleteUserIconTmpl),
                        events: {
                            click: () => this.openRemoveUserModal(),
                        },
                    }),
                ],
            }),
            addUserModal: new Modal({
                content: new Form({
                    formName: 'add-user',
                    title: 'Добавление пользователя',
                    buttonText: 'Добавить',
                    content: [
                        new Input({
                            labelName: 'Логин',
                            inputName: 'login',
                        }),
                    ],
                }),
            }),
            removeUserModal: new Modal({
                content: new Form({
                    formName: 'remove-user',
                    title: 'Удаление пользователя',
                    buttonText: 'Удалить',
                    content: [
                        new Input({
                            labelName: 'Логин',
                            inputName: 'login',
                        }),
                    ],
                }),
            }),
        })
    }

    onClick(e: Event) {
        const { popper } = this.props
        popper.addPopper(e)
    }

    openAddUserModal() {
        const { addUserModal } = this.props
        addUserModal.show('flex')
    }

    openRemoveUserModal() {
        const { removeUserModal } = this.props
        removeUserModal.show('flex')
    }

    render() {
        const {
            menuButton, popper, addUserModal, removeUserModal,
        } = this.props
        return compile(template, {
            menuButton,
            popper,
            addUserModal,
            removeUserModal,
        })
    }
}
