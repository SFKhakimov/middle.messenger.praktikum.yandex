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
import userController from "../../../../common/services/controllers/user";
import store from "../../../../common/services/store";
import get from "../../../../common/utils/mydash/get";
import {Select} from "../../../../common/components/Select";

export default class ChatHeaderContainer extends Block<Props> {
    constructor() {
        super({
            store,
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
                    // content: [
                    //     new Input({
                    //         labelName: 'Логин',
                    //         inputName: 'login',
                    //     }),
                    // ],
                    content: [new Select()]
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

    componentDidMount() {
        userController.getUser()
    }

    componentDidUpdate() {
        this.setProps({
            user: get(store.state, 'user', {})
        })
    }

    render() {
        const {
            menuButton, popper, addUserModal, removeUserModal, user: { first_name = '' } = {}
        } = this.props
        return compile(template, {
            menuButton,
            popper,
            addUserModal,
            removeUserModal,
            name: first_name
        })
    }
}
